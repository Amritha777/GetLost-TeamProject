var MapWrapper = function(container, center, zoom){
  this.markers = [];
  this.selectedPlaces = [];
  this.googleMap = new google.maps.Map(container,
 {
   center: center,
   zoom: zoom
 });
}

MapWrapper.prototype = {

 createMarker: function(place){

  var marker = new google.maps.Marker({
     position: {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()},
     map: this.googleMap
   });
   this.markers.push(marker);
    
  var infowindow = new google.maps.InfoWindow({content: place.name});
     marker.addListener('mouseover', function() {      
       infowindow.open(this.googleMap, marker);
     });

  marker.addListener('mouseout',function(){
    infowindow.close();
   });

  marker.addListener('click', function(event){
    this.selectedPlaces.push(place)
    this.renderSelectedPlaces();
  }.bind(this))
 },

 renderSelectedPlaces:function() {
  for(place of this.selectedPlaces){
    console.log(place);
   this.addPlace(place);   
  }
 },

 addPlace:function(item) {
   var ul = document.getElementById('places-list');
   var place = document.createElement("li");
   place.innerHTML = item.types[0] +": "+ item.name;
   ul.appendChild(place);
 },


  clearMarkers: function(){
    for(i=0; i < this.markers.length; i++){
      this.markers[i].setMap(null);
    }
  }
};

module.exports = MapWrapper;



