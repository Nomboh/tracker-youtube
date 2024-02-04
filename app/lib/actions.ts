"use server";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import { prisma } from "./prisma";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export type State = {
  errors?: {
    productName?: string[];
    productImage?: string[];
    destination?: string[];
    description?: string[];
    price?: string[];
  };
  message?: string | null;
};

const orderSchema = z.object({
  productName: z.string({ required_error: "Product name is required" }),
  productImage: z.string().url({ message: "Invalid image URL" }),
  destination: z
    .string()
    .min(2, { message: "Destination must be at least 10 characters long" }),
  description: z
    .string()
    .min(2)
    .max(1000, { message: "Description must be at least 10 characters long" }),
  price: z.coerce.number().positive(),
  userId: z.string(),
});

async function uploadImage(imageBuffer: string, mimeType: string) {
  var fileUrl = `data:${mimeType};base64,${imageBuffer}`;

  const uploadResult = await new Promise<UploadApiResponse>(
    (resolve, reject) => {
      cloudinary.uploader.upload(
        fileUrl,
        {
          invalidate: true,
          folder: "tracker-youtube",
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            if (result) {
              resolve(result);
            } else {
              reject(new Error("No result from cloudinary"));
            }
          }
        }
      );
    }
  );

  return uploadResult.secure_url;
}

export async function createOrder(
  id: string,
  prevState: State | undefined,
  formData: FormData
): Promise<State | undefined> {
  const file = formData.get("image") as File;
  const arrayBuffer = await file.arrayBuffer();
  const imageBuffer = Buffer.from(arrayBuffer).toString("base64");

  let image = "";
  if (imageBuffer) {
    image = await uploadImage(imageBuffer, file.type);
  }

  const orderData = {
    productName: formData.get("productName") as string,
    productImage: image,
    destination: formData.get("destination") as string,
    description: formData.get("description") as string,
    price: Number(formData.get("price")),
    userId: id,
  };

  const validatedOrderData = orderSchema.safeParse(orderData);

  if (!validatedOrderData.success) {
    return {
      errors: validatedOrderData.error.flatten().fieldErrors,
      message: "Invalid order data",
    };
  }

  try {
    await prisma.order.create({
      data: {
        ...validatedOrderData.data,
        tracking: {
          create: {},
        },
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error creating order");
  }

  revalidatePath("/dashboard/orders");
  redirect("/dashboard/orders");
}

export async function updateOrder(id: string, formData: FormData) {
  const orderData = {
    location: formData.get("location") as string,
    arrivalTime: new Date(formData.get("arrivalTime") as string),
    status: formData.get("status") as string,
    latitude: formData.get("latitude") as string,
    longitude: formData.get("longitude") as string,
    courier: formData.get("courier") as string,
    couriersNumber: formData.get("courierNumber") as string,
  };

  try {
    await prisma.order.update({
      where: {
        id,
      },
      data: {
        status: orderData.status,
        tracking: {
          update: {
            ...orderData,
          },
        },
      },
    });
  } catch (error) {
    return { message: "Error updating order" };
  }

  revalidatePath("/dashboard/orders");
  redirect("/dashboard/orders");
}

export async function deleteOrder(id: string) {
  try {
    await prisma.order.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    return { message: "Error deleting order" };
  }

  revalidatePath("/dashboard/orders");
}

export async function authenticateUser(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials";

        default:
          return "Error signing in";
      }
    }

    throw error;
  }
}
