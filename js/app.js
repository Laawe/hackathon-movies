//Funcion para la vista splash
$(document).ready(function() {
    setTimeout(function() {
        $("#splash").fadeOut(500);
    }, 3000); /*oculta la pantalla inicial*/
    setTimeout(function() {
        $("#main").fadeIn(500);
    }, 3000); /*Muestra la pantalla Principal*/


});

$(document).ready(function() {
    //funcionalidad Materialize

    // funcion para desplegar menú
    $(".button-collapse").sideNav();

    //función del carrusel
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    //$(document).ready(function() {
    //$('.carousel').carousel();
    //});

    <<
    << << < HEAD
    //$('#movie-container').hide();
        ===
        === =
        $('#movie-container').hide(); >>>
    >>> > upstream / master

});

var $api = "http://www.omdbapi.com/?t=";
var $userInput = $('#search').val();
var $apiKey = '&apikey=7da64696';
var $searcBtn = $('#search-btn');


//función para llamar al api


$('#search-btn').on('click', function(event) {
    event.preventDefault;
    console.log($('#search').val());
    var $api = $apiURL + $('#search').val() + $apiKey;
    console.log($api);
    $.getJSON($api, function(result) {

    })

});

//función para hacer una busqueda de pelicula
$('#search-btn').on('click', function(event) {
    event.preventDefault;
    $('#carousel').hide();
    $('#movie-container').show();
    console.log($('#search').val());
    var $apiURL = $api + $('#search').val() + $apiKey;
    //console.log($apiURL);

    var xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.onreadystatechange = function(e) {
        if (this.readyState === 4) {
            if (this.status === 200) {
                var response = JSON.parse(this.response);
                var titleResponse = response.Title;
                //console.log(title);
                var directorResponse = response.Director;
                //console.log(director);
                var posterResponse = response.Poster;
                //console.log(poster);
                var yearResponse = response.Year;

                //pintando resultado de la busqueda en el HTML
                var container = document.getElementById('movie-container');
                var poster = document.getElementById('movie-img').src = posterResponse;
                var title = document.getElementById('movie-title').innerText = titleResponse;
                var director = document.getElementById('movie-director-content').innerText = directorResponse;
                var year = document.getElementById('movie-year-content').innerText = yearResponse;
            }
        }
    }
    xhr.open("GET", "http://www.omdbapi.com/?t=" + $('#search').val().trim() + "&apikey=7da64696", true);
    xhr.send();

});
/*fetch($apiURL).then(function(response){
 console.log('Status', response.status);
 if (!response.ok){
   throw response.statusText;
 }
});*/