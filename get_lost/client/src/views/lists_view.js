var List = require('../list/list');
var mapWrapper = require('../map_wrapper/map_wrapper');

var ListView = function() {
    this.places;
  };

ListView.prototype = {

  addItem:function(item) {
    var ul = document.getElementById('places-list');
    var place = document.createElement("li");
    console.log(this.mapData);
    place.innerHTML = item.types[0] +" "+ item.name;
    ul.appendChild(place);
  },
};

  module.exports = ListView;
