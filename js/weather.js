const weatherForm = document.querySelector("#weather");
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "62c1125e3276b6d2854f7942f1103875";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            city.innerText = data.name;
            weather.innerText = `${data.main.temp}°C / ${data.weather[0].main}`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
    weatherForm.classList.add("hidden");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);