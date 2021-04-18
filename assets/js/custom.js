//Fixed Button
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('.fix-btn').fadeIn(); 
        } else { 
            $('.fix-btn').fadeOut(); 
        } 
    }); 
    $('.fix-btn').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 1200); 
        return false; 
    }); 
});

// Scroll Stikey Function 
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 25) {
        $('.header').addClass("active");
    }
    else {
        $('.header').removeClass("active");
    }
});


//ban-slider

$(document).ready(function() {
    $('.ban-slider').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        autoplay:true,
        dots:true,
        smartSpeed:1500,
    });
    
    $('.client-slider').owlCarousel({
        autoWidth:true,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots:false,
            },
            600:{
                items:3,
                dots:false,
            },
            1000:{
                items:5,
                dots:false,
            }
        }
    })
    
});

//mix it up
var containerEl = document.querySelector('.filter-items');

var mixer = mixitup(containerEl);

// counterup js
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 100,
        time: 8000,
    });
});



