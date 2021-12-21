// TODO: Write your JS code in here
// imports
import $ from 'jquery';
import 'select2';
import { fetchWeatherByCoordinates } from './geolocation';
import { getWeather } from './citysearch';
// plugins

$('#city-input').select2();
const cities = ["Amsterdam", "Bali", "Barcelona", "Belo Horizonte", "Berlin", "Bordeaux", "Brussels", "Buenos Aires", "Casablanca", "Chengdu", "Copenhagen", "Kyoto", "Lausanne", "Lille", "Lisbon", "London", "Lyon", "Madrid", "Marseille", "Melbourne", "Mexico", "Milan", "Montréal", "Nantes", "Oslo", "Paris", "Rio de Janeiro", "Rennes", "Rome", "São Paulo", "Seoul", "Shanghai", "Shenzhen", "Singapore", "Stockholm", "Tel Aviv", "Tokyo"];

const randomCity = cities[Math.floor(Math.random() * cities.length)];


$('#city-input').select2({ data: cities, width: '100%' });

getWeather(randomCity);

// Event Listeners
const searchForm = document.getElementById("search-form");
const citySelect = document.getElementById("city-input");
const userQuery = document.getElementById("user-query");
const bgImg = document.querySelector(".bg-image");

// Search form listener
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectResults = citySelect.value;
  const userResults = userQuery.value;
  getWeather(selectResults);
  getWeather(userResults);
  this.bgImg = "";
});

const geoLocation = document.getElementById("geolocation");

// Geolocation listener
geoLocation.addEventListener("click", (event) => {
  event.preventDefault();
  fetchWeatherByCoordinates();
});
