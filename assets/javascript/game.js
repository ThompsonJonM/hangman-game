window.onload = function() {

	//letters in the alphabet that can be chosen
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
	'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	//array of topics
	var categories;

	//selected category
	var chosenCategory;

	//word getHint
	var getHint ;

	//selected word
	var word ;

	//guess
	var guess ;

	//stored guesses
	var guesses = [ ];

	//number of lives
	var lives ;

	//counter for correct guesses
	var counter ;

	//number of spaces within word '-'
	var space;

	var showLives = document.getElementById("myLives");
	var showCategory = document.getElementById("scategory");
	var getHint = document.getElementById("hint");
	var showClue = document.getElementById("clue");

	//category select between four different titles
	//chosen at random for each game
	var selectCat = function () {
		if (chosenCategory === categories[0]) {
			categoryName.innerHTML = "The Chosen Category is: Halo";
		} else if (chosenCategory === categories[1]) {
			categoryName.innerHTML = "The Chosen Category is: Banjo-Kazooie";
		} else if (chosenCategory === categories[2]) {
			categoryName.innerHTML = "The Chosen Category is: World of Warcraft";
		} else if (chosenCategory === categories[3]) {
			categoryName.innerHTML = "The Chosen Category is: Golden Sun";
		}
	}

	//Guesses
	result = function () {
		wordHolder = document.getElementById('hold');
		correct = document.createElement('ul');

		//for loop
		for (var i = 0; i < word.length; i++) {
			correct.setAttribute('id', 'my-word');
			guess = document.createElement('li');
			guess.setAttribute('class', 'guess');

			if (word[i] === "-") {
				guess.innerHTML = "-";
				space = 1;
			} else {
				guess.innerHTML = "_";
			}

			guesses.push(guess);
			wordHolder.appendChild(correct);
			correct.appendChild(guess);
		}
	};

	//lives display
	comments = function () {
		showLives.innerHTML = "You have " + lives + " lives";
		
		if (lives < 1) {
			showLives.innerHTML - "GAME OVER";
		}

		//for loop
		for (var i = 0; i < guesses.length; i++) {

			if (counter + space === guesses.length) {
				showLives.innerHTML = "YOU WIN!";
			}
		}
	};

	//key up functionality


	//play and categories object
	play = function () {
		categories = [
			["master-chief", "covenant", "reach", "the-flood"],
			["jiggy", "mumbo-jumbo", "mad-monster-mansion", "grunty"],
			["thunderfury", "burning-crusade", "arthas", "legion"],
			["djinn", "adept", "doom-dragon", "lighthouse"]
		];

		chosenCategory = categories[Math.floor(Math.random() * categories.length)];
		word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
		word = word.replace(/\s/g, "-");
		console.log(word);
		// buttons();

		guesses = [ ];
		lives = 10;
		counter = 0;
		space = 0;
		result();
		comments();
		selectCat();
		// canvas();
	};

	play();

	//hints object
	hint.onclick = function() {

		hints = [
			["Main protagonist", "Aliens collective", "Planet glassed by aliens", "Invasive species contained by Halo"],
			["Collectible creatures", "Witch Doctor", "It's always Halloween here", "Main antagonist"],
			["The Windseeker", "Second expansion", "Antagonist of Wrath of the Lich King", "Demon antagonists"],
			["Collectible 'genies'", "Attuned to an element", "Main antagonist", "Ivan and Felix must light these"]
		];

		var categoryIndex = categories.indexOf(chosenCategory);
		var hintIndex = chosenCategory.indexOf(word);
		showClue.innerHTML = "Clue: - " + hints [categoryIndex][hintIndex];
	};

	//reset
	document.getElementById('reset').onclick = function() {
		correct.parentNode.removeChild(correct);
		letters.parentNode.removeChild(letters);
		showClue.innerHTML = "";
		context.clearRect(0, 0, 400, 400);
		play();
	}
}
