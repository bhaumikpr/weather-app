export const getOutfitSuggestion = (temp: number) => {
  switch (true) {
    case temp < 5:
      return "Wear a heavy coat, gloves, and a hat!";
    case temp >= 5 && temp < 15:
      return "Wear a warm jacket.";
    case temp >= 15 && temp < 25:
      return "A light jacket or sweater is good.";
    case temp >= 25 && temp <= 35:
      return "Wear breathable, light clothes.";
    case temp > 35:
      return "It's hot! Stay indoors if you can, and drink lots of water.";
    default:
      return "You're good to go!";
  }
};