var MapWrapper = function(container, center, zoom){
  this.markers = [];
  this.selectedPlaces = [];
  this.googleMap = new google.maps.Map(container,
  {
   center: center,
   zoom: zoom
 });
  this.initSave = this.initSave.bind(this);
  this.initSave();
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
    if(!this.selectedPlaces.includes(place)){
      this.selectedPlaces.push(place);
      this.addPlace(place);
    } 
    console.log(this.selectedPlaces);
  }.bind(this))
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
},

saveCityList: function(url, callback){
  var request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader('content-type', 'application/json');
  request.onload = function(){

    callback(request.response);
  };
  var data = {name: document.getElementById('city-name').innerText, places: this.selectedPlaces};
  request.send(JSON.stringify(data));
  
  
},

initSave: function (){
  var data;
  var localUrl = "http://localhost:3000/cities";
  var cityNumber;
  var refillMap = function(event){
    cityNumber = event.target.id;
    this.clearMarkers();
    this.googleMap = new google.maps.Map(document.getElementById('main-map'), {center: {lat: data[cityNumber].places[0].geometry.location.lat, lng: data[cityNumber].places[0].geometry.location.lng}, zoom: 14});

    for(place of data[cityNumber].places){

      new google.maps.Marker({
         position: {lat: place.geometry.location.lat, lng: place.geometry.location.lng},
         map: this.googleMap
       });
    }







  }.bind(this);
  var boomButton = document.getElementById('save-button')
  boomButton.onclick = function (){
    this.saveCityList(localUrl, function(response){
      data = JSON.parse(response);
      var todoDiv = document.getElementById('todo-list');

      for(var i = 0; i<data.length; i++){
        var todoLI = document.createElement('li');
        todoLI.class ='city';
        todoLI.id = i;
        todoLI.innerText = data[i].name;
        todoDiv.appendChild(todoLI);
        
        todoLI.onclick = refillMap;
        // todoLI.onclick = function(event){
        //   cityNumber = event.target.id;
        // }
      }        
    });
  }.bind(this);

}
}

module.exports = MapWrapper;



