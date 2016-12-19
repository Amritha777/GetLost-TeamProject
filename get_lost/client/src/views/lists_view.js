var List = require('./list/list');

var ListsView = function(listItem) {
    this.listItem= listItem;
    this.onChange = undefined;
    this.items = [];
  };

  ListsView.prototype = {
    render:function(place) {
      this.listItem.innerHTML = "";
      this.items = items;
      this.items.forEach(function(item) {
        this.addItem(item);
      }.bind(this));
    },
    addItem:function(item, index) {
      var li = document.createElement("li");
      li.innerHTML = item.name;
      this.listElement.appendChild(li);
    },
  };

  module.exports = ListsView;

}