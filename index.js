const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");
const cityName=document.querySelector(".cityname");




async function checkweather(city) {
    const api_key = "2289e0cb0985961ad12f47c0e2c6d942";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`)
        .then(response => response.json());

    if(weather_data.cod==='404'){
        location_not_found.style.display = 'flex';
        weather_body.style.display='none';
        return;
    }

    console.log(weather_data)
    location_not_found.style.display = 'none';
    weather_body.style.display='flex';
    cityName.innerHTML=`${weather_data.name}`;
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.wind.speed} Km/H`;

    switch (weather_data.weather[0].description) {
        case 'few clouds':
            weather_img.src = "images/cloud.png";
            break;
        case 'clear sky':
            weather_img.src = "images/clear.png";
            break;
        case 'light rain':
            weather_img.src = "images/rain.png";
            break;
        case 'snow':
            weather_img.src = "images/snowfall.png";
            break;
        case 'mist':
            weather_img.src = "images/mist.png";
            break;
        case 'broken clouds':
            weather_img.src = "images/broken-cloud.png";
            break;
        case 'thunderstorm':
            weather_img.src = "images/thunderstorm.png";
            break;
        case 'haze':
            weather_img.src = "images/haze.png";
            break;
        case 'overcast clouds':
            weather_img.src = "images/overcastcloud.jpg";
            break;
        case 'scattered clouds':
            weather_img.src = "images/scattered cloud.jpg";
            break;
        case 'fog':
            weather_img.src = "images/fog.jpg";
            break;
        case 'heavy intensity rain':
            weather_img.src = "images/thunder.png";
            break;
        case 'light intensity shower rain':
            weather_img.src = "images/light rain.png";
        
    }
}

searchBtn.addEventListener("click", () => {
    checkweather(inputBox.value);
    inputBox.value="";
    inputBox.focus();
})