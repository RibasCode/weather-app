'use strict'


document.addEventListener('DOMContentLoaded', () => {

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

let palanca = true;

// --------------------------------------------------------------
// function
// --------------------------------------------------------------

var input = document.getElementById("city-input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("city-search-btn").click();
  }
});

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

//inicialitza amb el darkTheme


function printCard(data, dataTimeZone){
    heroBot.style.opacity = 1;
    cardContent.style.opacity = 1;
    cardImg.style.opacity = 1;
    cardCity.innerHTML = data.name + `<span style="position: absolute; font-size: 10px; font-weight: 300; margin-left: 2px;">${data.sys.country}</span>`
    cardWeather.innerHTML = data.weather[0].main
    cardTemperature.innerHTML = data.main.temp.toFixed(0) + '<span style="position: absolute; font-size: 32px;">??</span>'
    cardMaxTemperature.innerHTML = data.main.temp_max.toFixed(0) + '??'
    cardMinTemperature.innerHTML = data.main.temp_min.toFixed(0) + '??'
    cardHumidity.innerHTML = data.main.humidity + ' %'
    cardWind.innerHTML = data.wind.speed.toFixed(0) + `<span style="font-family: 'Open Sans', sans-serif;"> km/h</span>`
    let year = dataTimeZone.formatted.split(" ")[0].split("-")[0].split("")
    year = year[2] + year[3];

    let month = dataTimeZone.formatted.split(" ")[0].split("-")[1]
    let day = dataTimeZone.formatted.split(" ")[0].split("-")[2]

    cardDay.innerHTML = day + ` <span style="font-family: 'Open Sans', sans-serif;">/</span> ` + month + ` <span style="font-family: 'Open Sans', sans-serif;">/</span> ` + year 

    // console.log(year);
    // console.log(month);
    // console.log(day);

    // rellotge 
    let s = Number(dataTimeZone.formatted.split(" ")[1].split(":")[2]);
    let m = Number(dataTimeZone.formatted.split(" ")[1].split(":")[1]);
    let h = Number(dataTimeZone.formatted.split(" ")[1].split(":")[0]);

    function showTime(){

        if(palanca == false){
            // per parar la funci?? del rellotge i evitar el solapament de 2 hores diferents
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

        // var session = "AM";
        // if(h == 0){
        //     h = 12;
        // }
        
        // if(h > 12){
        //     h = h - 12;
        //     session = "PM";
        // }

        // h = (h < 10) ? "0" + h : h;
        // m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        // if(h == '0' + h){
        //     h =  '0' + h
        // }
        // if(m == '0' + m){
        //     m =  '0' + m
        // }

        var time = h + " : " + m + " : " + s;
        document.getElementById("card__time").innerText = time;
        document.getElementById("card__time").textContent = time;

        s++

        setTimeout(showTime, 1000);

    }

    showTime();

}

function showError(data){
    heroBot.style.opacity = 0;
    cardGreetings.style.opacity = 0;
    cardContent.style.opacity = 0;
    cardTime.style.opacity = 0;
    cardDay.style.opacity = 0;
    cardError.style.opacity = 1;
    cardError.innerHTML = `<h5>Error ${data.cod}</h5><p style="font-size: 14px">${data.message.charAt(0).toUpperCase() + data.message.slice(1)}</p>`
}

function hideError(){
    heroBot.style.opacity = 1;
    cardContent.style.opacity = 1;
    cardTime.style.opacity = 1;
    cardDay.style.opacity = 1;
    cardError.style.opacity = 0;
    cardError.innerHTML = ``
}

// function greetingsMessage(){
//     cardContent.style.opacity = 0;
//     cardTime.style.opacity = 0;
//     cardDay.style.opacity = 0;
//     // cardGreetingsText.style.opacity = 1;
//     // cardGreetingsText.innerHTML = `<p style="font-size: 14px; color: var(--clr-typo); font-weight: 500; margin-bottom: 25px;">Which city around the world would you like to see?</p>`
// }

// greetingsMessage();

function hideGreetingsMessage(){
    cardContent.style.opacity = 0;
    cardTime.style.opacity = 0;
    cardDay.style.opacity = 0;
    cardGreetings.style.opacity = 0;
    cardGreetingsText.style.opacity = 0;
}

    citySearchBtn.addEventListener('click', () => {

        // Transition "Data load" fase1
        cardTime.style.opacity = 0;
        cardDay.style.opacity = 0;
        cardContent.style.opacity = 0;
        cardGreetings.style.opacity = 0;
        cardError.style.opacity = 0;
        cardImg.style.opacity = 0;
        palanca = false;

        // API request

        const fetchData = async () => {
            try{

                const proxy = `http://cors-anywhere.herokuapp.com/`
                const key = `136882aa473e6f9a1455a8308bb03c07`
                let city = document.getElementById('city-input').value

                const respuesta = await fetch(`${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`)
                // const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`)
                const data = await respuesta.json()
                
                // console.log(data)

                if(data.cod == '404' || data.cod == '400'){
                    showError(data);

                }

                const key2 = `X489P0K0G78W`
                let lat = data.coord.lat
                let lon = data.coord.lon

                const respuesta2 = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${key2}&format=json&by=position&lat=${lat}&lng=${lon}`)
                const dataTimeZone = await respuesta2.json()
                
                // console.log(dataTimeZone)
                
                palanca = false;
                // Transition "Data load" fase2

                setTimeout(function(){

                    // change card content

                    if(data.weather[0].main == 'Clear' && data.weather[0].icon.includes('d')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/sun.png';
                        ligthColor();
                        printCard(data, dataTimeZone);
                        
                    }else if(data.weather[0].main == 'Clouds' && data.weather[0].icon.includes('d')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/clouds-day.png';
                        ligthColor();
                        printCard(data, dataTimeZone);

                    }else if(data.weather[0].main == 'Rain' && data.weather[0].icon.includes('d')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/rain.png';
                        ligthColor();
                        printCard(data, dataTimeZone);

                    }else if(data.weather[0].main == 'Snow' && data.weather[0].icon.includes('d')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/snow.png';
                        ligthColor();
                        printCard(data, dataTimeZone);

                    }else if(data.weather[0].main == 'Drizzle' && data.weather[0].icon.includes('d')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/rain.png';
                        ligthColor();
                        printCard(data, dataTimeZone);

                    }else if(data.weather[0].main == 'Mist' && data.weather[0].icon.includes('d')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/mist-day.png';
                        ligthColor();
                        printCard(data, dataTimeZone);

                    }else if(data.weather[0].main == 'Fog' && data.weather[0].icon.includes('d')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/mist-day.png';
                        ligthColor();
                        printCard(data, dataTimeZone);

                    }else if(data.weather[0].main == 'Haze' && data.weather[0].icon.includes('d')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/mist-day.png';
                        ligthColor();
                        printCard(data, dataTimeZone);

                    }else if(data.weather[0].main == 'Clear' && data.weather[0].icon.includes('n')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/moon.png';
                        darkColor();
                        printCard(data, dataTimeZone);

                    }else if(data.weather[0].main == 'Clouds' && data.weather[0].icon.includes('n')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/clouds-night.png';
                        darkColor();
                        printCard(data, dataTimeZone);

                    }else if(data.weather[0].main == 'Rain' && data.weather[0].icon.includes('n')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/rain.png';
                        darkColor();
                        printCard(data, dataTimeZone);

                    }else if(data.weather[0].main == 'Snow' && data.weather[0].icon.includes('n')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/snow.png';
                        darkColor();
                        printCard(data, dataTimeZone);

                    }else if(data.weather[0].main == 'Drizzle' && data.weather[0].icon.includes('n')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/rain.png';
                        darkColor();
                        printCard(data, dataTimeZone);

                    }else if(data.weather[0].main == 'Mist' && data.weather[0].icon.includes('n')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/mist-night.png';
                        darkColor();
                        printCard(data, dataTimeZone);

                    }else if(data.weather[0].main == 'Fog' && data.weather[0].icon.includes('n')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/mist-night.png';
                        darkColor();
                        printCard(data, dataTimeZone);

                    }else if(data.weather[0].main == 'Haze' && data.weather[0].icon.includes('n')){
                        palanca = true;
                        hideGreetingsMessage();
                        hideError();
                        cardImg.src = 'assets/img/mist-night.png';
                        darkColor();
                        printCard(data, dataTimeZone);

                    }

                }, 500);

            }catch(error){
                console.log(error);
            }

        }

        fetchData();

    })

})