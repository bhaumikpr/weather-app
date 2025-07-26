# 🌦️ Weather-Based Outfit Recommender

A smart React + TypeScript web app that recommends outfits based on real-time weather data using the OpenWeatherMap API. It features city search with autosuggestions, light/dark themes, and responsive UI — all built with plain CSS (no Tailwind).

---

## 🚀 Features

- 🔍 City search with autosuggestion
- 🌡️ Real-time weather and outfit suggestions
- 🌓 Light/Dark theme toggle with persistence
- 📱 Responsive design (mobile-first)
- 🎨 Smooth animations and interactions
- 💾 Search history
- 🔐 Environment variable support via `.env`

---

## 🛠️ Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- Plain CSS (no framework)
- Context API (for theme management)
---

## 📁 Project Structure

```
src/
├── components/
│   ├── SearchBar.tsx
│   ├── WeatherCard.tsx
│   ├── OutfitSuggestion.tsx
│   ├── ThemeToggle.tsx
│   ├── HistoryList.tsx
├── utils/
│   ├── fetchWeather.ts
│   ├── getOutfitSuggestion.ts
├── context/
│   └── ThemeContext.tsx
├── App.tsx
└── main.tsx
└── index.css
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-outfit-app.git
cd weather-outfit-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root using the example provided:

#### 📄 `.env.example`

```env
# Rename this to .env and add your API key
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
```

> ✅ **Never commit your `.env` file.** It should be in `.gitignore`.

### 4. Run the Development Server

```bash
npm run dev
```

App will be available at: [http://localhost:5173](http://localhost:5173)


## 🌍 OpenWeatherMap API

We use the **Current Weather Data** endpoint:

```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

See: [OpenWeatherMap API Docs](https://openweathermap.org/current)

---

## 🔥 Deployment (Optional)

Deploy to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/) with the following steps:

- Set `VITE_WEATHER_API_KEY` as an environment variable in dashboard
- Point to your GitHub repository
- Done! 🎉

---

## 🤝 Contribution

PRs and suggestions are welcome!

- Fork the repo
- Create a feature branch
- Submit a pull request

---

## 📝 License

MIT © [Your Name](https://github.com/your-username)