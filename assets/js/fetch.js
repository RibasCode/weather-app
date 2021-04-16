'use strict'


document.addEventListener('DOMContentLoaded', () => {




const serachCity = document.getElementById('search-city')

    serachCity.addEventListener('click', () => {


        const fetchData = async () => {
            try{

                const proxy = `http://cors-anywhere.herokuapp.com/`
                const key = `136882aa473e6f9a1455a8308bb03c07`
                let city = document.getElementById('city-input').value

                const respuesta = await fetch(`${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`)
                const data = await respuesta.json()
                console.log(data)
        
            }catch(error){
                console.log(error);
            }
        
        }
        
        fetchData();

    })



    
})


