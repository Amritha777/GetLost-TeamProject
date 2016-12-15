var CityTools = function() {
  this.name = name;
  // this.language = language;
  // this.currency = currency;
  // this.coordinates = coordinates;
};

CityTools.prototype = {
  getRandomCity: function(countries){
    var randomNumber = parseInt(Math.random() * (countries.length - 1) + 1);
    console.log(randomNumber);
    var randomCity = countries[randomNumber].capital;
    return randomCity;
    
  }

}

module.exports = CityTools;

