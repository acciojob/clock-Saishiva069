//your JS code here. If required.
let timerDisplay = document.getElementById("timer");

let currentDate = new Date();

setInterval(
	function () {
	let	currentDate = new Date();

		timerDispaly.innerHTML = currentDate.toLocalString();
		
	},1000
)