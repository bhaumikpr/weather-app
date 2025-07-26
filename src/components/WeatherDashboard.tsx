import React from "react";
import { WeatherCard } from "./WeatherCard";
import { SearchBar } from "./SearchBar";
import { HistoryList } from "./HistoryList";
import { OutfitSuggestion } from "./OutfitSuggestion";

export function WeatherDashboard() {
  return (
    <>
      <header> app name and dark and ligh mode</header>
      <main>
        <SearchBar/>
        <WeatherCard />
        <HistoryList/>
        <OutfitSuggestion/>
      </main>
      <footer> footer</footer>
    </>
  );
}
