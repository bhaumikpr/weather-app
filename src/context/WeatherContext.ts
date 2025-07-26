import { createContext } from "react";

export interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  windSpeed: number;
  humidity: number;
}

export interface WeatherState {
  currentWeather: WeatherData | null;
  searchHistory: string[];
  loading: boolean;
  error: string | null;
}

interface WeatherContextType {
  state: WeatherState;
  fetchWeather: (city: string) => Promise<void>;
  clearError: () => void;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);