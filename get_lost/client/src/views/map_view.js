var MapWrapper = require('../map_wrapper/map_wrapper'); 

var MapView = function(container,city, zoom){
  this.city = city;
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
    this.map = new MapWrapper(document.getElementById('main-map'), results[0].geometry.location, 12);
    }
  }.bind(this),


  getPlaces: function(event){
     var request = {
      location: 
      new google.maps.LatLng(this.city.coords[0],this.city.coords[1]),
      radius: "1000",
      query: 'restaurant'
    };

    var service = new google.maps.places.PlacesService(this.map.googleMap);
    
    service.textSearch(request, this.placesCallback); 
    },

    placesCallback: function(results, status){
      for (var i = 0; i < results.length; i++) {      
      this.map.createMarker(results[i]);
      }
    }.bind(this)
};


  //  function createMarker(place) {
  //    var placeLoc = place.geometry.location;
  //    var marker = new google.maps.Marker({
  //      map: map,
  //      position: place.geometry.location
  //    });

  //    google.maps.event.addListener(marker, 'click', function() {
  //      infowindow.setContent(place.name);
  //      infowindow.open(map, this);
  //    });
  // }


module.exports = MapView;
