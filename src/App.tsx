import React from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { WeatherProvider } from "./providers/WeatherProvider";
import { WeatherDashboard } from "./components/WeatherDashboard";

function App() {
  return (
    <WeatherProvider>
      <WeatherDashboard />
    </WeatherProvider>
  );
}

export default App;
