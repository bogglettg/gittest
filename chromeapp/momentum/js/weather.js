const API_KEY = "f10d9fdf8536539a73043f738e9807c7";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `날씨: ${data.weather[0].main}/온도: ${data.main.temp}`;
        });
}

function onGeoError() {
    alert("can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// weather api key = f10d9fdf8536539a73043f738e9807c7

// api call =  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//latitude = 37.549670917899455

//longitude = 127.07537669497998
