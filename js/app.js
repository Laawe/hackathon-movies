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

    //$('#movie-container').hide();

});

var $apiURL = "http://www.omdbapi.com/?t=";
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