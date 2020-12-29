// Feature #1
let now = new Date();

let timeChange = document.querySelector("#current-time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

timeChange.innerHTML = `${day} ${hours}:${minutes}`;

// Search Location

function showWeather(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;

  let temp = Math.round(response.data.main.temp);
  let tempCelsius = document.querySelector("#temp");
  tempCelsius.innerHTML = `${temp}`;

  let description = response.data.weather[0].main;
  let descWeather = document.querySelector("#description");
  descWeather.innerHTML = `${description}`;

  let windSpeed = Math.round(response.data.wind.speed);
  let descWind = document.querySelector("#wind");
  descWind.innerHTML = `${windSpeed}`;

  let humidity = Math.round(response.data.main.humidity);
  let humidityValue = document.querySelector("#humidity");
  humidityValue.innerHTML = `${humidity}`;
}

function enterCity(city) {
  let apiKey = "5bed8f72cbd60b2d0edc71095210ab04";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);
}

function citySubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  enterCity(city);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", citySubmit);

// Current Location

function showCoords(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "5bed8f72cbd60b2d0edc71095210ab04";
  let apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrlCurrent).then(showWeather);
}

navigator.geolocation.getCurrentPosition(showCoords);

function currentCity(current) {
  let apiKey = "5bed8f72cbd60b2d0edc71095210ab04";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${current.coords.latitude}&lon=${current.coords.longitude}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentCity);
}

let currentLocationButton = document.querySelector("#current-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

// Colour Picker Buttons

function chBackcolorBlue() {
  document.body.style.background = "#e2ecf8";
}

let blueButton = document.querySelector(".blue");
blueButton.addEventListener("click", chBackcolorBlue);

function chBackcolorYellow() {
  document.body.style.background = "#fef9db";
}

let yellowButton = document.querySelector(".yellow");
yellowButton.addEventListener("click", chBackcolorYellow);

function chBackcolorGreen() {
  document.body.style.background = "#d4ecdd";
}

let greenButton = document.querySelector(".green");
greenButton.addEventListener("click", chBackcolorGreen);

function chBackcolorOrange() {
  document.body.style.background = "#fadfd9";
}

let orangeButton = document.querySelector(".orange");
orangeButton.addEventListener("click", chBackcolorOrange);

function chBackcolorPurple() {
  document.body.style.background = "#efe4ec";
}

let purpleButton = document.querySelector(".purple");
purpleButton.addEventListener("click", chBackcolorPurple);
