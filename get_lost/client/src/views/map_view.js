var MapWrapper = require('../map_wrapper/map_wrapper'); 

var MapView = function(container,city){
  this.city = city;
  this.map = new MapWrapper(container, {lat: city.coords[0], lng: city.coords[1]}, 6);
};

// MapView.prototype = {

//   render: function(){
    

//   }

// };


module.exports = MapView;
