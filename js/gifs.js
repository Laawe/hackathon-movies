$(document).ready(function () {
    $('.collapsible').collapsible();
});

var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "api_key=ttTnr3P7XWO1cla8ITffaiE5nfKBjkFu&q=";
var inputGif = document.getElementById("input-gif").value;
var endPoint = "&limit=3&offset=0&rating=G&lang=es";

//
$('#gif').on('click', function (e) {
    e.preventDefault;
    //api
    var request = new XMLHttpRequest();
    request.onreadystatechange = function (e) {
        if (this.readyState === 4 && this.status === 200) {
            var response = JSON.parse(this.response);
            var gifGif = response.data[0].images.original.url;
            console.log(gifGif);

            //

            var $divContainerGif = $("<div />", {
                "class": "col s9 offset-s3 container-gif-post"
            });
            var $imagenGif = $("<img />", {
                "src": "gifGif"
            });
            //
            $divContainerGif.append($imagenGif);
            $("#container-gifs").append($divContainerGif);
        }
    }
    request.open("GET", "https://api.giphy.com/v1/gifs/search?" + "api_key=ttTnr3P7XWO1cla8ITffaiE5nfKBjkFu&q=" + document.getElementById("input-gif").value + "&limit=3&offset=0&rating=G&lang=es", true);
    request.send();
});