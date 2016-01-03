$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 13000,
  });
});
$('#quote-carousel').on('slide.bs.carousel', function (event) {
  var curr = parseInt($('.progress-bar').attr('aria-valuenow'));

  //console.log(typeof curr);
  if(event.direction == "right") {
    $('.progress-bar').attr('aria-valuenow', curr - 1);
  } else {
    //console.log(curr);
    $('.progress-bar').attr('aria-valuenow', curr + 1);
  }
});
