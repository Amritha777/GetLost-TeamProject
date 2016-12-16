var ImageView = function(){
  
}

var apiKey = 'tfr7wf2dcnkzf46c5w2wgg53';
var imageUrl:"https://api.gettyimages.com/v3/search/images/creative?phrase=cities";


var makeRequest = function(url, callback, apiKey){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.setRequestHeader("Api-Key", apiKey);
    request.onload = callback;
    request.send();
    };
    
 var imageComplete = function(data){
    console.log(this.data)
}
    // if(this.status !==200) return;
//     if(this.status !==200) return;
//         for(var i = 0;i<data.images.length;i++)
//         // {
//         //    $("#output").append("<img src='" + data.images[i].display_sizes[0].uri + "'/>");
//         // }
//     })
// }
//     .fail(function(data){
//         alert(JSON.stringify(data,2))
//     });


module.exports = ImageView;