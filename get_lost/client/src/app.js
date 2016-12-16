var CityTools = require('./city_tools/city_tools');
var CityView = require('./views/city_view');
var ImageView = require('./views/image_view');


window.onload = function(){
  var city1 = new CityTools();
  var cityView = new CityView(city1);
  var imageView = new ImageView();



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
 

  cityView.render(countries);

  };    

 
  makeRequest(cityUrl, cityComplete);
  imageView.imageMakeRequest(imageView.imageUrl, imageView.getImageByName, imageView.apiKey);



}
