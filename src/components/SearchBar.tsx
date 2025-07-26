import React, { useState } from "react";
import { useWeather } from "../hooks/useWeather";

export function SearchBar() {
  const [city, setCity] = useState("");
  const {
    fetchWeather,
    state: { loading, error },
  } = useWeather();

  const handleSearch = () => {
    fetchWeather(city);
  };

  return (
    <div>
      <input
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        autoComplete="off"
      />
      <button type="submit" onClick={handleSearch} disabled={loading}>
        Search
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
