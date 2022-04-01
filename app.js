
// Init weather object
const weather = new Weather ;

// Init UI
const ui = new UI ; 

// Init storage
const storage = new Storage;


// Get weather & display weahter on DOM load

document.addEventListener('DOMContentLoaded', function(){
  const city =  storage.fetchfromStorage();
  weather.getWeather(city)
  .then(weatherObject =>{
      
    ui.paintDisplay(weatherObject)

  })
  .catch(err => console.log(err))

 
})


// Get weather & display weahter  on change location event

document.querySelector('#w-change-btn').addEventListener('click', function(e){

  const city = document.querySelector('#city').value;

  if(city !== ''){
    weather.getWeather(city)
    .then(weatherObject =>{
      
      ui.paintDisplay(weatherObject)

    })
    .catch(err => console.log(err))
    storage.setToStorage(city)
  }

  

  $('#locModal').modal('hide');

  e.preventDefault();
})



