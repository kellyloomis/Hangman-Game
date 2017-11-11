//var word array of theme//
	var condiments = ["ketchup", "mustard", "mayonnaise", "aioli", "relish"]; 
		
//var alphabet//
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//var guesses remaining - total of 10//
	var guessesRemaining = 10; 

//add loop for array//
	document.onkeyup = function(event) {

		var userGuess = event.key;

		var condiments = condiments[Math.floor(Math.random() * condiments.length)];
	}

	function condiments() {
		for (var i = 0; i < condiments.length; i++) {}
	}

	function pickRandomWord(){}

//user presses a letter key//
	document.onkeyup = function(event) {
        var keyPressed = event.key;

//if letter matches current word; add to correct location in Current Word row//
			if (keyPressed = alphabet = condiments);
				alert("Correct!");

//if letter key doesn't match current word: subtract 1 from Guesses Remaining and add to Letters Already Guessed//
			else (keyPressed = alphabet.minus.condiments);
				alert("Wrong!");

	}

//repeat above until word is correctly guessed OR until all guesses are used//

//if word correctly guessed: alert win//

//if game lost: alert of loss//

//assign a new word x times until all words are used//