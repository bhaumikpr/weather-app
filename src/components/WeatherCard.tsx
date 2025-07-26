import React from "react";
import { useWeather } from "../hooks/useWeather";

export function WeatherCard() {
  const {
    state: { currentWeather },
  } = useWeather();

  if (!currentWeather) {
    return <p> Please enter city name</p>;
  }

  return (
    <div className="card slideUp">
      <h3>{currentWeather.city}</h3>
      <ul>
        <li>Tempratute : {currentWeather.temperature}°C</li>
        <li>Wind Speed : {currentWeather.windSpeed} km/h</li>
        <li>Humidity : {currentWeather.humidity}% </li>
        <li>Condition : {currentWeather.condition} </li>
      </ul>
    </div>
  );
}
