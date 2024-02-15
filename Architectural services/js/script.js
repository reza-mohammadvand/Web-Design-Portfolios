$(document).ready(function() {

    $('.counter1,.counter2,.counter3,.counter4').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $(".owl-carousel").owlCarousel({
        items:2,
        nav:true,
        loop:true,
        rtl:true,
        autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            990:{
                items:2
            }
        }    });
});

 wow = new WOW(
        {
            animateClass: 'animated',
            offset:       100
        }
    );
    wow.init();