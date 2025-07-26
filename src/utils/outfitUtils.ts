export const getOutfitSuggestion = (temp: number, condition: string) => {
  const cond = condition.toLowerCase();

  if (cond.includes("rain") || cond.includes("clouds")) return "Take an umbrella!";
  if (cond.includes("sun")) return "Wear sunglasses!";

  if (temp < 10) return "Wear a heavy jacket!";
  else if (temp >= 10 && temp < 20) return "Wear a light jacket!";
  else if (temp >= 20 && temp <= 30) return "You're good to go!";
  else if (temp > 30) return "Stay hydrated and wear cotton clothes!";
  
  return "You're good to go!";
};