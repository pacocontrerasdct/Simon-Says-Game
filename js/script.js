$(document).ready(function(){
  
  console.log('Ready!!!');

  var squareTopLeft;
  var squareTopRight;
  var squareBottomLeft;
  var squareBottomRight;
  
  var playerPattern;





  
  //$('body').css({'background-color':'yellow'});
  //$('body').html('<div id="house"><ul><li>');
  //$('div').html('HOLA');
  //$('#house').addClass('debe');
  ////$('.debe').css('background-color','blue');
  //$('#house').toggleClass('debe');
  //var blues = function () {$('#house').addClass('haber')};
  //$('#house').on('hover', blues);
  //$('#house').on('mouseleave', blues);

//squareTopleft;

  setUp();

});

function setUp(){
  // Building a container and the four div for each square of the board
  $('body').html('<div id="container" class="containerClass">');
  $('#container').html('<div id="sqr1" class="sqr"></div><div id="sqr2" class="sqr"></div><div id="sqr3" class="sqr"></div><div id="sqr4" class="sqr"></div>');
  // Giving css attributes to the container and squares 
  $('.sqr').css({
    'width':'50%',
    'height':'50px',
    'margin':'0',
    'padding':'0',
    'display':'inline-block'
  });

  $('.containerClass').css({
    'margin':'50px auto',
    'padding':'2px',
    'width':'100px',
    'height':'104px',
    'display':'block',
    'text-align':'center',
    'vertical-align':'center',
    'background-color':'black',
    '-webkit-border-radius':'100px',
    '-moz-border-radius':'100px',
    'border-radius':'100px',
  });


  squareTopLeft = $('#sqr1').css({
    '-webkit-border-top-left-radius':'100px',
    '-moz-border-radius-topleft':'100px',
    'border-top-left-radius':'100px',
    '-webkit-border-bottom-right-radius':'50px',
    '-moz-border-radius-bottomright':'50px',
    'border-bottom-right-radius':'50px',
    'background-color':'blue',
  });

  squareTopRight = $('#sqr2').css({
    '-webkit-border-top-right-radius':'100px',
    '-moz-border-radius-topright':'100px',
    'border-top-right-radius':'100px',
    '-webkit-border-bottom-left-radius':'50px',
    '-moz-border-radius-bottomleft':'50px',
    'border-bottom-left-radius':'50px',
    'background-color':'yellow',
  });

  squareBottomLeft = $('#sqr3').css({
    '-webkit-border-bottom-left-radius':'100px',
    '-moz-border-radius-bottomleft':'100px',
    'border-bottom-left-radius':'100px',
    '-webkit-border-top-right-radius':'50px',
    '-moz-border-radius-topright':'50px',
    'border-top-right-radius':'50px',
    'background-color':'red'
  });

  squareBottomRight = $('#sqr4').css({
    '-webkit-border-bottom-right-radius':'100px',
    '-moz-border-radius-bottomright':'100px',
    'border-bottom-right-radius':'100px',
    '-webkit-border-top-left-radius':'50px',
    '-moz-border-radius-topleft':'50px',
    'border-top-left-radius':'50px',
    'background-color':'green',
  });

  randomizer();

  
};

// Returns a random integer between minNum and maxNum
function randomizer(){
  var randomPattern = '';
  // Got a number between 1 and 10
  var numSquaresForPattern = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  
  // Loop to create a pattern
  for(i = 0; i <= numSquaresForPattern; i++){
    number = idOfSquare();
    randomPattern = randomPattern + ', ' + number;
  }

  return randomPattern;
}

function idOfSquare(){
  // Got a number between 1 and 4
  var idOfSquare = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  return idOfSquare;
}





