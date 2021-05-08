class Card{
    
    ligthColor(){
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
    
    darkColor(){
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
    
    showError(dataWeather){
        heroBot.style.opacity = 0;
        cardGreetings.style.opacity = 0;
        cardContent.style.opacity = 0;
        cardTime.style.opacity = 0;
        cardDay.style.opacity = 0;
        cardError.style.opacity = 1;
        cardError.innerHTML = `<h5>Error ${dataWeather.cod}</h5><p style="font-size: 14px">${dataWeather.message.charAt(0).toUpperCase() + dataWeather.message.slice(1)}</p>`
    }
    
    hideError(){
        heroBot.style.opacity = 1;
        cardContent.style.opacity = 1;
        cardTime.style.opacity = 1;
        cardDay.style.opacity = 1;
        cardError.style.opacity = 0;
        cardError.innerHTML = ``
    }
                
    hideGreetingsMessage(){
        cardContent.style.opacity = 0;
        cardTime.style.opacity = 0;
        cardDay.style.opacity = 0;
        cardGreetings.style.opacity = 0;
        cardGreetingsText.style.opacity = 0;
    }

    hideInfo(){
        cardTime.style.opacity = 0;
        cardDay.style.opacity = 0;
        cardContent.style.opacity = 0;
        cardGreetings.style.opacity = 0;
        cardError.style.opacity = 0;
        cardImg.style.opacity = 0;
        palanca = false;
    }

    cardInfo(dataWeather, dataTimeZone){
    
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

}