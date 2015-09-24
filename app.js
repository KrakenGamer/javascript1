var Score=0;

var highscore=0;

var press= function() {
	Score++;
	document.getElementById('Score').innerHTML = "Your awesome score" +Score;
	if (Score > highscore) {
		document.getElementById('highscore').innerHTML = "New Highscore" + Score;
		return;

	}
};