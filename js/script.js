$(document).ready(function(){

/* couter */

setInterval(function(){
    
  var date = new Date();
  var jam = new Date(2022,10,12,0,0,0,0);
  var time = jam.getTime() - date.getTime();
  
  
  var second = Math.floor(time/1000%60);
  var min =  Math.floor(time/1000/60%60);
  var houre = Math.floor(time/1000/60/60%24);
  var day =  Math.floor(time/1000/60/60/24%7);
  
  
  var s = $("#second");
  var m = $("#min");
  var h = $("#houre");
  var d = $("#day");
  
  s.text(second);
  m.text(min);
  h.text(houre);
  d.text(day);
  
  },1000);


    
  $("#owl-carousel-1,#owl-carousel-11").owlCarousel({
    items:3,
    dots:false,
    loop:true,
    margin:30,
    rtl:true,
    autoplay:true,
autoplayTimeout:4000,
autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        770:{
          items:2
      },
        992:{
            items:3
        }
    }    });

    $("#owl-carousel-2,#owl-carousel-22").owlCarousel({
      items:1,
      nav:true,
      dots:false,
      loop:true,
      center:true,
      margin:120,
      rtl:true,
      autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
         });
  });

wow = new WOW(
    {
        animateClass: 'animated',
        offset:       100
    }
);
wow.init();  

