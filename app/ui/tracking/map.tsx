"use client";
import React from "react";
import { loader } from "../components/places-search";
import { Tracking } from "@prisma/client";

function TrackingMap({ trackingInfo }: { trackingInfo: Tracking }) {
  const { location, latitude, longitude } = trackingInfo;
  loader.importLibrary("maps").then(() => {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: { lat: parseFloat(latitude!), lng: parseFloat(longitude!) },
        zoom: 10,
      }
    );
    new google.maps.Marker({
      position: { lat: parseFloat(latitude!), lng: parseFloat(longitude!) },
      map,
      title: location,
    });
  });
  return (
    <div className="  text-lg md:text-2xl font-bold mt-16 mb-1">
      <h1 className="">Live Location</h1>
      <div id="map" className=" h-[400px] w-full"></div>
    </div>
  );
}

export default TrackingMap;
