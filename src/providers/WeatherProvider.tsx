import React, { useReducer, type ReactNode } from "react";
import { fetchWeather } from "../services/weather";
import {
  WeatherContext,
  type WeatherData,
  type WeatherState,
} from "../context/WeatherContext";

type WeatherAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_WEATHER"; payload: WeatherData }
  | { type: "SET_ERROR"; payload: string }
  | { type: "ADD_TO_HISTORY"; payload: string }
  | { type: "CLEAR_ERROR" };

const initialState: WeatherState = {
  currentWeather: null,
  searchHistory: [],
  loading: false,
  error: null,
};

const weatherReducer = (
  state: WeatherState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_WEATHER":
      return {
        ...state,
        currentWeather: action.payload,
        loading: false,
        error: null,
      };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "ADD_TO_HISTORY": {
      const newHistory = [
        action.payload,
        ...state.searchHistory.filter((city) => city !== action.payload),
      ].slice(0, 5);
      return { ...state, searchHistory: newHistory };
    }
    case "CLEAR_ERROR":
      return { ...state, error: null };
    default:
      return state;
  }
};

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const fetchWeatherApiCall = async (city: string) => {
    if (!city.trim()) {
      dispatch({
        type: "SET_ERROR",
        payload: "Please enter a valid city name",
      });
      return;
    }

    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "CLEAR_ERROR" });
    try {
      const response = await fetchWeather(city);
      const weatherData = {
        city: response.name,
        temperature: response.main.temp,
        condition: response.weather[0].main,
        windSpeed: response.wind.speed,
        humidity: response.main.humidity,
      };
      dispatch({ type: "SET_WEATHER", payload: weatherData });
      dispatch({ type: "ADD_TO_HISTORY", payload: city });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to fetch weather data";
      dispatch({ type: "SET_ERROR", payload: errorMessage });
    }
  };

  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" });
  };

  return (
    <WeatherContext.Provider
      value={{ state, fetchWeather: fetchWeatherApiCall, clearError }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
