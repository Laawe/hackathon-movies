
$(document).ready(function () {
    //funcionalidad Materialize

    // funcion para desplegar menú
    $(".button-collapse").sideNav();

    //función del carrusel
    $('.carousel.carousel-slider').carousel({ fullWidth: true });

    $('#movie-container').hide();
});
var $search = $('#search').val();
var $apiURL = "http://www.omdbapi.com/?t=";
var $userInput = $search;
var $apiKey = '&apikey=7da64696';
var $searcBtn = $('#search-btn');
//función para llamar al api

$('#search-btn').on('click', function (event) {
    event.preventDefault;
    var $api = $apiURL + $userInput + $apiKey;
    console.log($api);
});
