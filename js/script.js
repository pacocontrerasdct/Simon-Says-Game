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
  squareContainer = new squareFactory('rgba(0,0,0,1)', '100px', '104px', '50px auto', '2px', 'block', '100px', '100px', '100px');
  squareTopLeft = new squareFactory('rgba(255,0,0,0.8)', '50px', '50px', '0', '0', 'inline-block', '100px 0 50px 0', '100px 0 50px 0', '100px 0 50px 0');
  squareTopRight = new squareFactory('rgba(255,255,0,0.8)', '50px', '50px', '0', '0', 'inline-block', '0 100px  0 50px', '0 100px  0 50px', '0 100px  0 50px');
  squareBottomLeft = new squareFactory('rgba(0,0,255,0.8)', '50px', '50px', '0', '0', 'inline-block', '0 50px 0 100px', '0 50px 0 100px', '0 50px 0 100px');
  squareBottomRight = new squareFactory('rgba(0,255,0,0.8)', '50px', '50px', '0', '0', 'inline-block', '50px 0 100px 0', '50px 0 100px 0', '50px 0 100px 0');

  console.log(squareContainer);
  
  // Adding CSS atributes
  $('.containerClass').css(squareContainer);
  $('.containerClass').css({
      'text-align':'center',
      'vertical-align':'center',
      'border':'5px solid black'
  });

  $('#sqr1').css(squareTopLeft).on('click', getLighterColor);
  $('#sqr2').css(squareTopRight).on('click', getLighterColor);
  $('#sqr3').css(squareBottomLeft).on('click', getLighterColor);
  $('#sqr4').css(squareBottomRight).on('click', getLighterColor);
  
 
  // Var numX pass a number to randomizer funct to get a max num of values from it 
  var numX;
  randomizer(numX);

  
};

// Returns a random integer between numX and 1
function randomizer(numX){
  var randomPattern = '';
  var numSquaresForPattern = Math.floor(Math.random() * (numX - 1 + 1)) + 1;

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

function getLighterColor(){
  // Color value had an Alpha value of '0.8' that now I'm replacing for '1'
  // So color will look like lightener
  color = $(this).css('background-color').replace('0.8','1');
  newColor = $(this).css('background-color', color);

  console.log('getting new css backgroundColor: ' + newColor);
  //return color;
  $(this).one('mouseout', getnormalColor);
};

function getnormalColor(){
  console.log('newcolor in get: ' + color);
  //On mouse out color returns to its previous value
  color = color.replace('1','0.8')

  $(this).css('background-color', color);

  console.log('again old color? ' + color);
  //$(oldColor).css('background-color', 'black');
}








