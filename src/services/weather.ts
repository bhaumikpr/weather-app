import { weatherApiKey } from "../constants/environments";
import { cityNotFound } from "../constants/error";

export const fetchWeather = async (city: string) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`
  );
  if (!res.ok) throw new Error(cityNotFound);
  return res.json();
};