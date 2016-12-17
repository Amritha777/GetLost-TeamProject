var MapWrapper = function(container, center, zoom){

 this.googleMap = new google.maps.Map(container,
 {
   center: center,
   zoom: zoom
 }
 );
}

MapWrapper.prototype = {

 createMarker: function(place){
   var marker = new google.maps.Marker({
     position: place.geometry.location,
     map: this.googleMap
   });
   console.log(marker)
 },

 addClickEvent: function(){
   google.maps.event.addListener(this.googleMap, 'click', function(event){
     var position = event.latLng;
     this.addMarker(position);
   }.bind(this))
 }
}

module.exports = MapWrapper;