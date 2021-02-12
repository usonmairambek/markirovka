var burger = document.getElementById('burger');
// var test = document.getElementById('test')
// burger.onclick = function (){
// burger.classList.toggle("active");
// }



burger.onclick = function () {
    burger.classList.toggle("active");
    test.classList.toggle("tests");
}


$(function() {
    $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('#topNubex').fadeIn();
    } else {
    $('#topNubex').fadeOut();
    }
    });
    $('#topNubex').click(function() {
    $('body,html').animate({scrollTop:0},700);
    });
    });