var gamebutton = function(){
	document.getElementById('button').innerHTML = '<input onclick="press()" type="image" id="button" src="Untitled.png">'
} 


var Score=0;

var highscore=19;

var press = function() {
	Score++;
	document.getElementById('Score').innerHTML = "Your awesome score: " + Score;
	if (Score === 21){
		alert("Press the button as much as you can. If you don't then coolernow will come after you.");
		setInterval(gameover, 5000);
		script>

    
	}
	else if (Score > highscore) {
		document.getElementById('highscore').innerHTML = "New Highscore " + Score;
		return;
	}
};

function gameover() {
	document.getElementById('button').innerHTML = '';
}