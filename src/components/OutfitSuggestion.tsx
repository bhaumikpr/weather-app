import React from "react";
import { useWeather } from "../hooks/useWeather";
import { getOutfitSuggestion } from "../utils/outfitUtils";

export function OutfitSuggestion() {
  const {
    state: { currentWeather },
  } = useWeather();
  if (!currentWeather) {
    return null;
  }

  const suggestions = getOutfitSuggestion(currentWeather?.temperature);
  return (
    <div className="card">
      <h3>OutfitSuggestion</h3>
      <p>{suggestions}</p>
    </div>
  );
}
