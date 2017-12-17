//Variables

//Create a variable to hold boolean value. Did the user select the right answer (true or false)?
var selectRightAnswer = false;

//Create variables to hold number of correct answers and incorrect answers. Display numbers when game is over.
var correctAnswersTally = 0;
var incorrectAnswersTally = 0;

//Create variable to hold count that will keep track of the index of the currently displayed trivia question.
var count = 0;

//Create array to hold images. One of the following images will be shown when user answers question correctly.
//var imagesArray = ["../images/packers_logo.png", "../images/brady-tropy.jpg", "../images/49ers.jpg", "../images/vikings_logo.png", "../images/dungy.jpg", "../images/bills.png", "../images/ovetime.jpg", "../images/belichick.jpg", "../images/", "../images/" ]

//Create variable to hold all questions and answers in question set.
var questionSet = {
	questionArray: [{
		question: "Which team won the first Super Bowl (Super Bowl I)?",
		choiceAnswer: "Green Bay Packers",
		choiceTwo: "Kansas City Chiefs",
		choiceThree: "New England Patriots",
		choiceFour: "Los Angeles Rams",
		imageCorrect: "../images/packers_logo.png"
		}, {
		question: "Who was awarded Super Bowl MVP in Super Bowl LI (2017)?",
		choiceTwo: "Julio Jones",
		choiceThree: "Matt Ryan",
		choiceFour: "Dion Lewis",
		choiceAnswer: "Tom Brady",
		imageCorrect: "../images/brady-tropy.jpg"
		}, {
		question: "Which team was the first team to win five Super Bowls?",
		choiceTwo: "Pittsburgh Steelers",
		choiceThree: "Denver Broncos",
		choiceAnswer: "San Francisco 49ers",
		choiceFour: "Dallas Cowboys",
		imageCorrect: "../images/49ers.jpg"
		}, {
		question: "Which team played 4 Super Bowls, but has never led a Super Bowl for even a single second?",
		choiceTwo: "Houston Texans",
		choiceAnswer: "Minnesota Vikings",
		choiceThree: "Jacksonville Jaguars",
		choiceFour: "Chicago Bears",
		imageCorrect: "../images/vikings_logo.png"
		}, {
		question: "Who was the first African American coach to win a Super Bowl?",
		choiceAnswer: "Tony Dungy",
		choiceTwo: "Lovie Smith",
		choiceThree: "Mike Tomlin",
		choiceFour: "Marvin Lewis",
		imageCorrect: "../images/dungy.jpg"
		}, {
		question: "Which team played in the most consecutive Super Bowls?",
		choiceFour: "Green Bay Packers",
		choiceTwo: "New England Patriots",
		choiceThree: "Philadelphia Eagles",
		choiceAnswer: "Buffalo Bills",
		imageCorrect: "../images/bills.png"
		}, {
		question: "How many Super Bowls have gone into overtime?",
		choiceFour: "0",
		choiceTwo:  "2",
		choiceThree: "7",
		choiceAnswer: "1",
		imageCorrect: "../images/ovetime.jpg"
		}, {
		question: "Which coach has the most Super Bowl wins?",
		choiceFour: "Chuck Noll",
		choiceTwo: "Tom Landry",
		choiceThree: "Don Shula",
		choiceAnswer: "Bill Belichick",
		imageCorrect: "../images/belichick.jpg"
		}, {
		question: "Which player was the first to say 'I'm going to Disney World!'' after winning the Super Bowl?",
		choiceFour: "Peyton Manning",
		choiceTwo: "Tom Brady",
		choiceThree: "Ray Lewis",
		choiceAnswer: "Phil Simms",
		imageCorrect: "../images/phil-sims.jpg"
		}, {
		question: "Which team has lost the most Super Bowls?",
		choiceFour: "Seattle Seahawks",
		choiceTwo: "Minnesota Vikings",
		choiceThree: "New York Giants",
		choiceAnswer: "Denver Broncos",
		imageCorrect: "../images/broncos-lose.jpg"
		}]
};

//Start page with start button. Start button only shows up when user first comes to site or refreshes the browser.
//Start button should not appear when user clicks "Try again?" when user finishes game.
//Append start button
$("#start-div").append("<button id='start-game-button'>" + "Start" + "</button>");
//Add styling to start button.
$("#start-game-button").addClass("btn btn-primary btn-lg btn-block");
//Hide question-div at start of game
$("#question-div").hide();
//Hide correct-answer-div at start of game.
$("#corect-answer-div").hide();
//When start button is clicked, start game.
$("#start-game-button").on("click", function() {
	start();
});

//Functions
function start() {
	//Hide the div that contains the start button...
	$("#start-div").hide();
	$("#start-image").hide();
	//Hide the div that contains the correct answer...
	$("#correct-answer-div").hide();
	//Show the question-div at the start of game. Display question and choices based on the current count. Count starts at 0.
	$("#question-div").show().html("<h1>" + "Question: " + questionSet.questionArray[count].question + "</h1>");
	$("#question-div").show().append("<h2>" + "<button class='choice' id='correctAnswer'>" + questionSet.questionArray[count].choiceAnswer + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[count].choiceTwo + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[count].choiceThree + "</button>" + "</h2>");
	$("#question-div").show().append("<h2>" + "<button class='choice'>" + questionSet.questionArray[count].choiceFour + "</button>" + "</h2>");
	//Add styling to the choice buttons.
	$(".choice").addClass("btn btn-primary btn-lg btn-block p-3 m-3")
	//When user selects a choice button, check answer. Compare the option that the user selected to the correct answer.
	checkAnswer();
}

function checkAnswer(){
		//When user selects an option (clicks a choice button)...
		$(".choice").on("click", function() {
		//If the id of the button that the user clicks has an id value of correctAnswer, user got question correct.
		if (this.id === "correctAnswer") {
		//set selectRightAnswer to true.
		selectRightAnswer = true;
		//Add 1 to correctAnswersTally
		correctAnswersTally++;
		$("#question-div").hide();
		//Tell the user that his/her selection is correct.
		$("#correct-answer-div").show().html("<h2>" + "Correct!" + "</h2>").addClass("bg-primary text-black");
		$("#show-image").html("<img src=" + questionSet.questionArray[count].imageCorrect + " width='400px'>")
		//Go to the next question.
		nextQuestion();
		}
		
		else {
		//Set selectRightAnswer to false if user did not pick the right option.
		selectRightAnswer = false;
		//Add 1 to incorrectAnswersTally
		incorrectAnswersTally++;
		$("#question-div").hide();
		//Tell the user that his/her selection is incorrect.
		//Do not display correct answer.
		$("#correct-answer-div").show().html("<h2>" + "Incorrect" + "</h2>").addClass("bg-primary text-black");
		//Go to the next question.
		nextQuestion();
		}
	});
}

function nextQuestion() {
	//Increment the count by 1
	count++
	 //If the count is the same as the length of the questionSet.questionArray array, game is over.
  	if (count === questionSet.questionArray.length) {
  		$("#show-image").hide();
  		setTimeout(gameOver, 3000);
  	}

  	//else, go to the next question.
  	else {
  	$("#show-image").hide();
	setTimeout(start, 3000);
	}
}

function gameOver (){
	//Hide question-div that contains question and choices.
	$("#question-div").hide();
	//Display to the user the number of questions the user got correct out of total number of questions.
	$("#correct-answer-div").html("<h2>" + "You got " + correctAnswersTally + " out of 10 correct" + "</h2>").addClass("bg-primary");
	console.log(incorrectAnswersTally);
	//Append try again button
	$("#correct-answer-div").append("<button id='try-again-button'>" + "Try again?" + "</button>");
	//Add styling to reset button.
	$("#try-again-button").addClass("btn btn-primary btn-lg btn-block");
	//When try-again-button is clicked, reset game. Do not go to start page. User should be taken to first question in trivia game.
	$("#try-again-button").on("click", function() {
		reset();
		//Hide correct-answer-div.
		$("#correct-answer-div").hide();
	});

function reset(){
	//When game is reset (user clicks try again button), set count, correctAnswersTally, and incorrectAnswersTally back to 0 before starting game again.
	count = 0;
	correctAnswersTally = 0;
	incorrectAnswersTally = 0;
	start();
}

}




