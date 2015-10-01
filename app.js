var Score=0;

var highscore=0;

var press= function() {
	Score++;
	document.getElementById('Score').innerHTML = "Your awesome score" +Score;
	if (Score === 19){
	alert("Press the button as much as you can. If you don't then coolernow will come after you.")
	timerbutton();
	setTimeout(removeButton, 5000);
}
	if (Score > highscore) {
		document.getElementById('highscore').innerHTML = "New Highscore" + Score;
		return;
		setInterval(Timer2, 1000);
	}


};




function Timer2() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}