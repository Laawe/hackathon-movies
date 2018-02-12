//Funcion para la vista splash
$(document).ready(function () {
    setTimeout(function () {
        $("#splash").fadeOut(500);
    }, 3000); //oculta la pantalla inicial
    setTimeout(function () {
        $("#main").fadeIn(500);
    }, 3000); /*Muestra la pantalla Principal*/
});


$(document).ready(function () {
    //funcionalidad Materialize

    // funcion para desplegar menú
    $(".button-collapse").sideNav();

    //función del carrusel
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    //$(document).ready(function() {
    //$('.carousel').carousel();
    //});


    //$('#movie-container').hide();

    $('#movie-container').hide();


});

var provider = new firebase.auth.GoogleAuthProvider(); //--------------------

$('#buttonGoogle').click(function () {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (result) {
            console.log(result.user);
            var name = result.user.displayName;
            //console.log(name);
            var photo = result.user.photoURL;
            //console.log(photo);

            //colocando photo de perfil y nombre de usuario en pagina
            localStorage.setItem("name", result.user.displayName);
            localStorage.setItem("photo", result.user.photoURL);
            localStorage.name = result.user.displayName
            localStorage.photo = result.user.photoURL
            $('#filmicon').attr('src', photo);
            $('#profile-pic').attr(localStorage.photo);
            $('#profile-name').text(localStorage.name);
            $('profile-section-photo').attr('src', localStorage.photo);

            writeUserData(name, photo);
        });

});

function writeUserData(name, imageUrl) {
    firebase.database().ref('users').set({
        username: name,
        profile_picture: imageUrl
    });
}


$('#reload').click(function () {
    location.reload();
}); /* Para 'cerrar' sesion del usuario */

//-------------------------------------------------


var $api = "https://www.omdbapi.com/?t=";
var $userInput = $('#search').val();
var $apiKey = '&apikey=7da64696';
var $searcBtn = $('#search-btn');



//función para hacer una busqueda de pelicula
$('#search-btn').on('click', function (event) {
    event.preventDefault;
    $('#carousel').hide();
    $('#movie-container').show();
    console.log($('#search').val());
    var $apiURL = $api + $('#search').val() + $apiKey;
    //console.log($apiURL);

    var xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.onreadystatechange = function (e) {
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
    xhr.open("GET", "https://www.omdbapi.com/?t=" + $('#search').val().trim() + "&apikey=7da64696", true);
    xhr.send();

});
/*fetch($apiURL).then(function(response){
 console.log('Status', response.status);
 if (!response.ok){
   throw response.statusText;
 }
});*/