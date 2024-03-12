$(document).ready(function(e){

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


    wow = new WOW(
        {
            animateClass: 'animated',
            offset:       100
        }
    );
    wow.init();

    $(".mouse-wheel").click(function(){
        $(window).scrollTop(900);
    });
});




