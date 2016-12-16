var ImageView = function(city){
  this.city = city;
  this.imageUrl = "https://api.gettyimages.com/v3/search/images/creative?phrase=";
  // this.apiKey = 'tfr7wf2dcnkzf46c5w2wgg53';

}


ImageView.prototype = {
  
  // imageMakeRequest: function(url, callback, apiKey){
  
    
  getImageByName: function(callback, cityName){

  var request = new XMLHttpRequest();
  request.open("GET", this.imageUrl + cityName); 
  console.log(this.imageUrl + cityName)
  request.setRequestHeader("Api-Key", 'tfr7wf2dcnkzf46c5w2wgg53');
  request.onload = callback;
  request.send();
  },


}

module.exports = ImageView;