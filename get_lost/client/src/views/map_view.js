var MapWrapper = require('../map_wrapper/map_wrapper'); 

var MapView = function(container,city, zoom){
  this.city = city;
  this.newCoords;
  this.container = container;
  this.zoom = zoom;
  this.map = new MapWrapper(container, {lat: city.coords[0], lng: city.coords[1]}, zoom);
};

MapView.prototype = {
  initMap: function(event){

   infowindow = new google.maps.InfoWindow();

   var request = {
    location: 
    new google.maps.LatLng(this.city.coords[0],this.city.coords[1]),
    radius: "1000",
    query: this.city.name
  };

  var service = new google.maps.places.PlacesService(this.map.googleMap);
  service.textSearch(request, this.callback); 
},

  callback: function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      this.map = new MapWrapper(document.getElementById('main-map'), results[0].geometry.location, 14);
     this.newCoords = [results[0].geometry.location.lat(), results[0].geometry.location.lng()];  
    }
  }.bind(this),

  getPlaces: function(fetchResults){
   this.map.clearMarkers();

    var input = document.getElementById('place-input').value;

    var request = {
     location: 
     new google.maps.LatLng(this.newCoords[0],this.newCoords[1]),
      radius: "600",
     query: input

    };
    console.log(input)

    var service = new google.maps.places.PlacesService(this.map.googleMap);

    service.textSearch(request, 
      function(results, status){
        for (var i = 0; i < results.length; i++) {      
        this.map.createMarker(results[i])
        }
        fetchResults(results);
      
      }.bind(this));
  }.bind(this),
}

  module.exports = MapView;
