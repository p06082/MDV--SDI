// alert("JavaScript works!");

/*  LaToya Morgan
	Feb 6, 2013
	Project 3
	Shaman aiding allies in an epic battle
*/

// Global Variables
	var myClass = "shaman"
	var enemyName = "\"Drackensore\""
	var taskName = "healing"
	var weapon1 = "staff"
	var weapon2 = "mace and shield"
	var enemyCount = 10;
	var powerStrain = true;
	


// Conditionals

console.log("" +enemyName+ " has just made a powerful attack against us all!");

if (powerStrain === true) {
	if (enemyCount <= 10) {
		enemyCount = enemyCount + 15;
		console.log ("With a sudden invasion of more enemies, bringing the total to " + enemyCount + ", I have come to the conclusion that a sacrifice must be made, and that we must retreat before all is lost.")
		
	} else {
		console.log ("We will win this battle!")
	}
	
} else {
	if (powerStrain === false) {
		if (enemyCount <= 10) {
			enemyCount = 1;
			console.log ("We have successfully defeated our foe's accomplices, leaving only " + enemyCount + ", the infamous " + enemyName + ".")
		}
	} else {
		console.log ("We may want to call for reinforcements.")
	}

}



// Array Function

	function alliesHurt ()

	{	var allyNames = ["Aline","Rayne","Poppy","Zeke"],
			healTime = 5;

		for (var i=0; i < allyNames.length; i++) {
			console.log("I have " +healTime+ " seconds to heal " +allyNames[i]+ "!");

	}

}

alliesHurt();