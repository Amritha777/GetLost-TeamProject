var CityTools = require('../city_tools/city_tools');

var CityView = function(city){
  this.city = city;
};

CityView.prototype = {
  render: function(){ 
    this.clearFunction();

    var cityP = document.getElementById('city-name');
    cityP.innerText = this.city.name;

    var cityCountry = document.createElement('li');
    var citiesUL = document.getElementById('city-specs');
    cityCountry.innerText = 'Country: ' + this.city.country;
    citiesUL.appendChild(cityCountry);

    var cityLang = document.createElement('li');
    var citiesUL = document.getElementById('city-specs');
    cityLang.innerText = 'Language: ' + this.city.language;
    citiesUL.appendChild(cityLang);

    var cityCurrency = document.createElement('li');
    var citiesUL = document.getElementById('city-specs');
    cityCurrency.innerText = 'Currency: ' + this.city.currency;
    citiesUL.appendChild(cityCurrency);
  },

  clearFunction: function(){
    var liText = document.querySelector('ul');
    liText.innerHTML = "";
  }
};

module.exports = CityView;
