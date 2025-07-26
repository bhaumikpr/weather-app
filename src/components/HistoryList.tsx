import { useWeather } from "../hooks/useWeather";

export function HistoryList() {
  const {
    state: { searchHistory },
    fetchWeather,
  } = useWeather();

  if (searchHistory.length === 0) {
    return null;
  }

  const handleSearch = (city: string) => {
    fetchWeather(city);
  };

  return (
    <div className="card">
      <h3>Recent Searches</h3>
      <ul className="history-list">
        {searchHistory.map((city, idx) => (
          <li key={`${city}-${idx}`} onClick={() => handleSearch(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}
