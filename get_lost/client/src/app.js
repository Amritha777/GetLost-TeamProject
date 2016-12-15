var CityTools = require('./city_tools/city_tools');

window.onload = function(){
  var city1 = new CityTools();
  var cityUrl = "https://restcountries.eu/rest/v1/all"; 


  var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  };

  var cityComplete = function(){
    if(this.status !==200) return;
    var jsonString = JSON.parse(this.responseText);
    var countries = jsonString;
    console.log(countries);
    
    city1.getRandomCity(countries);
    console.log(city1.getRandomCity(countries))

  };

  makeRequest(cityUrl, cityComplete);

}