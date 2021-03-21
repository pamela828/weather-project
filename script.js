//Date
let now = new Date();
let days = [
  "Sunday", 
  "Monday", 
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday"
];
let day = days[now.getDay()];

let hour = now.getHours();
let minutes = now.getMinutes();

let fullDate = document.querySelector("#date");
fullDate.innerHTML = `${day} ${hour}:${minutes}`;

//Searchbar
function changeCity(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#place-input");
    let cities = document.querySelector("#city");
    cities.innerHTML = cityInput.value;

    //TEMPERATURE REAL
    let apiKey = "bded79ed1d2cea9265b0acc8da5369f4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=`;
      
        function showTemperature(response) {
            console.log(response.data);
            let temperature = Math.round(response.data.main.temp);
            console.log(temperature);
            let temp = document.querySelector("#temperature");
            temp.innerHTML = temperature; 

            let currentHumidity = document.querySelector("#humidity")
            currentHumidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
            let currentWind = document.querySelector("#wind")
            currentWind.innerHTML = `Wind: ${response.data.wind.speed} km/h`;
            

           //To Farenheit
              function changeFarenheit() {
                temperature = ((temperature * (9/5)) + 32); 
                console.log(temperature);
                let newTemperature = document.querySelector("#temperature");
                newTemperature.innerHTML = temperature;

              }
              let farenheit = document.querySelector("#farenheit")
              farenheit.addEventListener("click", changeFarenheit);
      
            //To Celsius
              function changeCelsius() {
                temperature = ((temperature - 32) * (5/9)); 
                console.log(temperature);
                let newTemperature = document.querySelector("#temperature");
                newTemperature.innerHTML = temperature;

              }

              let celsius = document.querySelector("#celsius")
              celsius.addEventListener("click", changeCelsius);
  
        }
        axios.get(apiUrl+apiKey).then(showTemperature);

}
let city = document.querySelector("#place")
city.addEventListener("submit", changeCity);



//Button current location


//Change weather with input

    
function locationButton(position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            let apiKey = "bded79ed1d2cea9265b0acc8da5369f4";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`    

            console.log(lat);
            console.log(lon);

            axios.get(apiUrl).then(showTemperature);

}
      function showTemperature(response) {
          let temperature = Math.round(response.data.main.temp)
          console.log(temperature);

          let currentWeather = document.querySelector("h2");
          currentWeather.innerHTML = temperature;

          let currentCity = document.querySelector("#city");
          currentCity.innerHTML = (response.data.name)

          console.log(response.data)
          let currentHumidity = document.querySelector("#humidity")
          currentHumidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;

          let currentWind = document.querySelector("#wind")
          currentWind.innerHTML = `Wind: ${response.data.wind.speed} km/h`;

     }

     function getCurrentPosition () {
          navigator.geolocation.getCurrentPosition(locationButton);
     
     }


let button = document.querySelector("#location-button")
button.addEventListener("click", getCurrentPosition)



