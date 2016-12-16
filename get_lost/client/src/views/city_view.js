var CityTools = require('../city_tools/city_tools');

var CityView = function(city, countries){
  this.city = city;
  this.countries = countries;
};

CityView.prototype = {
  render: function(countries){ 


    var cityDisplayButton = document.getElementById('city-button');
    cityDisplayButton.onclick = function(){
    var citySpecs = document.getElementById('city-specs');
    citySpecs.innerText = this.city.getRandomCity(countries).name;
    }.bind(this)
    console.log(countries)
      
  }

};

module.exports = CityView;
  