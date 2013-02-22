// alert("JavaScript works!");

/*  LaToya Morgan
	Feb 21, 2013
	Project 3
	Shaman aiding allies in an epic battle
*/

// Global Variables
	var enemyName = "\"Drackensore\""
	var enemyCount = 25;
	var powerStrain = true;


	
// JSON Data
var character = {
	
	"cName": "Faelini",
	"cWeapons": "mace and shield",
	"cClass": "shaman"
	
};

console.log("I am a " + character.cClass +" named " +character.cName+ " about to fight my most epic battle: aiding my allies in the fight against " + enemyCount + " enemies led by the evil " +enemyName+ ".");

console.log("I've brought along my " +character.cWeapons+ " to ensure success.")



// Object with Accessor and Mutator

var spells = {

	task: "healing",
	spell1: "Rush of Water",
	spell2: "Chain of Waves",

	rotation: function() {
		
	console.log("When my allies need " +this.task+ ", I know that I can count on my " +this.spell1+ " and " +this.spell2+ " spells to get the job done!");
	
},
	setSpell: function(newSpell) {
		spells.spell1 = newSpell
		
		}		
	
};

spells.rotation();

spells.setSpell("Volcanic Shield");

console.log("I may also consider using my " +spells.spell1+ " for my own protection.");



// Procedure

function storyContinue () {

	var battleCommence = "We're right in front of our enemy " +enemyName+ "; the battle we've been waiting for is about to begin!"

	console.log("" +battleCommence); 

}

storyContinue ();



// Conditionals

console.log("" +enemyName+ " has just made a powerful attack against us all!");

if (powerStrain === true) {
	if (enemyCount <= 10) {
		enemyCount = enemyCount + 15;
		console.log ("With a sudden invasion of more enemies, bringing the total to " +enemyCount+ ", I have come to the conclusion that a sacrifice must be made, and that we must retreat before all is lost.")
		
	} else {
		console.log ("We will win this battle!")
	}
	
} else {
	if (powerStrain === false) {
		if (enemyCount <= 25) {
			enemyCount = 1;
			console.log ("We have successfully defeated our foe's accomplices, leaving only " +enemyCount+ ", the infamous " + enemyName + ".")
		}
	} else {
		console.log ("We may want to call for reinforcements.")
	}

}



// Number Function

console.log("" +enemyName+ " has called upon " +enemyCount+ " more creatures to fight at his side.");

function allyFight () {

	var enemyMinus = 24;
	while (enemyMinus > 0) {
		console.log("We have defeated an enemy! " +enemyMinus+ " to go!");
		enemyMinus--;
	}

}

allyFight ();



// Array Function

	function alliesHurt ()

	{	var allyNames = ["Aline","Rayne","Poppy","Zeke"],
			healTime = 5;

		for (var i=0; i < allyNames.length; i++) {
			console.log("I have " +healTime+ " seconds to heal " +allyNames[i]+ "!");

	}

}

alliesHurt ();

console.log("We have defeated all of " +enemyName+ "'s allies!")



// String Function

function homeStretch () {
	
	var defeatEnemy = "We exhaust all of our strengths until " +enemyName+ " is defeated."

	return console.log("" +defeatEnemy+ "");
}

homeStretch ();



// Boolean Function

	function battleOver () {

	var	battleWon = true;
		deadEnemy = "eliminated"

	return console.log("It is " +battleWon+ " that we have won the battle and our foe has been " +deadEnemy+ ".");

}

battleOver ();