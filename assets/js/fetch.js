'use strict'


document.addEventListener('DOMContentLoaded', () => {

const citySearchBtn = document.getElementById('city-search-btn');
const cardCity = document.getElementById('card__city');
const cardWeather = document.getElementById('card__weather');
const cardTemperature = document.getElementById('card__temperature');
const cardMaxTemperature = document.getElementById('card__max-temperature');
const cardMinTemperature = document.getElementById('card__min-temperature');
const cardHumidity = document.getElementById('card__humidity');
const cardWind = document.getElementById('card__wind');

    citySearchBtn.addEventListener('click', () => {


        const fetchData = async () => {
            try{

                const proxy = `http://cors-anywhere.herokuapp.com/`
                const key = `136882aa473e6f9a1455a8308bb03c07`
                let city = document.getElementById('city-input').value

                const respuesta = await fetch(`${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`)
                const data = await respuesta.json()
                
                console.log(data)
                cardCity.innerHTML = data.name
                cardWeather.innerHTML = data.weather[0].main
                cardTemperature.innerHTML = data.main.temp.toFixed(0) + 'º'
                cardMaxTemperature.innerHTML = data.main.temp_max.toFixed(0) + 'º'
                cardMinTemperature.innerHTML = data.main.temp_min.toFixed(0) + 'º'
                cardHumidity.innerHTML = data.main.humidity + '%'
                cardWind.innerHTML = data.wind.speed.toFixed(0) + 'km/h'

            }catch(error){
                console.log(error);
            }
        
        }
        
        fetchData();

    })

})


