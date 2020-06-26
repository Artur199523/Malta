/*menu scroll fixed*/
var menu = document.getElementById("menu");
    var img = document.getElementById("menu_logo_img");
    window.onscroll = function () {
        var windowScrollPosition = window.pageYOffset;
        if(windowScrollPosition > 700){
            menu.classList.remove("menu_style");
            menu.classList.add("sticky");
            img.classList.add("img_width");
        }
        else {
            menu.classList.remove("sticky");
            menu.classList.add("menu_style");
            img.classList.remove("img_width");

        }
        var scrollUpButton = document.getElementById("scroll_button");
        if (windowScrollPosition > 600) {
            scrollUpButton.classList.add("visible_scroll_button")
        } if(windowScrollPosition < 600) {
            scrollUpButton.classList.add("visible_scroll_back")
        }
        else {
            scrollUpButton.classList.remove("visible_scroll_back")
        }

    };
/*menu overflow*/
document.querySelector(".menu_line").addEventListener("click", BlockNone);
var next = "displayB";
var ids = {
    displayB: displayBloke,
    displayN: displayNone,
};

function BlockNone() {
    ids[next]();
}

function displayBloke() {
    document.querySelector(".mobile_menu_list").classList.remove("display_none");
    document.querySelector(".mobile_menu_list").classList.add("display_block");
    next = "displayN";
}

function displayNone() {
    document.querySelector(".mobile_menu_list").classList.remove("display_block");
    document.querySelector(".mobile_menu_list").classList.add("display_none");
    next = "displayB"
}

/*Scroll button*/

var btnScrollTop = document.querySelector("#scroll_button");
btnScrollTop.addEventListener("click",function () {
    // window.scrollTo(0,0);
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    })
});

/*Showslider*/
var slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
    showSlides(slideIndex = n);
}
function pluSlide(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var mySlide = document.getElementsByClassName("mySlide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n > mySlide.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    if (n < 1) {
        slideIndex = mySlide.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < mySlide.length; i++) {
        mySlide[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    mySlide[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}