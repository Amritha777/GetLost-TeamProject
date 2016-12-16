var CityTools = require('./city_tools/city_tools');
var CityView = require('./views/city_view');
var ImageView = require('./views/image_view');
var MapView = require('./views/map_view');


window.onload = function(){
  var city1 = new CityTools();
  var imageView = new ImageView();
  var mapDiv = document.getElementById('main-map');
  // var mapView = new MapView(mapDiv);
  

  var city;
  var cityView = new CityView();
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
    
    var cityDisplayButton = document.getElementById('city-button');
    cityDisplayButton.onclick = function(){
      city = city1.getRandomCity(countries);
      cityView.city = city;
      cityView.render(city);


    };




    // cityView.render(city);

  // imageView.getImageByName(displayImage, cityName);
  };    

 var displayImage = function(){
  this.responseText;
  var jsonString = JSON.parse(this.responseText)
  //console.log(jsonString);
 }

  makeRequest(cityUrl, cityComplete);









}
