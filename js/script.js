$(document).ready(function(){
  
  console.log('Ready!!!');


  setUp();

});


// Declaring some variables
var squareContainer;
var squareTopLeft;
var squareTopRight;
var squareBottomLeft;
var squareBottomRight;
var randomPattern = [];
var playerPattern = [];
var listener;
var numX = 2;


function setUp(){
  // Building page
  $('body').html('<div id="bigContainer" class="bigContainerClass"><header></header><main></main><aside></aside><footer></footer></div>');
 
  $('header').html('<h1 id="h1Header"><h2 id="h2Header">');
  
  $('#h1Header').append('Simon Game');
  
  $('#h2Header').append('A challenge to your mind');

  $('main').html('<p id="parr1"><p id="parr2">');
  $('main').append('<button id="startButton"><button id="quitButton">');
  $('#parr1').append('Welcome to <em>Simon On -Line</em>, an online game based in an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison, with software programming by Lenny Cope. Simon was launched in 1978 at Studio 54 in New York City and was an immediate success, becoming a pop culture symbol of the 1970s and 1980s.');
  $('#parr2').append('Instructions to play: The device has four colored buttons, each producing a particular tone when it is pressed or activated by the device. A round in the game consists of the device lighting up one or more buttons in a random order, after which the player must reproduce that order by pressing the buttons. As the game progresses, the number of buttons to be pressed increases.');
  $('#startButton').append('START').on('click', buildingBoard);
  $('#quitButton').append('QUIT').on('click', quit);



  // Var numX pass a number to randomizer funct to get a max num of values for a Level of dificulty 
  randomizer(numX);

};


// Got a number between 1 and 4 to choose square Id
function idOfSquare(){
  var idOfSquare = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  return idOfSquare;
}

// Returns a random integer between numX and 1
function randomizer(numX){
  var numSquaresForPattern = Math.floor(Math.random() * (numX - 1 + 1)) + 1;
  // Loop to create a pattern made by idOfSquare random numbers
  for(i = 0; i <= numSquaresForPattern; i++){
    number = idOfSquare();
    randomPattern.push(number);
  }
  console.log('Next is the pattern:');
  console.log(randomPattern);

  // throught looping we get the DIVs with ids: #sqr1, #sqr2..
  // need doBlink to use them to make colors change on the board 
  $.each(randomPattern, doBlink);

  console.log('Say to player: IT\'S Your Turn');
}

function doBlink(index, element){

  $('#sqr'+element).delay(1000 * index).fadeTo(300, 1.0).fadeTo(300, 0.7);

}




// Building Squares, or in others words css properties for colored divs
function SquareFactory(backgroundColor, opacity, width, height, margin, padding, display, borderRadius, mozBorderRadius, webkitBorderRadius){
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
};
// New player function with Name, currentlevel, startTime from the beginning of game, record is a combination between levels passed and total time spent to pass them, playerPattern is the recording of the last pattern player did (helps to check with randomPattern)
function newPlayer(playerN){ 
  this.name = playerN;
  this.level = 0;
  this.startTime = $.now(); // I'll need to sustract time from countdown
  this.record = 0;
  this.playerPattern = playerPattern;
};

function playerName(){
    // After showing board ask to player for a name
  console.log('hello playerName');
  alert('can get message on line 107');
  $('aside').html('<p id="giveMeName"></p>');
  $('#giveMeName').html('To start the game I will need your name, so I can keep your achievements updated in our Hall Of Fame.');
  


  // Building a input area and a button to get player name
  $('aside').html('<input id="inputName" type="text" placeholder="Enter a name"/><button id="getNameButton" type="button">Get me!');
  // On 'click' getting name
  $('#getNameButton').on('click',function(){
    inputFromPlayer = $('#inputName')[0];
    console.log(inputFromPlayer.value);
    playerN = inputFromPlayer.value;
    // Creating a new player
    playerId = new newPlayer(playerN); // I'll need to create an object to keep
                                    //all different players while the game is running  
  });
  countDown();
}



function recordingPLayerPattern(){
  // Each square has a dataset number as Id so I'm collect it now
  numSqr = $(this)[0].dataset.numbersquare;
  playerPattern.push(numSqr); 
  console.log('Next is inside an array with pLayerPattern:');
  console.log(playerPattern);
};

function comparePatterns(){
  computer = randomPattern.join();
  player = playerPattern.join();

  if(computer === player){
    alert('YOU ARE THE BEST');
  }
  else{
    alert('should empty array after compare patterns');
  }
  console.log(computer);
  console.log(player);
};

function buildingBoard(){
 // Building a container and the four div for each square of the board
  $('main').html('<div id="container" class="containerClass">');
  $('#container').html('<div id="sqr1" class="sqr" data-numberSquare="1"></div><div id="sqr2" class="sqr" data-numberSquare="2"></div><div id="sqr3" class="sqr" data-numberSquare="3"></div><div id="sqr4" class="sqr" data-numberSquare="4"></div>');
  // Giving css attributes to the container and squares using a Square Factory:
  // (backgroundColor, width, height, margin, padding, display, borderRadius, mozBorderRadius, webkitBorderRadius)
  squareContainer = new SquareFactory('rgb(0,0,0)', '1', '200px', '200px', '50px auto', '2px', 'block', '200px', '200px', '200px');
  squareBlue = new SquareFactory('rgb(0,0,255)', '0.7', '100px', '100px', '0', '0', 'inline-block', '100px 0 50px 0', '100px 0 50px 0', '100px 0 50px 0');
  squareYellow = new SquareFactory('rgb(255,255,0)', '0.7', '100px', '100px', '0', '0', 'inline-block', '0 100px  0 50px', '0 100px  0 50px', '0 100px  0 50px');
  squareRed = new SquareFactory('rgb(255,0,0)', '0.7', '100px', '100px', '0', '0', 'inline-block', '0 50px 0 100px', '0 50px 0 100px', '0 50px 0 100px');
  squareGreen = new SquareFactory('rgb(0,255,0)', '0.7', '100px', '100px', '0', '0', 'inline-block', '50px 0 100px 0', '50px 0 100px 0', '50px 0 100px 0');

  console.log(squareContainer);
  
  // Adding CSS atributes
  $('.containerClass').css(squareContainer);
  $('.containerClass').css({
                              'text-align':'center',
                              'vertical-align':'center',
                              'border':'5px solid black'
  });

  // Adding Click events to listening every colored div
  $('#sqr1').css(squareBlue).on('click', recordingPLayerPattern);
  $('#sqr2').css(squareYellow).on('click', recordingPLayerPattern);
  $('#sqr3').css(squareRed).on('click', recordingPLayerPattern);
  $('#sqr4').css(squareGreen).on('click', recordingPLayerPattern);

  playerName();

};

// Countdown to start the game when player enter his/her name
function countDown(){
  countDownNumbers = ['1','2','3','4']; 
  $.each(countDownNumbers, function (index, element){
    spanTag = $('aside').append('<span id="span' + element + '">');
  });
 $('#span1').append(countDownNumbers[2] + '... ').delay(500).fadeTo(200, 0);
 $('#span2').append(countDownNumbers[1] + '... ').delay(1000).fadeTo(200, 0);
 $('#span3').append(countDownNumbers[0] + '... ').delay(1500).fadeTo(200, 0);
 $('#span4').append('Go!').fadeTo(0, 0).delay(2000).fadeTo(200, 1).delay(1000).fadeTo(200, 0);



};


// This function close the window and finishes the game
function quit(){
  url = "https://www.google.co.uk/";
  var newWindow = window.open('', '_self', ''); //open the current window
  window.close(url);
};








