var MapWrapper = require('../map_wrapper/map_wrapper'); 

var MapView = function(container,city){
  this.city = city;
};

MapView.prototype = {

  render: function(){
    var map = new MapWrapper(container, city.coords, 8);
    
  }

};
