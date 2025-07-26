import React from "react";
import { useWeather } from "../hooks/useWeather";

export function WeatherCard() {
  const {
    state: { currentWeather },
  } = useWeather();

  if (!currentWeather) return null;

  return (
    <>
      <h3>Weather</h3>
      {currentWeather.city}
      {currentWeather.temperature}°C
      {currentWeather.windSpeed} km/h
      {currentWeather.humidity}%
    </>
  );
}
