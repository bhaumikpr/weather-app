import React from "react";

export function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader"></div>
      <p>Loading weather data...</p>
    </div>
  );
}