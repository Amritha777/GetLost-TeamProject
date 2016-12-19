var List = require('../list/list');

var ListView = function() {
    this.places;
  };

ListView.prototype = {
  render:function() {
   for(place of this.places){
    this.addItem(place);
   console.log(this);
   }
  },

  addItem:function(item) {
    var ul = document.getElementById('places-list');
    var place = document.createElement("li");
    place.innerHTML = item[0].type + item.name;
    ul.appendChild(place);
  },
};

  module.exports = ListView;
