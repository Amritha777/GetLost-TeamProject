window.onload = function(){

var url = "https://restcountries.eu/rest/v1/all";
var select = document.getElementById('country-select');
 

 makeRequest(url, requestComplete);

}

 var makeRequest = function(url, callback) {
   var request = new XMLHttpRequest();
   request.open("GET", url);
   request.onload = callback;
   request.send();
   console.log("makeRequest");
 };
}