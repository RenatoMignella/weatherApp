class Storage {
    constructor() {
       this.city;
       this.country;
       this.defaultCity = 'Dublin';
       this.defaltCountry = 'IE'; 
    }

    getLocationData() {
      if(localStorage.getItem('city') === null) {
       this.city = this.defaultCity;
      }else{
        this.city = localStorage.getItem('city');  

      }

      if(localStorage.getItem('country') === null) {
        this.country = this.defaltCountry;
       }else{
         this.country = localStorage.getItem('country');  
         }

        return{
            city: this.city,
            country: this.country
        }
     }
    

    setLocationData (city,country){
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);

    }
}