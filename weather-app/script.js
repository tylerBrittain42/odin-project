const key = ""






// gets weather data from api
async function getWeather(cityName) {

    const result = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + key, {mode:'cors'})
    const weatherInfo = await result.json()

    return weatherInfo.main
}


// creates a card for a single city
async function addCityCard(cityName){

    const cityWeather = await getWeather(cityName)

    // container that we are inserting into
    const root = document.querySelector('.container')
    
    // creating card
    const cityTag = document.createElement("div")
    cityTag.setAttribute("class","weather-card")
    cityTag.setAttribute("id",cityName)
    root.appendChild(cityTag)

    // city name
    let textTag = document.createElement('h2')
    textTag.innerHTML = cityName
    cityTag.appendChild(textTag)

    // feels like
    textTag = document.createElement('h3')
    textTag.innerHTML = `Feels like ${cityWeather.feels_like}`
    cityTag.appendChild(textTag)

    // High
    textTag = document.createElement('h3')
    textTag.innerHTML = `High: ${cityWeather.temp_max}`
    cityTag.appendChild(textTag)

    // Low
    textTag = document.createElement('h3')
    textTag.innerHTML = `Low: ${cityWeather.temp_min}`
    cityTag.appendChild(textTag)
}

function addCity(cityName){
    addCityCard(cityName)
}