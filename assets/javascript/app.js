//Variables

//Variables to hold number of correct answers and incorrect answers at end of game.
var correctAnswers;
var incorrectAnswers;

//Append start button
$("#start-button-div").append("<button id='start-game-button'>" + "Start" + "</button>");
//Add styling to start button.
$("#start-game-button").addClass("btn btn-primary btn-lg btn-block");
//When start button is clicked, start game.
$("#start-game-button").on("click", function() {
	start();
});


//Functions
function start() {

}