var player_choice = prompt("Please select: rock, paper, or scissors (pick one dummy)");
var player_ai = Math.random();

console.log(player_ai);
// if it's less than then its Rock
	if(player_ai<=0.33){
		player_ai = "rock";
// N
	} else if(0.34<=player_ai<=0.66){
		player_ai = "paper";

	} else {
		player_ai = "scissors";
	}

var compare = function(option1,option2){
	if(option1===option2){
		return "Its a tie!";
	}

	else if (option1==="rock"){

		if(option2==="scissors"){
			return "Rock beats scissors"
		
		else{
			return "paper wraps rock!"
		}
	
}
