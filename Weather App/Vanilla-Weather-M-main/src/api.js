function displayWeatherCondition(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`;
  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  temperatureElement.innerHTML = Math.round(temperature);
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}m/hr`;

  changeBackground(date.getHours(), response.data.condition.description);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function updateBackground() {
  let hour = new Date().getHours();
  let body = document.body;
  let searchInput = document.querySelector(".search-form-input");
  let searchButton = document.querySelector(".search-form-button");
  
  if (hour >= 6 && hour < 12) {
    body.style.background = "linear-gradient(135deg, #FFDEE9, #B5FFFC)";
    searchInput.style.background = "rgba(255, 255, 255, 0.4)";
    searchButton.style.background = "rgba(255, 200, 200, 0.6)";
  } else if (hour >= 12 && hour < 18) {
    body.style.background = "linear-gradient(135deg, #FDBB2D, #3A1C71)"; 
    searchInput.style.background = "rgba(255, 255, 255, 0.3)";
    searchButton.style.background = "rgba(240, 140, 40, 0.6)";
  } else if (hour >= 18 && hour < 21) {
    body.style.background = "linear-gradient(135deg, #1D2B64, #F8CDDA)";
    searchInput.style.background = "rgba(255, 255, 255, 0.2)";
    searchButton.style.background = "rgba(150, 80, 180, 0.6)";
  } else {
    body.style.background = "linear-gradient(135deg, #141E30, #243B55)";
    searchInput.style.background = "rgba(255, 255, 255, 0.1)";
    searchButton.style.background = "rgba(100, 100, 200, 0.6)";
  }
}

updateBackground();
setInterval(updateBackground, 60000);

function searchCity(city) {
  let apiKey = "050313a3f76481c83c1td60bf280ofe6";
  let units = "imperial";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Boston");
