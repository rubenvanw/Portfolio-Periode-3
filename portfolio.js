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

});
