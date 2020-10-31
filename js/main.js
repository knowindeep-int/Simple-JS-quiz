var myQuestions = [
  {
    question: "The square root of 9 is",
    answers: {
      a: '2',
      b: '3',
      c: '1'
    },
    correctAnswer: 'b'
  },
  {
    question: "The value of x for x+5 = 10 is",
    answers: {
      a: '3',
      b: '10',
      c: '5'
    },
    correctAnswer: 'c'
  },
  {
  	question: "Is 2 greater than 3?",
  	answers: {
  		a: 'Yes',
  		b: 'No',
  		c: "Don't know"
  	},
  	correctAnswer: 'b'
  }
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

function showQuestions(questions, quizContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}

function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = 'Score : ' + numCorrect + ' out of ' + questions.length;
}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

window.onload = function() {
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
}
