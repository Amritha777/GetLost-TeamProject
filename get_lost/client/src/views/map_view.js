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

getPlaces: function(){
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
      console.log(results)
    }.bind(this));
  }.bind(this),


  // initSearch: function() {
  //   var input = 
  // }
  //   var map =  new google.maps.Map(document.getElementById('main-map'), {
  //         center: {lat: -33.8688, lng: 151.2195},
  //         zoom: 13,
  //         mapTypeId: 'roadmap'
  //       });

    
  //   // Create the search box and link it to the UI element.
  //   var input = document.getElementById('place-input');
    
  //   var searchBox = new google.maps.places.SearchBox(input);
  //   console.log(input);
  //   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  //   // Bias the SearchBox results towards current map's viewport.
  //   map.addListener('bounds_changed', function() {
  //     searchBox.setBounds(map.getBounds());
  //   });
  // }

    // var markers = [];
    // // Listen for the event fired when the user selects a prediction and retrieve
    // // more details for that place.
    // searchBox.addListener('places_changed', function() {
    //   var places = searchBox.getPlaces();
    //   if (places.length == 0) {
    //     return;
    //   }

      // Clear out the old markers.
    //   markers.forEach(function(marker) {
    //     marker.setMap(null);
    //   });
    //   markers = [];

    //   // For each place, get the icon, name and location.
    //   var bounds = new google.maps.LatLngBounds();
    //   places.forEach(function(place) {
    //     if (!place.geometry) {
    //       console.log("Returned place contains no geometry");
    //       return;
    //     }
    //     var icon = {
    //       url: place.icon,
    //       size: new google.maps.Size(71, 71),
    //       origin: new google.maps.Point(0, 0),
    //       anchor: new google.maps.Point(17, 34),
    //       scaledSize: new google.maps.Size(25, 25)
    //     };

    //     // Create a marker for each place.
    //     markers.push(new google.maps.Marker({
    //       map: map,
    //       icon: icon,
    //       title: place.name,
    //       position: place.geometry.location
    //     }));

    //     if (place.geometry.viewport) {
    //       // Only geocodes have viewport.
    //       bounds.union(place.geometry.viewport);
    //     } else {
    //       bounds.extend(place.geometry.location);
    //     }
    //   });
    //   map.fitBounds(bounds);
    // });




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
  module.exports = MapView;
