	// 1 - WE put the entire function in a fxn called "clock"
	function clock() {
	// we declare variable "date" to equal to new Date
	var date = new Date();
	//we create new var hour/minutes/seconds
	//in order to get the respectives values of hour/minutes/seconds
	//by setting them equal by recalling the var "date"
	//and setting respectively to the predefined JS method of 
	// .getHours() / .getMinutes() / .getSeconds
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	
	if (hour < 10){
		hour = "0" + hours;
	}
	// we set if hour < 10 to display "0" + hour so
	// that hour always displays with 2 digits
	if (minutes < 10){
		minutes = "0" + minutes;
	}
	// we set if minutes < 10 to display "0" + minutes so
	// that minutes always displays time with 2 digits

	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	//THEN we want to "plug these variables into alarmclock.html
	// we do this by using the document.getElementById() 
	// and recall the specific ids that correlate to their respective variables
	document.getElementById('hrs').innerHTML = hour;
	document.getElementById('min').innerHTML = ":" + minutes;
	document.getElementById('sec').innerHTML = ":" + seconds;
}
// 2 - bc we want the time to automatically display the secs
// we do this by using the predefined JS fxn setInterval()
// which tells the comp. to display the values of our fxn clock
// the changes in times(in seconds) every 100ms = 1 second
setInterval(clock, 1000);

function alarmring(){
	var h = document.getElementById('hrs').innerHTML;
	var m = document.getElementById('min').innerHTML;
	var s = document.getElementById('sec').innerHTML;

	var hour = document.getElementById("input_hr").value;
	var minute = ":" + document.getElementById("input_mn").value;
	var second = ":" + document.getElementById("input_sc").value;

	return (h === hour && m === minute && second === s);
}


function activateAlarm () {
	var sound = new Audio("./audio/alarm.mp3");
	if (alarmring()) sound.play();

	setTimeout(activateAlarm, 1000);
}



