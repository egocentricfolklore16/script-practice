const submitBtn = document.querySelector('.my-btn');
const cityInput = document.querySelector('.search-bar');
const cityDisplay = document.querySelector('.location-main');
const tempDisplay = document.querySelector('.current-temp-main');
const humid = document.getElementById('humidity');
const describe = document.querySelector('.description');
const windSpeed = document.getElementById('wind');
const card = document.querySelector('.current-temp-main');
const presSure = document.getElementById('pressure');
const feelsLike = document.getElementById('feels_like');
const sunSet = document.querySelector('.sun-set');
const sunRise = document.querySelector('.sun-rise');
const range = document.querySelector('.range-main');
const visible = document.querySelector('.visibility');
let dewpoint = document.querySelector('.dew-point');

let apiKey = '1ef5b828c88dec3a0c99cb2f6746024d';


submitBtn.addEventListener('click', async event =>{

    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
        }
    }
    
})

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    console.log(response);

    if(!response.ok){
        throw new Error('Could not fetch weather Data')
    }
        return await response.json();

}

function displayWeatherInfo(data){
    const{name: city,
        visibility,
          main: {temp, humidity,pressure, temp_min, temp_max, feels_like},
          wind: {speed},
          sys: {sunrise, sunset},
          weather:[{description,id}]} = data;
const sunet = `${sunset}`;
const sunIse = `${sunrise}`;


        cityDisplay.textContent = `${city}`;
        tempDisplay.textContent = `${(temp - 273.15).toFixed(0)}°`;
        humid.textContent = `${humidity}%`;
        describe.textContent = `${description}`;
        windSpeed.textContent = `${(speed * 3.6)}kmh`;
        feelsLike.textContent = `${(feels_like - 273.15).toFixed(0)}°`;
        presSure.textContent = `${pressure}`;
        sunRise.textContent = `${convertUnixToTime(sunIse)}`;
        sunSet.textContent = `${convertUnixToTime(sunet)}`;
        range.textContent = `H: ${(temp_max - 273.15).toFixed(1)}°  L: ${(temp_min - 273.15).toFixed(1)}°`;

        visible.textContent = `${visibility / 1000}km`
        const a = 17.27;
        const b = 237.7;
        const alpha = ((a * temp) / (b + temp)) + Math.log(humidity / 100);
        const dewPoint = (b * alpha) / (a - alpha);
            dewpoint.textContent = `${(dewPoint).toFixed(0)}°`;

console.log("Sunset:", );
}

function convertUnixToTime(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
  return date.toLocaleTimeString(); // Adjusts to local time
}

function getWheatherEmoji(weatherId){

}

function displayError(message){
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');
}



async function fiveDayWeather(){
    const{coord: {lon, lat}} = data;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    console.log(response);
}