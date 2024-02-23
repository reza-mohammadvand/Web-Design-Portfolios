$(document).ready(function() {

    $(window).scroll(function(){
        if($(document).scrollTop() > 300){
           $(".cap-icon").addClass("d-inline-block");
           $(".cap-icon").removeClass("d-none");
        }
        else{
            $(".cap-icon").addClass("d-none");
            $(".cap-icon").removeClass("d-inline-block");
        }
    });

    $(".mouse-wheel").click(function(){
        $(window).scrollTop(0);
    });


    $(".owl-carousel").owlCarousel({
        items:3,
        margin:10,
        nav:true,
        loop:true,
        rtl:true,
        autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }    });

setInterval(function(){

    $(".cap span").toggleClass("fadeInUp");
    $(".cap p").toggleClass("fadeInUpBig");
},2000)

setInterval(function(){
if(window.scrollY>750){

    $(".header").addClass("scrool");
}
else{
    $(".header").removeClass("scrool");
}
},1000)

})


 wow = new WOW(
        {
            animateClass: 'animated',
            offset:       100
        }
    );
    wow.init();