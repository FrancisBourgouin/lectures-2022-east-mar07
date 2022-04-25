import axios from "axios";

export const formatWeatherData = (weatherData) => {
  const description = weatherData.weather[0].description;
  const temperatureInK = weatherData.main.temp;
  const temperatureInC = Math.round(temperatureInK - 273.15);

  return {
    description,
    temperature: temperatureInC,
  };
};

export const fetchWeatherData = (city) => {
  const apiKey = `09fd719b4b698ec0260e424f83378e3d`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  return axios.get(url);
};
