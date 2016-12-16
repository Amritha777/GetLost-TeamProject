var CityTools = require('../city_tools/city_tools');

var CityView = function(city, countries){
  this.city = city;
  this.countries = countries;
};

CityView.prototype = {
  render: function(countries){ 

    var cityDisplayButton = document.getElementById('city-button');
    cityDisplayButton.onclick = function(){

    var city = this.city.getRandomCity(countries);

      var cityP = document.getElementById('city-name');
      cityP.innerText = city.name;

    var cityCountry = document.createElement('li');
    var citiesUL = document.getElementById('city-specs');
    cityCountry.innerText = 'Country: ' + city.country;
    
    citiesUL.appendChild(cityCountry);
    
    var cityLang = document.createElement('li');
    var citiesUL = document.getElementById('city-specs');
    cityLang.innerText = 'Language: ' + city.language;
    
    citiesUL.appendChild(cityLang);

    var cityCurrency = document.createElement('li');
    var citiesUL = document.getElementById('city-specs');
    cityCurrency.innerText = 'Currency: ' + city.currency;
    
    citiesUL.appendChild(cityCurrency);

    }.bind(this)
    console.log(this)   
  },

  clearFunction(): function(){
    var cityCountry = document.getElementById('city-specs');
   cityCountry.innerHTML = "";

   var cityLang = document.getElementById('city-specs');
   cityLang.innerHTML = "";

   var cityCurrency = document.getElementById('city-specs');
   cityCurrency.innerHTML = "";
  }
  


};

module.exports = CityView;
