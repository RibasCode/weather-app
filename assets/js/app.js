'use strict'



// --------------------------------------------------------------
// variable
// --------------------------------------------------------------
const citySearchBtn = document.getElementById('city-search-btn');
const cardCity = document.getElementById('card__city');
const cardWeather = document.getElementById('card__weather');
const cardTime = document.getElementById('card__time');
const cardDay = document.getElementById('card__day');
const cardTemperature = document.getElementById('card__temperature');
const cardMaxTemperature = document.getElementById('card__max-temperature');
const cardMinTemperature = document.getElementById('card__min-temperature');
const cardHumidity = document.getElementById('card__humidity');
const cardWind = document.getElementById('card__wind');
const cardImg = document.getElementById('card__img');
const cardContent = document.getElementById('card__content');
const cardGreetingsText = document.getElementById('card__greetings-text');
const cardGreetings = document.getElementById('card__greetings');
const cardError = document.getElementById('card__error');
const heroBot = document.getElementById('hero__bot');

const card = new Card()
const ft = new Fetch()
let palanca = true;

// --------------------------------------------------------------
// press enter key
// --------------------------------------------------------------

var input = document.getElementById("city-input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("city-search-btn").click();
  }
});

// --------------------------------------------------------------
// click search btn
// --------------------------------------------------------------

citySearchBtn.addEventListener('click', () => {
    
    // Transition "Data load" fase1
    card.hideInfo()

    // el then((data)) esta retornant la data perque es pugui fer servir dins de la callback
    ft.getDataWeather().then((dataWeather) => {

        console.log(dataWeather);

        if(dataWeather.cod == '404' || dataWeather.cod == '400'){
            card.showError(dataWeather);

        }

        ft.getDataTimezone(dataWeather).then((dataTimeZone) => {

            console.log(dataTimeZone)

            setTimeout(function(){

                printCard(dataWeather, dataTimeZone)
    
            }, 500);

        })

    })

})




