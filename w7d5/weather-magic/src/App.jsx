import CityForm from "./components/CityForm";
import Weather from "./components/Weather";

import "./App.css";

import useWeather from "./hooks/useWeather";
import { useEffect } from "react";

function App() {
  const { weather, currentCity, updateCity } = useWeather("");
  const { weather2, currentCity2, updateCity2 } = useWeather("");

  return true ? <h1></h1> : <h2></h2>;
  return (
    <div className="App">
      <header>
        <h1>⚡⚡⚡SUPER WEATHER OF DESTINY⚡⚡⚡</h1>
        {currentCity && <h2>Currently checking for : {currentCity}</h2>}
      </header>
      <CityForm onSubmit={updateCity} />
      {weather && <Weather city={currentCity} weather={weather} />}
    </div>
  );
}

export default App;
