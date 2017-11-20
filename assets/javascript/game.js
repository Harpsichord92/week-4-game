//Global Variables
//==================================
var malVal = Math.floor(Math.random() * (12-1) + 1);
var roseVal = Math.floor(Math.random() * (12-1) + 1);
var ameVal = Math.floor(Math.random() * (12-1) + 1);
var lapVal = Math.floor(Math.random() * (12-1) + 1);

//Counters
var wins = 0;
var losses = 0;
var totalScore = 0;

//Functions
//==================================

function reset() {

	//Resets crystal values and goal number
	goal = Math.floor(Math.random() * (120-19) + 19);
	malVal = Math.floor(Math.random() * (12-1) + 1);
	roseVal = Math.floor(Math.random() * (12-1) + 1);
	ameVal = Math.floor(Math.random() * (12-1) + 1);
	lapVal = Math.floor(Math.random() * (12-1) + 1);
	totalScore = 0;

	//Resets HTML
	$('#goal').html(goal);
	$('#totalScore').html(totalScore);
	start();
}

function start() {
	//Determines crystal values and goal to reach number
	goal = Math.floor(Math.random() * (120-19) + 19);
	malVal = Math.floor(Math.random() * (12-1) + 1);
	roseVal = Math.floor(Math.random() * (12-1) + 1);
	ameVal = Math.floor(Math.random() * (12-1) + 1);
	lapVal = Math.floor(Math.random() * (12-1) + 1);
	totalScore = 0;

	//HTML
	$('#goal').html(goal);
	$('#totalScore').html(totalScore);

	//Gives crystals their values

		//Malachite Value
		$('#malachite').attr("value", malVal);

			//Test
			console.log('Malachite:'+ malVal);

		//Rose-Quartz Value
		$('#rose').attr("value", roseVal);

			//Test
			console.log('Rose-Quartz:'+ roseVal);

		//Amethyst Value
		$('#amethyst').attr("value", ameVal);

			//Test
			console.log('Amethyst:'+ ameVal);

		//Lapis Lazuli Value
		$('#lapis').attr("value", lapVal);

			//Test
			console.log('Lapis:'+ lapVal);

	//Click function
	$('.gemstones').off().on('click', function() {
		var gemScore = $(this).attr('value');
		totalScore = parseInt(totalScore) + parseInt(gemScore);
		$('#totalScore').html(totalScore);

		//Test
		console.log('Crystal Value: ' + gemScore);
		console.log('Final Score: ' + totalScore);



		//Player wins
		if (totalScore === goal){
			alert('You win!');
			wins++;
			$('#wins').html(wins);
			reset();
		}

		//Player Loses
		else if (totalScore > goal) {
			alert('You Lose!');
			losses++;
			$('#losses').html(losses);
			reset();
		}
	})
}

//Game
//============================================
start();