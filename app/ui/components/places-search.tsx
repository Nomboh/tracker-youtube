"use client";
import React, { useEffect } from "react";
import clsx from "clsx";
import { Loader } from "@googlemaps/js-api-loader";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  placeholder: string;
  htmlFor: string;
  defaultValue?: string;
  isEdit?: boolean;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  error?: string[] | undefined;
}

export const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
  version: "weekly",
  libraries: ["places", "maps", "marker"],
});

function PlacesSearch({
  children,
  placeholder,
  htmlFor,
  className,
  error,
  defaultValue,
  isEdit = false,
  ...props
}: InputGroupProps) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const {
    init,
    ready,
    value,
    setValue,
    clearSuggestions,
    suggestions: { data, status },
  } = usePlacesAutocomplete({
    debounce: 300,
    defaultValue,
    initOnMount: false,
  });

  useEffect(() => {
    loader
      .importLibrary("places")
      .then(() => {
        init();
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const handleSelect = ({
    description,
    structured_formatting: { main_text },
  }: {
    description: string;
    structured_formatting: { main_text: string };
  }) => {
    if (isEdit) {
      setValue(main_text, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions

      getGeocode({ address: description }).then(result => {
        const { lat, lng } = getLatLng(result[0]);
        const param = new URLSearchParams(searchParams);
        param.set("lat", lat.toString());
        param.set("lng", lng.toString());
        replace(`${pathname}?${param.toString()}`);
      });
    } else {
      setValue(description, false);
      clearSuggestions();
    }
  };

  const renderSuggestions = () => {
    return data?.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          key={place_id}
          className=" cursor-pointer p-2 hover:bg-gray-200"
          onClick={() => handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div className={clsx(` flex flex-col gap-2 ${className}`)}>
      <label htmlFor={htmlFor} className=" text-gray-900">
        {children}
      </label>
      <input
        className=" outline-none focus:outline-indigo-200 focus:outline-2 block w-full rounded-md border border-gray-200 p-4 outline-2"
        {...props}
        id={htmlFor}
        name={htmlFor}
        type="text"
        value={value}
        disabled={!ready}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
      />
      {status === "OK" && (
        <ul className=" bg-white w-full rounded-md shadow-md">
          {renderSuggestions()}
        </ul>
      )}
      {error && <p className=" text-red-500 text-sm">{error[0]}</p>}
    </div>
  );
}

export default PlacesSearch;
