
class Fetch{

    async getDataWeather(){

        const proxy = `http://cors-anywhere.herokuapp.com/`
        const key = `136882aa473e6f9a1455a8308bb03c07`
        
        let city = document.getElementById('city-input').value

        // API request
        const respuesta = await fetch(
            `${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`
        );

        // const respuesta = await fetch(
        //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`
        // )

        const dataWeather = await respuesta.json()
        return dataWeather

    }

    async getDataTimezone(dataWeather){

        const key = `X489P0K0G78W`
        let lat = dataWeather.coord.lat
        let lon = dataWeather.coord.lon

        // API request
        const respuesta = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${key}&format=json&by=position&lat=${lat}&lng=${lon}`)
        
        const dataTimeZone = await respuesta.json()
        return dataTimeZone

    }

}