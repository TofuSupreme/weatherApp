import moment from 'moment';

const bgImg = document.querySelector(".bg-image");
const cityName = document.getElementById("city-name");
const cityTemp = document.getElementById("city-temp");
const weatherDescr = document.getElementById("weather-descr");
const weatherIcon = document.getElementById("weather-icon");
const cityDate = document.getElementById("city-date");

// API manipulation

const weatherData = (data) => {
  cityName.innerHTML = `${data.name}, ${data.sys.country}`;
  cityTemp.innerHTML = data.main.temp;
  data.weather.forEach((element) => {
    if (element.description.includes("clear")) {
      bgImg.classList.add('clear-sky');
      bgImg.classList.remove("rainy", "foggy", "snowy", "standard");
    } else if (element.description.includes("rain") || (element.description.includes("drizzle"))) {
      bgImg.classList.add("rainy");
      bgImg.classList.remove("clear-sky", "foggy", "snowy", "standard");
    } else if (element.description.includes("fog") || (element.description.includes('mist'))) {
      bgImg.classList.add('foggy');
      bgImg.classList.remove("clear-sky", "rainy", "snowy", "standard");
    } else if (element.description.includes("snow")) {
      bgImg.classList.add('snowy');
      bgImg.classList.remove("clear-sky", "rainy", "foggy", "standard");
    } else {
      bgImg.classList.add('standard');
      bgImg.classList.remove("clear-sky", "rainy", "foggy", "snowy");
    }
    weatherDescr.innerHTML = element.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${element.icon}.png`;
    cityDate.innerHTML = (moment().utcOffset(data.timezone / 60).format('dddd, MMMM Do, h:mm a'));
  });
};

// API call by search
const getWeather = (query) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=1a93770287578f37f361651850000f45`)
    .then(response => response.json())
    .then(weatherData);
};

export { weatherData, getWeather };
