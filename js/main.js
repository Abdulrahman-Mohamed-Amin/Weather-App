
let city = document.getElementById("city")
let weatherForm = document.querySelector(".weather form")
let detils = document.querySelector(".detils")
let apiKey = '888e99abc426996eeb7448d9d6baf595';


weatherForm.addEventListener("submit" , (e) =>{
    e.preventDefault()
    
    getWeather(city.value)
    
})

function getWeather(city){
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data =>{
            if(data.cod == 200){
                detils.innerHTML = `
                        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">
                        <h2 class="temp">${data.main.temp}°C</h2>
                        <p class="status">
                        ${data.weather[0].description}
                        </p>
                        <div class="more_detils">
                        <div>feels like : ${data.main.feels_like}</div>
                        <div>Humidity : ${data.main.humidity}%</div>
                        <div>wind speed : ${data.wind.speed} m/s</div>
                        </div>
                `

            }else{
                detils.innerHTML = `City Not Found`
            }
        })

}