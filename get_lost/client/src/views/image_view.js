var ImageView = function(city){
  this.city = city;
  this.imageUrl = "https://api.gettyimages.com/v3/search/images/creative?phrase=cities";
  // this.apiKey = 'tfr7wf2dcnkzf46c5w2wgg53';

}


ImageView.prototype = {
  
  imageMakeRequest: function(url, callback, apiKey){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Api-Key", 'tfr7wf2dcnkzf46c5w2wgg53');
    request.onload = callback;
    request.send();
    },
    
  getImageByName: function(data,city){
    var jsonString = JSON.parse(data.target.responseText);
  console.log(jsonString);


  }
}

module.exports = ImageView;