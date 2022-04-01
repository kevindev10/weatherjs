
class UI {

  constructor(){
    this.location = document.querySelector('#w-location');
    this.weatherDescription = document.querySelector('#w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure= document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }


  paintDisplay(data){
   
   
    this.location.textContent = data.name;
    this.weatherDescription.textContent = data.weather[0].description;
    this.string.textContent = `${data.main.temp}°c`;
    this.icon.setAttribute('src', ` http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${data.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${data.main.feels_like}°c`;
    this.pressure.textContent = `Pressure: ${data.main.pressure}kgf/cm2`;
    this.wind.textContent = `Wind: ${data.wind.speed}km/h`;
  }

  
}