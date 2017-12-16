//Variables

//Create a variable to hold boolean value. Did the user select the right answer (true or false)?
var selectRightAnswer = false;

//Variables to hold number of correct answers and incorrect answers at end of game.
var correctAnswersTally = 0;
var incorrectAnswersTally = 0;

//Create variable to hold all questions and answers in question set.
var questionSet = {
	questionArray: [{
		question: "Which team won the first Super Bowl (Super Bowl I)?",
		choiceOne: "Green Bay Packers",
		choiceTwo: "Kansas City Chiefs",
		choiceThree: "New England Patriots",
		choiceFour: "Los Angeles Rams"
		}, {
		question: "Who was awarded Super Bowl MVP in Super Bowl LI (2017)?",
		choiceOne: "Dion Lewis",
		choiceTwo: "Julio Jones",
		choiceThree: "Matt Ryan",
		choiceFour: "Tom Brady"
		}, {
		question: "What was the first team to win five Super Bowls?",
		choiceOne: "Denver Broncos",
		choiceTwo: "Pittsburgh Steelers",
		choiceThree: "San Francisco 49ers",
		choiceFour: "Dallas Cowboys"
		}, {
		question: "Which team played 4 Super Bowls, but has never led a Super Bowl for even a single second?",
		choiceOne: "Houston Texans",
		choiceTwo: "Minnesota Vikings",
		choiceThree: "Jacksonville Jaguars",
		choiceFour: "Chicago Bears"
		}, {
		question: "Who was the first African American coach to win a Super Bowl?",
		choiceOne: "Tony Dungy",
		choiceTwo: "Lovie Smith",
		choiceThree: "Mike Tomlin",
		choiceFour: "Marvin Lewis"
		}, {
		question: "Which team played in the most consecutive Super Bowls?",
		choiceOne: "Green Bay Packers",
		choiceTwo: "New England Patriots",
		choiceThree: "Philadelphia Eagles",
		choiceFour: "Buffalo Bills"
		}]

};


//Append start button
$("#start-div").append("<button id='start-game-button'>" + "Start" + "</button>");
//Add styling to start button.
$("#start-game-button").addClass("btn btn-primary btn-lg btn-block");
//Hide question div at start of game
$("#question-div").hide();
$("#corect-answer-div").hide();
//When start button is clicked, start game.
$("#start-game-button").on("click", function() {
	start();
});


//Functions
function start() {
	//Hide the div with start button...
	$("#start-div").hide();
	//Show the question div at start of game..
	$("#question-div").show().append("<h1>" + "Question: " + questionSet.questionArray[0].question + "</h1>");
	$("#question-div").show().append("<h2>" + "<button class='choice' id='correctAnswer'>" + questionSet.questionArray[0].choiceOne + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[0].choiceTwo + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[0].choiceThree + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[0].choiceFour + "</button>" + "</h2>");
	$(".choice").addClass("btn btn-primary btn-lg btn-block p-3 m-3")

	$("#correctAnswer").on("click", function() {
		selectRightAnswer = true;
		//Add 1 to correctAnswersTally
		correctAnswersTally++;
		$("#question-div").hide();
		$("#correct-answer-div").show().append("<h2>" + "Correct!" + "</h2>").addClass("bg-primary text-black");
		setTimeout(nextQuestion, 3000);

	});
}

function nextQuestion() {
	//Show the question div at start of game..
	$("#correct-answer-div").hide();
	$("#question-div").show().html("<h1>" + "Question: " + questionSet.questionArray[1].question + "</h1>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[1].choiceOne + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[1].choiceTwo + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[1].choiceThree + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice' id='correctAnswer'>" + questionSet.questionArray[1].choiceFour + "</button>" + "</h2>");
	$(".choice").addClass("btn btn-primary btn-lg btn-block p-3 m-3")

	$("#correctAnswer").on("click", function() {
		selectRightAnswer = true;
		//Add 1 to correctAnswersTally
		correctAnswersTally++;
		$("#question-div").hide();
		$("#correct-answer-div").show().html("<h2>" + "Correct!" + "</h2>").addClass("bg-primary text-black");
		setTimeout(thirdQuestion, 3000);

	});
}

function thirdQuestion() {
	//Show the question div at start of game..
	$("#correct-answer-div").hide();
	$("#question-div").show().html("<h1>" + "Question: " + questionSet.questionArray[2].question + "</h1>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[2].choiceOne + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[2].choiceTwo + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice' id='correctAnswer'>" + questionSet.questionArray[2].choiceThree + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[2].choiceFour + "</button>" + "</h2>");
	$(".choice").addClass("btn btn-primary btn-lg btn-block p-3 m-3")

	$("#correctAnswer").on("click", function() {
		selectRightAnswer = true;
		//Add 1 to correctAnswersTally
		correctAnswersTally++;
		$("#question-div").hide();
		$("#correct-answer-div").show().html("<h2>" + "Correct!" + "</h2>").addClass("bg-primary text-black");
		setTimeout(fourthQuestion, 3000);

	});
}

function fourthQuestion() {
	//Show the question div at start of game..
	$("#correct-answer-div").hide();
	$("#question-div").show().html("<h1>" + "Question: " + questionSet.questionArray[3].question + "</h1>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[3].choiceOne + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice' id='correctAnswer'>" + questionSet.questionArray[3].choiceTwo + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[3].choiceThree + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[3].choiceFour + "</button>" + "</h2>");
	$(".choice").addClass("btn btn-primary btn-lg btn-block p-3 m-3")

	$("#correctAnswer").on("click", function() {
		selectRightAnswer = true;
		//Add 1 to correctAnswersTally
		correctAnswersTally++;
		$("#question-div").hide();
		$("#correct-answer-div").show().html("<h2>" + "Correct!" + "</h2>").addClass("bg-primary text-black");
		setTimeout(fifthQuestion, 3000);

	});
}

function fifthQuestion() {
	//Show the question div at start of game..
	$("#correct-answer-div").hide();
	$("#question-div").show().html("<h1>" + "Question: " + questionSet.questionArray[4].question + "</h1>");
	$("#question-div").show().append("<h2>" + "<button class='choice' id='correctAnswer'>" + questionSet.questionArray[4].choiceOne + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[4].choiceTwo + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[4].choiceThree + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[4].choiceFour + "</button>" + "</h2>");
	$(".choice").addClass("btn btn-primary btn-lg btn-block p-3 m-3")

	$("#correctAnswer").on("click", function() {
		selectRightAnswer = true;
		//Add 1 to correctAnswersTally
		correctAnswersTally++;
		$("#question-div").hide();
		$("#correct-answer-div").show().html("<h2>" + "Correct!" + "</h2>").addClass("bg-primary text-black");
		setTimeout(sixthQuestion, 3000);

	});

function sixthQuestion() {
	//Show the question div at start of game..
	$("#correct-answer-div").hide();
	$("#question-div").show().html("<h1>" + "Question: " + questionSet.questionArray[5].question + "</h1>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[5].choiceOne + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[5].choiceTwo + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[5].choiceThree + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice' id='correctAnswer'>" + questionSet.questionArray[5].choiceFour + "</button>" + "</h2>");
	$(".choice").addClass("btn btn-primary btn-lg btn-block p-3 m-3")

	$("#correctAnswer").on("click", function() {
		selectRightAnswer = true;
		//Add 1 to correctAnswersTally
		correctAnswersTally++;
		$("#question-div").hide();
		$("#correct-answer-div").show().html("<h2>" + "Correct!" + "</h2>").addClass("bg-primary text-black");
		setTimeout(gameOver, 3000);
	});
}

function gameOver (){
	$("#question-div").hide();
	$("#correct-answer-div").html("<h2>" + "You got " + correctAnswersTally + " out of 6 correct" + "</h2>").addClass("bg-primary");
	//Append try again button
	$("#correct-answer-div").append("<button id='try-again-button'>" + "Try again?" + "</button>");
	//Add styling to start button.
	$("#try-again-button").addClass("btn btn-primary btn-lg btn-block");
	$("#try-again-button").on("click", function() {
		start();
		$("#correct-answer-div").hide();
	});
}
}



