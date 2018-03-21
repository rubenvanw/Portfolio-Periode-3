$( document ).ready(function() {
    $(".arrow").click(function() {
        $('html, body').animate({
            scrollTop: $(".containerTwee").offset().top
        }, 1000);
    });

    $(window).scroll(function() {
        if($(document).scrollTop() > 10) {
            $('#navBar').addClass('navClass');
        }
        else {
            $('#navBar').removeClass('navClass');
        }
    });

    $("#about").click(function () {
        $('html,body').animate(
            {
                scrollTop: $("#paginaTwee").offset().top
            }, 1000);
    });

    $("#projects").click(function () {
        $('html,body').animate(
            {
                scrollTop: $("#paginaVier").offset().top
            }, 1000);
    });

    $("#contact").click(function () {
        $('html,body').animate(
            {
                scrollTop: $("#paginaVijf").offset().top
            }, 1000);
    });

});
