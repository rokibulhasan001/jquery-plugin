$(document).ready(function(){
    $('.counter').counterUp({
    delay: 10,
    time: 3000
});


        // countdown
    var countdown = $("#countdown").countdown360({
    radius: 90.5,
    strokeStyle: "#477050",
    strokeWidth: undefined,
    fillStyle: "#8ac575",
    fontColor: "#477050", 
    fontFamily: "sans-serif",
    fontSize: undefined,
    fontWeight: 700,
    autostart: true,
    seconds: 100,
    label: ["second", "seconds"],
    startOverAfterAdding: true, 
    smooth: false,
    onComplete: function () {}
});
      // countdown2
    var countdown = $("#countdown1").countdown360({
    radius: 90.5,
    strokeStyle: "#477050",
    strokeWidth: undefined,
    fillStyle: "#8ac575",
    fontColor: "#477050", 
    fontFamily: "sans-serif",
    fontSize: undefined,
    fontWeight: 700,
    autostart: true,
    seconds: 100,
    label: ["second", "seconds"],
    startOverAfterAdding: true, 
    smooth: false,
    onComplete: function () {}
});
          // countdown3
    var countdown = $("#countdown2").countdown360({
    radius: 90.5,
    strokeStyle: "#477050",
    strokeWidth: undefined,
    fillStyle: "#8ac575",
    fontColor: "#477050", 
    fontFamily: "sans-serif",
    fontSize: undefined,
    fontWeight: 700,
    autostart: true,
    seconds: 100,
    label: ["second", "seconds"],
    startOverAfterAdding: true, 
    smooth: false,
    onComplete: function () {}
});
// $(selector).countMe(delay,speed)
$("#counter5").countMe(40,65);
// $(selector).countMe(delay,speed)
$("#counter6").countMe(40,65);
// $(selector).countMe(delay,speed)
$("#counter7").countMe(40,65);
// $(selector).countMe(delay,speed)
$("#counter8").countMe(40,65);

$('.counter9').rollNumber({
  number: 123456
})



 });


