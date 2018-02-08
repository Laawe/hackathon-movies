// función para crear los elementos donde van los comentarios mediante jquery

$('#btn-comment').on('click', function (e) {
    e.preventDefault;
    var $textarea = $('#textarea1').val();
    console.log($textarea);
    //contenedores y crear dom de donde irán los comentarios
    var $firstDiv = $('<div />', {
        "class": "col s9 offset-s2 m6 l6 z-depth-3",
        "id": "first-div"
    });
    // append to firstdiv
    var $chipDiv = $('<div />', {
        "class": "chip"
    });
    // append to chipDiv
    var $imgProfile = $('<img />', {
        "class": "profile-pic",
        "id": "profile-pic",
        "src": "assets/images/incompresa.jpg"
    });
    // append to chipDiv
    var $spanName = $('<span />', {
        "class": "profile-name",
        "id": "profile-name"
    });
    // append to firstdiv
    var $comment = $('<div />',{
        "class":"comment",
        "id":"comment"
    });
    // append to comment
    var $spanComment = $('<span />',{
        "class" : "comment-movies"
    });
    //
    $spanComment.text($textarea);
    $spanName.text("Law");
    //
    $chipDiv.append($imgProfile);
    $chipDiv.append($spanName);
    //
    $comment.append($spanComment);
    //
    $firstDiv.append($chipDiv);
    $firstDiv.append($comment);
    //
    $('#container-post').append($firstDiv);



})