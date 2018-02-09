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
    var xhr = $.get("https://api.giphy.com/v1/gifs/search?" + "api_key=ttTnr3P7XWO1cla8ITffaiE5nfKBjkFu&q=" + document.getElementById("input-gif").value + "&limit=3&offset=0&rating=G&lang=es");
    xhr.done(function (data) {
        var containergifs = document.getElementById("container-gifs");
        console.log("success got data", data);
        var gif = data.data[0].images.original.url;
        console.log(gif);

        var divContainerGif = document.createElement("div");
        var imagenGif = document.createElement("img");

        divContainerGif.classList.add("container-gif-post");
        imagenGif.setAttribute('src', data.data[0].images.original.url);
        
        console.log(containergifs, divContainerGif); 
        divContainerGif.appendChild(imagenGif);
        containergifs.appendChild(divContainerGif);      
        //

    });
});