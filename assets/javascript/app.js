//Variables

//Variables to hold number of correct answers and incorrect answers at end of game.
var correctAnswers;
var incorrectAnswers;
var questionSet = {
	questionArray: [{
		question: "Who won the first super bowl?",
		choiceOne: "Green Bay Packers",
		choiceTwo: "Kansas City Chiefs",
		choiceThree: "New England Patriots",
		choiceFour: "Los Angeles Rams"
		}, {
		question: "Who won Super Bowl MVP in 2017?",
		choiceOne: "Dion Lewis",
		choiceTwo: "Julio Jones",
		choiceThree: "Matt Ryan",
		choiceFour: "Tom Brady"
	}]
};


//Append start button
$("#start-div").append("<button id='start-game-button'>" + "Start" + "</button>");
//Add styling to start button.
$("#start-game-button").addClass("btn btn-primary btn-lg btn-block");
//Hide question div at start of game
$("#question-div").hide();
//When start button is clicked, start game.
$("#start-game-button").on("click", function() {
	start();
});


//Functions
function start() {
	//Hide the div with start button...
	$("#start-div").hide();
	//Show the question div at start of game..
	$("#question-div").show().append("<h2>" + "Question: " + questionSet.questionArray[0].question + "</h2>");
	$("#question-div").show().append("<h2>" + questionSet.questionArray[0].choiceOne + "</h2>");
	$("#question-div").show().append("<h2>" + questionSet.questionArray[0].choiceTwo + "</h2>");
	$("#question-div").show().append("<h2>" + questionSet.questionArray[0].choiceThree + "</h2>");
	$("#question-div").show().append("<h2>" + questionSet.questionArray[0].choiceFour + "</h2>");
}