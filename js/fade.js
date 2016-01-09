/* Fades for page scrolling */

$(document).ready(function() {

  var scrollAmt = .7; // Fraction from top until object fades in

  var win = $(window);

  var animateFade = function() {
    var hideme = $('.hideme');
    if (hideme.length === 0) return;

    var fadePoint = win.scrollTop() + (win.height() * scrollAmt);

    /* Check the location of each desired element */
    hideme.each(function(i){

      var elem = $(this);
      var objTop = elem.offset().top;

      /* If the object is scrollAmt from the top, fade it */
      if (fadePoint > objTop){
        elem.animate({'opacity':'1'}, 500);
        elem.removeClass('hideme');
      }
    });
  };

  /* Every time the window is scrolled ... */
  win.scroll(animateFade);

});
