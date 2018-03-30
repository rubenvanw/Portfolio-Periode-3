$(document).ready(function () {
    $(".arrow").click(function () {
        $('html, body').animate({
            scrollTop: $(".containerTwee").offset().top
        }, 1000);
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 10) {
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

var sliderImages = document.querySelectorAll('.slide');
var arrowLeft = document.querySelector('#arrow-left');
var arrowRight = document.querySelector('#arrow-right');
var current = 0;

//Clears all images
function reset() {
    for (i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

function startSlide() {
    reset();
    sliderImages[0].style.display = "flex";
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "flex";
    current--;
}

function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "flex";
    current++;
}

arrowLeft.addEventListener('click', function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

arrowRight.addEventListener('click', function () {
   if (current === sliderImages.length - 1){
       current = -1;
   }
   slideRight();
});

startSlide();
