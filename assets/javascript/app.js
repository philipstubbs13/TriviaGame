//Variables

//Create a variable to hold boolean value. Did the user select the right answer (true or false)?
var selectRightAnswer = false;

//Variables to hold number of correct answers and incorrect answers at end of game.
var correctAnswersTally = 0;
var incorrectAnswersTally = 0;

// Count will keep track of the index of the currently displaying trivia question.
var count = 0;

//Create variable to hold all questions and answers in question set.
var questionSet = {
	questionArray: [{
		question: "Which team won the first Super Bowl (Super Bowl I)?",
		choiceAnswer: "Green Bay Packers",
		choiceTwo: "Kansas City Chiefs",
		choiceThree: "New England Patriots",
		choiceFour: "Los Angeles Rams"
		}, {
		question: "Who was awarded Super Bowl MVP in Super Bowl LI (2017)?",
		choiceTwo: "Julio Jones",
		choiceThree: "Matt Ryan",
		choiceFour: "Dion Lewis",
		choiceAnswer: "Tom Brady"
		}, {
		question: "What was the first team to win five Super Bowls?",
		choiceTwo: "Pittsburgh Steelers",
		choiceThree: "Denver Broncos",
		choiceAnswer: "San Francisco 49ers",
		choiceFour: "Dallas Cowboys"
		}, {
		question: "Which team played 4 Super Bowls, but has never led a Super Bowl for even a single second?",
		choiceTwo: "Houston Texans",
		choiceAnswer: "Minnesota Vikings",
		choiceThree: "Jacksonville Jaguars",
		choiceFour: "Chicago Bears"
		}, {
		question: "Who was the first African American coach to win a Super Bowl?",
		choiceAnswer: "Tony Dungy",
		choiceTwo: "Lovie Smith",
		choiceThree: "Mike Tomlin",
		choiceFour: "Marvin Lewis"
		}, {
		question: "Which team played in the most consecutive Super Bowls?",
		choiceFour: "Green Bay Packers",
		choiceTwo: "New England Patriots",
		choiceThree: "Philadelphia Eagles",
		choiceAnswer: "Buffalo Bills"
		}]
};

//Create array to list correct answers to question.
var correctAnswersArray = [questionSet.questionArray[0].choiceOne, questionSet.questionArray[1].choiceFour, questionSet.questionArray[2].choiceThree, questionSet.questionArray[3].choiceTwo, questionSet.questionArray[4].choiceOne, questionSet.questionArray[5].choiceFour];
console.log (correctAnswersArray[0]);//Green Bay Packers
console.log (correctAnswersArray[1]);//Tom Brady
console.log (correctAnswersArray[2]);//San Francisco 49ers
console.log (correctAnswersArray[3]);//Minnesota Vikings
console.log (correctAnswersArray[4]);//Tony Dungy
console.log (correctAnswersArray[5]);// Buffalo Bills



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
	$("#correct-answer-div").hide();
		//Show the question div at start of game..
		$("#question-div").show().html("<h1>" + "Question: " + questionSet.questionArray[count].question + "</h1>");
		$("#question-div").show().append("<h2>" + "<button class='choice' id='correctAnswer'>" + questionSet.questionArray[count].choiceAnswer + "</button>" + "</h2>");
		$("#question-div").show().append("<h2>" + "<button class='choice wrongAnswer'>" + questionSet.questionArray[count].choiceTwo + "</button>" + "</h2>");
		$("#question-div").show().append("<h2>" + "<button class='choice wrongAnswer'>" + questionSet.questionArray[count].choiceThree + "</button>" + "</h2>");
		$("#question-div").show().append("<h2>" + "<button class='choice wrongAnswer'>" + questionSet.questionArray[count].choiceFour + "</button>" + "</h2>");

		$(".choice").addClass("btn btn-primary btn-lg btn-block p-3 m-3")
		checkAnswer();
}

function checkAnswer(){
		$(".choice").on("click", function() {
		if (this.id === "correctAnswer") {
		selectRightAnswer = true;
		//Add 1 to correctAnswersTally
		correctAnswersTally++;
		$("#question-div").hide();
		$("#correct-answer-div").show().html("<h2>" + "Correct!" + "</h2>").addClass("bg-primary text-black");
		nextQuestion();
		}
		
		else {
		selectRightAnswer = false;
		//Add 1 to incorrectAnswersTally
		incorrectAnswersTally++;
		$("#question-div").hide();
		$("#correct-answer-div").show().html("<h2>" + "Incorrect" + "</h2>").addClass("bg-primary text-black");
		nextQuestion();
		}
	});
}

function nextQuestion() {
	count++
	 //If the count is the same as the length of the correctAnswersArray, game is over.
  	if (count === correctAnswersArray.length) {
  		setTimeout(gameOver, 3000);
  	}

  	else {
	setTimeout(start, 3000);
	}
}

function gameOver (){
	$("#question-div").hide();
	$("#correct-answer-div").html("<h2>" + "You got " + correctAnswersTally + " out of 6 correct" + "</h2>").addClass("bg-primary");
	console.log(incorrectAnswersTally);
	//Append try again button
	$("#correct-answer-div").append("<button id='try-again-button'>" + "Try again?" + "</button>");
	//Add styling to start button.
	$("#try-again-button").addClass("btn btn-primary btn-lg btn-block");
	$("#try-again-button").on("click", function() {
		reset();
		$("#correct-answer-div").hide();
	});

function reset(){
	count = 0;
	correctAnswersTally = 0;
	incorrectAnswersTally = 0;
	start();
}

}




