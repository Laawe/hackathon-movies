$(document).ready(function () {
    $('.collapsible').collapsible();
});

var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "api_key=ttTnr3P7XWO1cla8ITffaiE5nfKBjkFu&q=";
var inputGif = document.getElementById("input-gif").value;
var endPoint = "&limit=5&offset=0&rating=G&lang=es";