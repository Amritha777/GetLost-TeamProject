var MapWrapper = require('../map_wrapper/map_wrapper'); 

var MapView = function(container,city){
  this.city = city;
  this.map = new MapWrapper(container, {lat: city.coords[0], lng: city.coords[1]}, 6);
  // console.log(this.map.googleMap);

};

MapView.prototype = {
    initMap: function(event){
   
     infowindow = new google.maps.InfoWindow();
    
     var service = new google.maps.places.PlacesService(this.map.googleMap);
     service.nearbySearch(
     {
       location: 
       new google.maps.LatLng(this.city.coords[0],this.city.coords[1]),
        radius: 1000,
        type: ['restaurant']
     }, this.callback);
     // console.log(service);
  },


   callback: function(results, status) {
    console.log(results);
     if (status === google.maps.places.PlacesServiceStatus.OK) {
       for (var i = 0; i < results.length; i++) {
        console.log(results[i]);
         // createMarker(results[i]);
       }
     }
   }

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
  };


module.exports = MapView;
