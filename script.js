const submitBtn = document.getElementById('submitBtn');
const cityInput = document.querySelector('.search-bar');
const cityDisplay = document.querySelector('.city');
const tempDisplay = document.querySelector('.temp');
const humid = document.querySelector('.humidity');
const describe = document.querySelector('.description');
const windSpeed = document.querySelector('.wind');
const card = document.querySelector('.weather');

let apiKey = '0997749fc3ba4429a5d757eb54a6c649';


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
    else{
        displayError('Please enter a city');
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
          main: {temp, humidity},
          wind: {speed},
          weather:[{description,id}]} = data;


        cityDisplay.textContent = `Weather in ${city}`;
        tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
        humid.textContent = `Humidity: ${humidity}%`;
        describe.textContent = description;
        windSpeed.textContent = `Wind speed: ${speed}`

}

function getWheatherEmoji(weatherId){

}

function displayError(message){
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = message;
    errorDisplay.classList.add('errorDisplay');
    setTimeout(() => {
        errorDisplay.textContent = '';// code to run after 2 seconds
    }, 3000);
    card.appendChild(errorDisplay);
}

