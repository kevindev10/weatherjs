
class Weather {

  constructor(){
    this.apiKey = '623f49bb73d662a4a5061b27188e4141';
  }


  async getWeather(city){

    // Get city cordinates
    const cordinatesData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${this.apiKey}`);
    const cordinatesObject = await cordinatesData.json();
   
    const lat = (cordinatesObject[0].lat);
    const lon = (cordinatesObject[0].lon);

    // Fetch weather from openweather Api 

    const weahterData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`);
    const weahterObject = await weahterData.json();
    

    return weahterObject;
  }



}