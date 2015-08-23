$(document).ready(function(){
  
  console.log('Ready!!!');
  // Declaring some variables
  var squareContainer;
  var squareTopLeft;
  var squareTopRight;
  var squareBottomLeft;
  var squareBottomRight;
  var randomPattern = [];
  var playerPattern = [];
  var listener;

  setUp();

});

function setUp(){
  // Building a container and the four div for each square of the board
  $('body').html('<div id="container" class="containerClass">');
  $('#container').html('<div id="sqr1" class="sqr"></div><div id="sqr2" class="sqr"></div><div id="sqr3" class="sqr"></div><div id="sqr4" class="sqr"></div>');
  // Giving css attributes to the container and squares using a Square Factory:
  // (backgroundColor, width, height, margin, padding, display, borderRadius, mozBorderRadius, webkitBorderRadius)
  squareContainer = new SquareFactory('rgb(0,0,0)', '1', '100px', '104px', '50px auto', '2px', 'block', '100px', '100px', '100px');
  squareBlue = new SquareFactory('rgb(0,0,255)', '0.8', '50px', '50px', '0', '0', 'inline-block', '100px 0 50px 0', '100px 0 50px 0', '100px 0 50px 0');
  squareYellow = new SquareFactory('rgb(255,255,0)', '0.8', '50px', '50px', '0', '0', 'inline-block', '0 100px  0 50px', '0 100px  0 50px', '0 100px  0 50px');
  squareRed = new SquareFactory('rgb(255,0,0)', '0.8', '50px', '50px', '0', '0', 'inline-block', '0 50px 0 100px', '0 50px 0 100px', '0 50px 0 100px');
  squareGreen = new SquareFactory('rgb(0,255,0)', '0.8', '50px', '50px', '0', '0', 'inline-block', '50px 0 100px 0', '50px 0 100px 0', '50px 0 100px 0');

  console.log(squareContainer);
  
  // Adding CSS atributes
  $('.containerClass').css(squareContainer);
  $('.containerClass').css({
                              'text-align':'center',
                              'vertical-align':'center',
                              'border':'5px solid black'
  });
  // Adding Click events to listening every colored div
  $('#sqr1').css(squareBlue).on('click', getLighterColor);
  $('#sqr2').css(squareYellow).on('click', getLighterColor);
  $('#sqr3').css(squareRed).on('click', getLighterColor);
  $('#sqr4').css(squareGreen).on('click', getLighterColor);
  
 
  // Var numX pass a number to randomizer funct to get a max num of values from it 
  var numX;
  randomizer(numX);


  /*************************************/
  /*************************************/
  // throught looping we get the DIVs with ids: #sqr1, #sqr2..
  // need to use them to make colors change on the board 
  var divsForBlue = [];
  for(i = 0; i < randomPattern.length; i++){
    sqrShining = '#sqr' + randomPattern[i];
    sqrShining = $(sqrShining)[0]
    console.log(sqrShining);
    $(sqrShining).fadeTo(500, 0.1).fadeTo(500, 1.0);
    //blue();
    //setTimeout(blue, 1000);
    divsForBlue.push(sqrShining);
  };
  console.log('Next is array index 1: ');
  console.log(divsForBlue[1]);


  function blue(){
    //console.log('hello: ' + $(sqrShining).backgroundColor);
    $(this).fadeTo(500, 0.1).fadeTo(500, 1.0);
  }
  /*************************************/
  /*************************************/
  
};

// Returns a random integer between numX and 1
function randomizer(numX){
  randomPattern = [];
  var numSquaresForPattern = Math.floor(Math.random() * (numX - 1 + 1)) + 1;
  // Loop to create a pattern made by idOfSquare random numbers
  for(i = 0; i <= numSquaresForPattern; i++){
    number = idOfSquare();
    randomPattern.push(number);
  }
  console.log('Next is the pattern:');
  console.log(randomPattern);
  return randomPattern;
}

// Got a number between 1 and 4 to choose square Id
function idOfSquare(){
  var idOfSquare = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  return idOfSquare;
}
// Building Squares, or in others words css properties for colored divs
function SquareFactory(backgroundColor, opacity, width, height, margin, padding, display, borderRadius, mozBorderRadius, webkitBorderRadius, listener){
  this.backgroundColor = backgroundColor;
  this.opacity = opacity;
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
// New player function with Name, currentlevel, startTime from the beginning of game, record is a combination between levels passed and total time spent to pass them, playerPattern is the recording of the last pattern player did (helps to check with randomPattern)
function NewPlayer(name, level, record){
  this.name = name;
  this.level = level;
  this.startTime = startTime;
  this.record = record;
  this.playerPattern = playerPattern;
};

function getLighterColor(){
  // Color value had an Alpha value of '0.8' that now I'm replacing for '1'
  // So color will look like lightener
  color = $(this).css('opacity', '1');
  // Once that mouse is out, turn into normal opacity
  $(this).one('mouseout', getnormalColor);
};

function getnormalColor(){
  console.log('newcolor in get: ' + color);
  //On mouse out color returns to its previous value
  color = $(this).css('opacity', '0.8');
}








