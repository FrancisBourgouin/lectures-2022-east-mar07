import { useState } from "react";
import { formatWeatherData, fetchWeatherData } from "../helpers/weatherHelpers";

export default function useWeather(initialValue) {
  const [currentCity, setCurrentCity] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);

  // useEffect(() => {
  //   fetchWeatherData("Montréal");
  // }, []);

  const updateCity = (formData) => {
    if (formData.city) {
      setCurrentCity(formData.city);
      fetchWeatherData(formData.city)
        .then((res) => setCurrentWeather(res.data))
        .catch(() => setCurrentWeather(null));
    }
  };

  const weather = currentWeather && formatWeatherData(currentWeather);

  return {
    weather,
    currentCity,
    updateCity,
  };
}
