/* coursel */ 

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:4,
        margin:20,
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
            567:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }
        }    });
  });




/* date */

setInterval(function(){
    
var date = new Date();
var jam = new Date(2026,10,12,0,0,0,0);
var time = jam.getTime() - date.getTime();


var second = Math.floor(time/1000%60);
var min =  Math.floor(time/1000/60%60);
var houre = Math.floor(time/1000/60/60%24);
var day =  Math.floor(time/1000/60/60/24%7);
var week = Math.floor(time/1000/60/60/24/7);


var s = document.getElementById("second");
var m = document.getElementById("min");
var h = document.getElementById("houre");
var d = document.getElementById("day");
var w = document.getElementById("week");

s.innerHTML = second;
m.innerHTML = min;
h.innerHTML = houre;
d.innerHTML = day;
w.innerHTML = week;

},1000)


/* date -match */

setInterval(function(){
    
    var date = new Date();
    var jam = new Date(2021,10,12,0,0,0,0);
    var time = jam.getTime() - date.getTime();
    
    
    var second = Math.floor(time/1000%60);
    var min =  Math.floor(time/1000/60%60);
    var houre = Math.floor(time/1000/60/60%24);
    var day =  Math.floor(time/1000/60/60/24%7);
    var week = Math.floor(time/1000/60/60/24/7);
    
    
    var s = document.getElementById("second-match");
    var m = document.getElementById("min-match");
    var h = document.getElementById("houre-match");
    var d = document.getElementById("day-match");
    var w = document.getElementById("week-match");
    
    s.innerHTML = second;
    m.innerHTML = min;
    h.innerHTML = houre;
    d.innerHTML = day;
    w.innerHTML = week;
    
    },1000)

 wow = new WOW(
        {
            animateClass: 'animated',
            offset:       100
        }
    );
    wow.init();