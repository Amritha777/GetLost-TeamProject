var CityTools = require('../city_tools/city_tools');
// var ImageView = require('./image_view');


var CityView = function(city){
  this.city = city;
  // this.image = image;

};

CityView.prototype = {
  render: function(){ 

    var cityDisplayButton = document.getElementById('city-button');
    cityDisplayButton.onclick = function(){

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

      return this.city.name;
    }.bind(this);
    console.log(this);
  },

  clearFunction: function(){
    var liText = document.querySelector('ul');
    //console.log(liText);
    liText.innerHTML = "";

   // var cityLang = document.getElementById('city-specs');
   // cityLang.innerHTML = "";

   // var cityCurrency = document.getElementById('city-specs');
   // cityCurrency.innerHTML = "";
 }



};

module.exports = CityView;
