import { weatherData } from './citysearch';

const cityName = document.getElementById("city-name");
const cityTemp = document.getElementById("city-temp");
const weatherDescr = document.getElementById("weather-descr");
const weatherIcon = document.getElementById("weather-icon");
const cityDate = document.getElementById("city-date");

// API call by coordinates

const geoFetch = (lat, long) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=1a93770287578f37f361651850000f45`)
    .then(response => response.json())
    .then(weatherData);
};

// Geonavigation
const fetchWeatherByCoordinates = () => {
  const myLocation = navigator.geolocation.getCurrentPosition((data) => {
    const myLat = data.coords.latitude;
    const myLong = data.coords.longitude;
    console.log(data, data.coords.latitude, data.coords.longitude);
    geoFetch(myLat, myLong);
  });
};
export { fetchWeatherByCoordinates };
