//Variables

//Create a variable to hold boolean value. Did the user select the right answer (true or false)?
var selectRightAnswer = false;

//Create variables to hold number of correct answers and incorrect answers. Display numbers when game is over.
var correctAnswersTally = 0;
var incorrectAnswersTally = 0;

//Create variable to hold count that will keep track of the index of the currently displayed trivia question.
var count = 0;

//Create variable to hold the time to answer a question.
var Timer = 7;
var intervalId;

//Create variable to hold all questions and answers in question set.
var questionSet = {
	questionArray: [{
		question: "Which team won the first Super Bowl (Super Bowl I)?",
		choiceAnswer: "Green Bay Packers",
		choiceTwo: "Kansas City Chiefs",
		choiceThree: "New England Patriots",
		choiceFour: "Los Angeles Rams",
		imageCorrect: "assets/images/packers_logo.png"
		}, {
		question: "Who was awarded Super Bowl MVP in Super Bowl LI (2017)?",
		choiceTwo: "Julio Jones",
		choiceThree: "Matt Ryan",
		choiceFour: "Dion Lewis",
		choiceAnswer: "Tom Brady",
		imageCorrect: "assets/images/brady-trophy.jpg"
		}, {
		question: "Which team was the first team to win five Super Bowls?",
		choiceTwo: "Pittsburgh Steelers",
		choiceThree: "Denver Broncos",
		choiceAnswer: "San Francisco 49ers",
		choiceFour: "Dallas Cowboys",
		imageCorrect: "assets/images/49ers.jpg"
		}, {
		question: "Which team played 4 Super Bowls, but has never led a Super Bowl for even a single second?",
		choiceTwo: "Houston Texans",
		choiceAnswer: "Minnesota Vikings",
		choiceThree: "Jacksonville Jaguars",
		choiceFour: "Chicago Bears",
		imageCorrect: "assets/images/vikings_logo.png"
		}, {
		question: "Who was the first African American coach to win a Super Bowl?",
		choiceAnswer: "Tony Dungy",
		choiceTwo: "Lovie Smith",
		choiceThree: "Mike Tomlin",
		choiceFour: "Marvin Lewis",
		imageCorrect: "assets/images/dungy.jpg"
		}, {
		question: "Which team played in the most consecutive Super Bowls?",
		choiceFour: "Green Bay Packers",
		choiceTwo: "New England Patriots",
		choiceThree: "Philadelphia Eagles",
		choiceAnswer: "Buffalo Bills",
		imageCorrect: "assets/images/bills.png"
		}, {
		question: "How many Super Bowls have gone into overtime?",
		choiceFour: "0",
		choiceTwo:  "2",
		choiceThree: "7",
		choiceAnswer: "1",
		imageCorrect: "assets/images/overtime.jpg"
		}, {
		question: "Which coach has the most Super Bowl wins?",
		choiceFour: "Chuck Noll",
		choiceTwo: "Tom Landry",
		choiceThree: "Don Shula",
		choiceAnswer: "Bill Belichick",
		imageCorrect: "assets/images/belichick.jpg"
		}, {
		question: "Which player was the first to say 'I'm going to Disney World!'' after winning the Super Bowl?",
		choiceFour: "Peyton Manning",
		choiceTwo: "Tom Brady",
		choiceThree: "Ray Lewis",
		choiceAnswer: "Phil Simms",
		imageCorrect: "assets/images/phil-sims.jpg"
		}, {
		question: "Which team has lost the most Super Bowls?",
		choiceFour: "Seattle Seahawks",
		choiceTwo: "Minnesota Vikings",
		choiceThree: "New York Giants",
		choiceAnswer: "Denver Broncos",
		imageCorrect: "assets/images/broncos-lose.jpg"
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
	//Start timer
	runTimer();
	//Hide the div that contains the start button...
	$("#start-div").hide();
	//Hide the div that contains the start image...
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
	$(".choice").addClass("btn btn-primary btn-lg btn-block p-3 mb-3")
	//When user selects a choice button, check answer. Compare the option that the user selected to the correct answer.
	checkAnswer();
}

 function runTimer() {
 	//Set timer to decrement every 1 second...
 		$("#time-up").hide();
    	intervalId = setInterval(decrement, 1000);
    }

function decrement() {
	  //decrement timer by 1.
      Timer--;
      //Tell the user how much time is remaining to answer the current question.
      $("#timer-div").show().html("<h2>" + "Time remaining: " + Timer + "</h2>");
      //If timer reaches 0, stop timer, and tell the user that time's up.
      if (Timer === 0) {
        stop();
        $("#timer-div").hide();
        $("#time-up").show().html("<h2>" + "Time's up!" + "</h2>");
        //When timer reaches 0, hide the question and choices so that the user can't select anything when time's up.
        $("#question-div").hide();
        //Go to next question after 3 seconds.
        nextQuestion();
      }
}

function stop() {
	clearInterval(intervalId);
}

function checkAnswer(){
		//When user selects an option (clicks a choice button)...
		$(".choice").on("click", function() {
		//Hider timer
		stop();
		$("#timer-div").hide();
		$("#time-up").hide();
		//If the id of the button that the user clicks has an id value of correctAnswer, user got question correct.
		if (this.id === "correctAnswer") {
		//set selectRightAnswer to true.
		selectRightAnswer = true;
		//Add 1 to correctAnswersTally
		correctAnswersTally++;
		$("#question-div").hide();
		//Tell the user that his/her selection is correct.
		$("#correct-answer-div").show().html("<h2>" + "Correct!" + "</h2>").addClass("text-center").append("<img src=" + questionSet.questionArray[count].imageCorrect + " width='400px'>");
		//Go to the next question.
		nextQuestion();
		}
		
		else {
		//Set selectRightAnswer to false if user did not pick the right option.
		selectRightAnswer = false;
		//Add 1 to incorrectAnswersTally
		incorrectAnswersTally++;
		$("#question-div").hide();
		//Tell the user that his/her selection is incorrect and display wrong-answer.png image.
		//Do not display correct answer here. I don't want them to know the answer if they choose to try the game later.
		$("#correct-answer-div").show().html("<h2>" + "Incorrect" + "</h2>").addClass("text-center").append("<img src=" + "assets/images/wrong-answer.png" + " width='400px'>");
		//Go to the next question.
		nextQuestion();
		}
	});
}

function nextQuestion() {
	//Increment the count by 1
	count++
	//reset Timer
	Timer = 7;
	 //If the count is the same as the length of the questionSet.questionArray array, wait 3 seconds and then go to game over screen to see score..
  	if (count === questionSet.questionArray.length) {
  		setTimeout(gameOver, 3000);
  	}

  	//else, if there are still questions left, wait three seconds and go to the next question.
  	else {
	setTimeout(start, 3000);
	}
}

function gameOver (){
	$("#time-up").hide();
	//Hide question-div that contains question and choices.
	$("#question-div").hide();
	//Display to the user the number of questions the user got correct out of total number of questions.
	$("#correct-answer-div").show().html("<h2>" + "You got " + correctAnswersTally + " out of 10 correct." + "</h2>");
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
}

function reset(){
	//When game is reset (user clicks try again button), set count, correctAnswersTally, and incorrectAnswersTally back to 0 before starting game again.
	count = 0;
	correctAnswersTally = 0;
	incorrectAnswersTally = 0;
	start();
}






