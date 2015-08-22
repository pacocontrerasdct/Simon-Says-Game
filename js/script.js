$(document).ready(function(){
  
  console.log('Ready!!!');
  // Declaring some variables
  var squareContainer;
  var squareTopLeft;
  var squareTopRight;
  var squareBottomLeft;
  var squareBottomRight;
  var playerPattern;
  var listener;

  //$('body').css({'background-color':'yellow'});
  //$('body').html('<div id="house"><ul><li>');
  //$('div').html('HOLA');
  //$('#house').addClass('debe');
  ////$('.debe').css('background-color','blue');
  //$('#house').toggleClass('debe');
  //var blues = function () {$('#house').addClass('haber')};
  //$('#house').on('hover', blues);
  //$('#house').on('mouseleave', blues);

  setUp();

});

function setUp(){
  // Building a container and the four div for each square of the board
  $('body').html('<div id="container" class="containerClass">');
  $('#container').html('<div id="sqr1" class="sqr"></div><div id="sqr2" class="sqr"></div><div id="sqr3" class="sqr"></div><div id="sqr4" class="sqr"></div>');
  // Giving css attributes to the container and squares using a Square Factory:
  // (backgroundColor, width, height, margin, padding, display, borderRadius, mozBorderRadius, webkitBorderRadius)
  squareContainer = new squareFactory('black', '100px', '104px', '50px auto', '2px', 'block', '100px', '100px', '100px');
  squareTopLeft = new squareFactory('red', '50px', '50px', '0', '0', 'inline-block', '100px 0 0 0', '100px 0 0 0', '100px 0 0 0', '.on("click", getDarker)');
  squareTopRight = new squareFactory('yellow', '50px', '50px', '0', '0', 'inline-block', '0 100px  0 0', '0 100px  0 0', '0 100px  0 0');
  squareBottomLeft = new squareFactory('blue', '50px', '50px', '0', '0', 'inline-block', '0 0 0 100px', '0 0 0 100px', '0 0 0 100px');
  squareBottomRight = new squareFactory('green', '50px', '50px', '0', '0', 'inline-block', '0 0 100px 0', '0 0 100px 0', '0 0 100px 0');

  console.log(squareContainer);
  
  // Adding CSS atributes
  $('.containerClass').css(squareContainer);
  $('.containerClass').css({
      'text-align':'center',
      'vertical-align':'center',
      'border':'5px solid orange'
  });

  $('#sqr1').css(squareTopLeft).on('click', getDarker);
  $('#sqr2').css(squareTopRight);
  $('#sqr3').css(squareBottomLeft);
  $('#sqr4').css(squareBottomRight);
  
 
  

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

function squareFactory(backgroundColor, width, height, margin, padding, display, borderRadius, mozBorderRadius, webkitBorderRadius, listener){
  this.backgroundColor = backgroundColor;
  this.height = height;
  this.width = width;
  this.margin = margin;
  this.padding = padding;
  this.display = display;
  this.borderRadius = borderRadius;
  this.mozBorderRadius = mozBorderRadius;
  this.webkitBorderRadius = webkitBorderRadius;
  this.listener = listener;
};

function getDarker(){
  newColor = 'black';
  console.log('getting css backgroundColor lighter: ' + newColor);


};








