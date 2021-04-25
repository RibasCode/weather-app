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
const cardImg = document.getElementById('card__img');

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
                cardTemperature.innerHTML = data.main.temp.toFixed(0) + '<span style="position: absolute; font-size: 32px;">º</span>'
                cardMaxTemperature.innerHTML = data.main.temp_max.toFixed(0) + 'º'
                cardMinTemperature.innerHTML = data.main.temp_min.toFixed(0) + 'º'
                cardHumidity.innerHTML = data.main.humidity + '%'
                cardWind.innerHTML = data.wind.speed.toFixed(0) + 'km/h'

                if(data.weather[0].main == 'Clear' && data.weather[0].icon.includes('d')){
                    cardImg.src = 'assets/img/sunny.png'
                    document.documentElement.style.setProperty('--clr-primary', '#ffffff');
                    document.documentElement.style.setProperty('--clr-typo', '#282828');
                    document.documentElement.style.setProperty('--clr-border', '#eaeaea');
                    document.documentElement.style.setProperty('--clr-outline', '#d1d1d1');
                    document.documentElement.style.setProperty('--clr-black', '#000000');
                    document.documentElement.style.setProperty('--clr-white', '#ffffff');
                    document.documentElement.style.setProperty('--clr-broken-white', '#fafafa');
                    document.documentElement.style.setProperty('--clr-broken-black', '#1f1f1f');
                    document.documentElement.style.setProperty('--clr-shadow', 'rgba(0,0,0, 0.05)');
                    document.documentElement.style.setProperty('--clr-shadow-hover', 'rgba(0,0,0, 0.10)');
                }else if(data.weather[0].main == 'Clouds' && data.weather[0].icon.includes('d')){
                    cardImg.src = 'assets/img/clouds.png'
                    document.documentElement.style.setProperty('--clr-primary', '#ffffff');
                    document.documentElement.style.setProperty('--clr-typo', '#282828');
                    document.documentElement.style.setProperty('--clr-border', '#eaeaea');
                    document.documentElement.style.setProperty('--clr-outline', '#d1d1d1');
                    document.documentElement.style.setProperty('--clr-black', '#000000');
                    document.documentElement.style.setProperty('--clr-white', '#ffffff');
                    document.documentElement.style.setProperty('--clr-broken-white', '#fafafa');
                    document.documentElement.style.setProperty('--clr-broken-black', '#1f1f1f');
                    document.documentElement.style.setProperty('--clr-shadow', 'rgba(0,0,0, 0.05)');
                    document.documentElement.style.setProperty('--clr-shadow-hover', 'rgba(0,0,0, 0.10)');
                }else if(data.weather[0].main == 'Clear' && data.weather[0].icon.includes('n')){
                    cardImg.src = 'assets/img/moon.png'
                    document.documentElement.style.setProperty('--clr-primary', '#282828');
                    document.documentElement.style.setProperty('--clr-typo', '#ffffff');
                    document.documentElement.style.setProperty('--clr-border', '#404040');
                    document.documentElement.style.setProperty('--clr-outline', '#808080');
                    document.documentElement.style.setProperty('--clr-black', '#ffffff');
                    document.documentElement.style.setProperty('--clr-white', '#282828');
                    document.documentElement.style.setProperty('--clr-broken-white', '#1f1f1f');
                    document.documentElement.style.setProperty('--clr-broken-black', '#fafafa');
                    document.documentElement.style.setProperty('--clr-shadow', 'rgba(0,0,0, 0.20)');
                    document.documentElement.style.setProperty('--clr-shadow-hover', 'rgba(0,0,0, 0.40)');
                }else if(data.weather[0].main == 'Clouds' && data.weather[0].icon.includes('n')){
                    cardImg.src = ''
                    document.documentElement.style.setProperty('--clr-primary', '#282828');
                    document.documentElement.style.setProperty('--clr-typo', '#ffffff');
                    document.documentElement.style.setProperty('--clr-border', '#404040');
                    document.documentElement.style.setProperty('--clr-outline', '#808080');
                    document.documentElement.style.setProperty('--clr-black', '#ffffff');
                    document.documentElement.style.setProperty('--clr-white', '#282828');
                    document.documentElement.style.setProperty('--clr-broken-white', '#1f1f1f');
                    document.documentElement.style.setProperty('--clr-broken-black', '#fafafa');
                    document.documentElement.style.setProperty('--clr-shadow', 'rgba(0,0,0, 0.20)');
                    document.documentElement.style.setProperty('--clr-shadow-hover', 'rgba(0,0,0, 0.40)');
                }

            }catch(error){
                console.log(error);
            }
        
        }
        
        fetchData();

    })

})


