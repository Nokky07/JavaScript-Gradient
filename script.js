

// The function will result in the background being a linear gradient with x,y mouse overlaying the co-ordinates

$(document).mousemove(function(event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();

  mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
  mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

  $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '%' + mouseYpercentage + '%, #84d36f, #000000)');
});

