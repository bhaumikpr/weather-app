import React from "react";
import { WeatherCard } from "./WeatherCard";
import { SearchBar } from "./SearchBar";
import { HistoryList } from "./HistoryList";
import { OutfitSuggestion } from "./OutfitSuggestion";
import { ThemeToggle } from "./ThemeToggle";
import { useWeather } from "../hooks/useWeather";
import { Loader } from "./Loader";

export function WeatherDashboard() {
  const {
    state: { loading, error },
  } = useWeather();

  const weather = loading ? (
    <Loader />
  ) : error ? null : (
    <section className="results-section">
      <WeatherCard />
      <OutfitSuggestion />
    </section>
  );
  
  return (
    <div className="container">
      <header className="dashboard-header">
        <h1 className="h1">Weather App</h1>
        <ThemeToggle />
      </header>

      <section className="search-section">
        <SearchBar />
      </section>

      {weather}

      <section className="history-section">
        <HistoryList />
      </section>
    </div>
  );
}
