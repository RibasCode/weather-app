'use strict'


document.addEventListener('DOMContentLoaded', () => {




const citySearchBtn = document.getElementById('city-search-btn');
const cardCity = document.getElementById('card__city');
const cardWeather = document.getElementById('card__weather');
const cardTemperature = document.getElementById('card__temperature');

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
                cardTemperature.innerHTML = data.main.temp

            }catch(error){
                console.log(error);
            }
        


        }
        
        fetchData();

    })



    
})


