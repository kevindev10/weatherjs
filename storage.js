
class Storage {
  constructor (){
    this.defaultCity = 'kampala';
  }
   

  // Set city to storage

  setToStorage(city){
   

    localStorage.setItem('city', `${city}`)
   

  }

  
  // Get city from storage

    fetchfromStorage(){
      if(localStorage.getItem('city') === null){
        const city = this.defaultCity;
        return city
      }else{
        const city = localStorage.getItem('city');
        return city;
      }
    
  }
}