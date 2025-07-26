export const getOutfitSuggestion = (temp: number, condition: string) => {
  if (condition.includes("rain") || condition.includes("clouds")) return "Take an umbrella!";
  if (condition.includes("sun")) return "Wear sunglasses!";
  if (temp < 10) return "Wear a heavy jacket!";
  if (temp < 20) return "Wear a light jacket!";
  if (temp > 30) return "Stay hydrated and wear cotton clothes!";
  return "You're good to go!";
};