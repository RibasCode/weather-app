'use strict'



// --------------------------------------------------------------
// variable
// --------------------------------------------------------------

const citySearchBtn = document.getElementById('city-search-btn');
const cardCity = document.getElementById('card__city');
const cardWeather = document.getElementById('card__weather');
const cardTemperature = document.getElementById('card__temperature');
const cardMaxTemperature = document.getElementById('card__max-temperature');
const cardMinTemperature = document.getElementById('card__min-temperature');
const cardHumidity = document.getElementById('card__humidity');
const cardWind = document.getElementById('card__wind');
const cardImg = document.getElementById('card__img');
const heroBot = document.getElementById('hero__bot');
const cardTime = document.getElementById('card__time');
const cardDay = document.getElementById('card__day');
const cardContent = document.getElementById('card__content');
const cardGreetingsText = document.getElementById('card__greetings-text');
const cardGreetings = document.getElementById('card__greetings');
const cardError = document.getElementById('card__error');

let palanca = true;

// --------------------------------------------------------------
// class inst
// --------------------------------------------------------------

const card = new Card()
const fetchRequest = new Fetch()

// --------------------------------------------------------------
// press enter key functionality
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
    fetchRequest.getDataWeather().then((dataWeather) => {

        console.log(dataWeather);

        if(dataWeather.cod == '404' || dataWeather.cod == '400'){
            card.showError(dataWeather);

        }

        fetchRequest.getDataTimezone(dataWeather).then((dataTimeZone) => {

            console.log(dataTimeZone)

            setTimeout(function(){

                palanca = true;

                // change card content depending on weather
                if(dataWeather.weather[0].main == 'Clear' && dataWeather.weather[0].icon.includes('d')){
                    card.hideGreetingsMessage();
                    card.hideError();
                    cardImg.src = 'assets/img/sun.png';
                    card.ligthColor();
                    card.cardInfo(dataWeather, dataTimeZone);
                    
                }else if(dataWeather.weather[0].main == 'Clouds' && dataWeather.weather[0].icon.includes('d')){
                    card.hideGreetingsMessage();
                    card.hideError();
                    cardImg.src = 'assets/img/clouds-day.png';
                    card.ligthColor();
                    card.cardInfo(dataWeather, dataTimeZone);
            
                }else if(dataWeather.weather[0].main == 'Rain' && dataWeather.weather[0].icon.includes('d')){
                    card.hideGreetingsMessage();
                    card.hideError();
                    cardImg.src = 'assets/img/rain.png';
                    card.ligthColor();
                    card.cardInfo(dataWeather, dataTimeZone);
            
                }else if(dataWeather.weather[0].main == 'Snow' && dataWeather.weather[0].icon.includes('d')){
                    card.hideGreetingsMessage();
                    card.hideError();
                    cardImg.src = 'assets/img/snow.png';
                    card.ligthColor();
                    card.cardInfo(dataWeather, dataTimeZone);
            
                }else if(dataWeather.weather[0].main == 'Drizzle' && dataWeather.weather[0].icon.includes('d')){
                    card.hideGreetingsMessage();
                    card.hideError();
                    cardImg.src = 'assets/img/rain.png';
                    card.ligthColor();
                    card.cardInfo(dataWeather, dataTimeZone);
            
                }else if(dataWeather.weather[0].main == 'Mist' && dataWeather.weather[0].icon.includes('d')){
                    card.hideGreetingsMessage();
                    card.hideError();
                    cardImg.src = 'assets/img/mist-day.png';
                    card.ligthColor();
                    card.cardInfo(dataWeather, dataTimeZone);
            
                }else if(dataWeather.weather[0].main == 'Fog' && dataWeather.weather[0].icon.includes('d')){
                    card.hideGreetingsMessage();
                    card.hideError();
                    cardImg.src = 'assets/img/mist-day.png';
                    card.ligthColor();
                    card.cardInfo(dataWeather, dataTimeZone);
            
                }else if(dataWeather.weather[0].main == 'Clear' && dataWeather.weather[0].icon.includes('n')){
                    card.hideGreetingsMessage();
                    card.hideError();
                    cardImg.src = 'assets/img/moon.png';
                    card.darkColor();
                    card.cardInfo(dataWeather, dataTimeZone);
            
                }else if(dataWeather.weather[0].main == 'Clouds' && dataWeather.weather[0].icon.includes('n')){
                    card.hideGreetingsMessage();
                    card.hideError();
                    cardImg.src = 'assets/img/clouds-night.png';
                    card.darkColor();
                    card.cardInfo(dataWeather, dataTimeZone);
            
                }else if(dataWeather.weather[0].main == 'Rain' && dataWeather.weather[0].icon.includes('n')){
                    card.hideGreetingsMessage();
                    card.hideError();
                    cardImg.src = 'assets/img/rain.png';
                    card.darkColor();
                    card.cardInfo(dataWeather, dataTimeZone);
            
                }else if(dataWeather.weather[0].main == 'Snow' && dataWeather.weather[0].icon.includes('n')){
                    card.hideGreetingsMessage();
                    card.hideError();
                    cardImg.src = 'assets/img/snow.png';
                    card.darkColor();
                    card.cardInfo(dataWeather, dataTimeZone);
            
                }else if(dataWeather.weather[0].main == 'Drizzle' && dataWeather.weather[0].icon.includes('n')){
                    card.hideGreetingsMessage();
                    card.hideError();
                    cardImg.src = 'assets/img/rain.png';
                    card.darkColor();
                    card.cardInfo(dataWeather, dataTimeZone);
            
                }else if(dataWeather.weather[0].main == 'Mist' && dataWeather.weather[0].icon.includes('n')){
                    card.hideGreetingsMessage();
                    card.hideError();
                    cardImg.src = 'assets/img/mist-night.png';
                    card.darkColor();
                    card.cardInfo(dataWeather, dataTimeZone);
            
                }else if(dataWeather.weather[0].main == 'Fog' && dataWeather.weather[0].icon.includes('n')){
                    card.hideGreetingsMessage();
                    card.hideError();
                    cardImg.src = 'assets/img/mist-night.png';
                    card.darkColor();
                    card.cardInfo(dataWeather, dataTimeZone);
            
                }
    
            }, 500);

        })

    })

})




