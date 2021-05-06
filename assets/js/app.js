'use strict'

document.addEventListener('DOMContentLoaded', () => {

// --------------------------------------------------------------
// variable
// --------------------------------------------------------------
const ft = new Fetch()

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
    cardTime.style.opacity = 0;
    cardDay.style.opacity = 0;
    cardContent.style.opacity = 0;
    cardGreetings.style.opacity = 0;
    cardError.style.opacity = 0;
    cardImg.style.opacity = 0;
    palanca = false;

    // el then((data)) esta retornant la data perque es pugui fer servir dins de la callback
    ft.getDataWeather().then((dataWeather) => {

        console.log(dataWeather);

        if(dataWeather.cod == '404' || dataWeather.cod == '400'){
            showError(dataWeather);

        }

        ft.getDataTimezone(dataWeather).then((dataTimeZone) => {

            console.log(dataTimeZone)

            setTimeout(function(){

                // change card content
                if(dataWeather.weather[0].main == 'Clear' && dataWeather.weather[0].icon.includes('d')){
                    palanca = true;
                    hideGreetingsMessage();
                    hideError();
                    cardImg.src = 'assets/img/sun.png';
                    ligthColor();
                    printCard(dataWeather, dataTimeZone);
                    
                }else if(dataWeather.weather[0].main == 'Clouds' && dataWeather.weather[0].icon.includes('d')){
                    palanca = true;
                    hideGreetingsMessage();
                    hideError();
                    cardImg.src = 'assets/img/clouds-day.png';
                    ligthColor();
                    printCard(dataWeather, dataTimeZone);
    
                }else if(dataWeather.weather[0].main == 'Rain' && dataWeather.weather[0].icon.includes('d')){
                    palanca = true;
                    hideGreetingsMessage();
                    hideError();
                    cardImg.src = 'assets/img/rain.png';
                    ligthColor();
                    printCard(dataWeather, dataTimeZone);
    
                }else if(dataWeather.weather[0].main == 'Snow' && dataWeather.weather[0].icon.includes('d')){
                    palanca = true;
                    hideGreetingsMessage();
                    hideError();
                    cardImg.src = 'assets/img/snow.png';
                    ligthColor();
                    printCard(dataWeather, dataTimeZone);
    
                }else if(dataWeather.weather[0].main == 'Drizzle' && dataWeather.weather[0].icon.includes('d')){
                    palanca = true;
                    hideGreetingsMessage();
                    hideError();
                    cardImg.src = 'assets/img/rain.png';
                    ligthColor();
                    printCard(dataWeather, dataTimeZone);
    
                }else if(dataWeather.weather[0].main == 'Mist' && dataWeather.weather[0].icon.includes('d')){
                    palanca = true;
                    hideGreetingsMessage();
                    hideError();
                    cardImg.src = 'assets/img/mist-day.png';
                    ligthColor();
                    printCard(dataWeather, dataTimeZone);
    
                }else if(dataWeather.weather[0].main == 'Fog' && dataWeather.weather[0].icon.includes('d')){
                    palanca = true;
                    hideGreetingsMessage();
                    hideError();
                    cardImg.src = 'assets/img/mist-day.png';
                    ligthColor();
                    printCard(dataWeather, dataTimeZone);
    
                }else if(dataWeather.weather[0].main == 'Clear' && dataWeather.weather[0].icon.includes('n')){
                    palanca = true;
                    hideGreetingsMessage();
                    hideError();
                    cardImg.src = 'assets/img/moon.png';
                    darkColor();
                    printCard(dataWeather, dataTimeZone);
    
                }else if(dataWeather.weather[0].main == 'Clouds' && dataWeather.weather[0].icon.includes('n')){
                    palanca = true;
                    hideGreetingsMessage();
                    hideError();
                    cardImg.src = 'assets/img/clouds-night.png';
                    darkColor();
                    printCard(dataWeather, dataTimeZone);
    
                }else if(dataWeather.weather[0].main == 'Rain' && dataWeather.weather[0].icon.includes('n')){
                    palanca = true;
                    hideGreetingsMessage();
                    hideError();
                    cardImg.src = 'assets/img/rain.png';
                    darkColor();
                    printCard(dataWeather, dataTimeZone);
    
                }else if(dataWeather.weather[0].main == 'Snow' && dataWeather.weather[0].icon.includes('n')){
                    palanca = true;
                    hideGreetingsMessage();
                    hideError();
                    cardImg.src = 'assets/img/snow.png';
                    darkColor();
                    printCard(dataWeather, dataTimeZone);
    
                }else if(dataWeather.weather[0].main == 'Drizzle' && dataWeather.weather[0].icon.includes('n')){
                    palanca = true;
                    hideGreetingsMessage();
                    hideError();
                    cardImg.src = 'assets/img/rain.png';
                    darkColor();
                    printCard(dataWeather, dataTimeZone);
    
                }else if(dataWeather.weather[0].main == 'Mist' && dataWeather.weather[0].icon.includes('n')){
                    palanca = true;
                    hideGreetingsMessage();
                    hideError();
                    cardImg.src = 'assets/img/mist-night.png';
                    darkColor();
                    printCard(dataWeather, dataTimeZone);
    
                }else if(dataWeather.weather[0].main == 'Fog' && dataWeather.weather[0].icon.includes('n')){
                    palanca = true;
                    hideGreetingsMessage();
                    hideError();
                    cardImg.src = 'assets/img/mist-night.png';
                    darkColor();
                    printCard(dataWeather, dataTimeZone);
    
                }
    
            }, 500);

        })

    })

})

// --------------------------------------------------------------
// function
// --------------------------------------------------------------

function ligthColor(){
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
    
    document.documentElement.style.setProperty('--search-background', '#ffffff');
    document.documentElement.style.setProperty('--search-color', '#282828');
    document.documentElement.style.setProperty('--search-border', '#eaeaea');
    document.documentElement.style.setProperty('--search-outline', '#d1d1d1');
}

function darkColor(){
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

    document.documentElement.style.setProperty('--search-background', '#282828');
    document.documentElement.style.setProperty('--search-color', '#ffffff');
    document.documentElement.style.setProperty('--search-border', '#404040');
    document.documentElement.style.setProperty('--search-outline', '#808080');
}

function printCard(dataWeather, dataTimeZone){

    heroBot.style.opacity = 1;
    cardContent.style.opacity = 1;
    cardImg.style.opacity = 1;
    cardCity.innerHTML = dataWeather.name + `<span style="position: absolute; font-size: 10px; font-weight: 300; margin-left: 2px;">${dataWeather.sys.country}</span>`
    cardWeather.innerHTML = dataWeather.weather[0].main
    cardTemperature.innerHTML = dataWeather.main.temp.toFixed(0) + '<span style="position: absolute; font-size: 32px;">º</span>'
    cardMaxTemperature.innerHTML = dataWeather.main.temp_max.toFixed(0) + 'º'
    cardMinTemperature.innerHTML = dataWeather.main.temp_min.toFixed(0) + 'º'
    cardHumidity.innerHTML = dataWeather.main.humidity + ' %'
    cardWind.innerHTML = dataWeather.wind.speed.toFixed(0) + `<span style="font-family: 'Open Sans', sans-serif;"> km/h</span>`
    let year = dataTimeZone.formatted.split(" ")[0].split("-")[0].split("")
    year = year[2] + year[3];

    let month = dataTimeZone.formatted.split(" ")[0].split("-")[1]
    let day = dataTimeZone.formatted.split(" ")[0].split("-")[2]

    cardDay.innerHTML = day + ` <span style="font-family: 'Open Sans', sans-serif;">/</span> ` + month + ` <span style="font-family: 'Open Sans', sans-serif;">/</span> ` + year 
        
    // rellotge 
    let s = Number(dataTimeZone.formatted.split(" ")[1].split(":")[2]);
    let m = Number(dataTimeZone.formatted.split(" ")[1].split(":")[1]);
    let h = Number(dataTimeZone.formatted.split(" ")[1].split(":")[0]);

    function showTime(){

        if(palanca == false){
            // per parar la funció del rellotge i evitar el solapament de 2 hores diferents
            return;
        }
        
        if(s == 60){
            m++
            s = 0
        }else if(m == 60){
            h++
            m = 0
        }else if(h == 24){
            h = 0
        }

        s = (s < 10) ? "0" + s : s;

        var time = h + " : " + m + " : " + s;
        document.getElementById("card__time").innerText = time;
        document.getElementById("card__time").textContent = time;

        s++

        setTimeout(showTime, 1000);

    }

    showTime();

}

function showError(dataWeather){
    heroBot.style.opacity = 0;
    cardGreetings.style.opacity = 0;
    cardContent.style.opacity = 0;
    cardTime.style.opacity = 0;
    cardDay.style.opacity = 0;
    cardError.style.opacity = 1;
    cardError.innerHTML = `<h5>Error ${dataWeather.cod}</h5><p style="font-size: 14px">${dataWeather.message.charAt(0).toUpperCase() + dataWeather.message.slice(1)}</p>`
}

function hideError(){
    heroBot.style.opacity = 1;
    cardContent.style.opacity = 1;
    cardTime.style.opacity = 1;
    cardDay.style.opacity = 1;
    cardError.style.opacity = 0;
    cardError.innerHTML = ``
}
        
function hideGreetingsMessage(){
    cardContent.style.opacity = 0;
    cardTime.style.opacity = 0;
    cardDay.style.opacity = 0;
    cardGreetings.style.opacity = 0;
    cardGreetingsText.style.opacity = 0;
}


})