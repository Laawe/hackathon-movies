
$(document).ready(function () {
    //funcionalidad Materialize

    // funcion para desplegar menú
    $(".button-collapse").sideNav();

    //función del carrusel
    $('.carousel.carousel-slider').carousel({ fullWidth: true });

 //$('#movie-container').hide();

});

var $apiURL = "http://www.omdbapi.com/?t=";
var $userInput = $('#search').val();
var $apiKey = '&apikey=7da64696';
var $searcBtn = $('#search-btn');

//función para llamar al api


$('#search-btn').on('click',function(event){
  event.preventDefault;
  console.log($('#search').val());
  var $api = $apiURL + $('#search').val() + $apiKey;
  console.log($api);
  $.getJSON($api, function(result){

  })

});
