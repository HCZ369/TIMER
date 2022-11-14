let inputs, clock, alarm, hours, minutes, seconds, repeater; /* declaracion de las variables */
window.addEventListener("load", () => {
	inputs = Array.from(document.getElementsByClassName("number")); /* busco los inputs */
	clock = document.querySelector(".clock"); /* busco el reloj */
	alarm = new Audio("/media/alarm.mp3"); /* Genero la alarma */
});

/* funcion principal */
function startTimer() {
	parseTime(); /* busca y transforma los valores de los inputs a numeros */
	setTimer(); /* setea eñ timer */
	countdown(); /* arranca el contador */
}

function parseTime() {
	hours = Number(inputs[0].value);
	minutes = Number(inputs[1].value);
	seconds = Number(inputs[2].value);
}

/* funcion que modifica el timer de la pestaña y de la pantalla */
function setTimer() {
	/* modificaciones de la pantalla */
	clock.innerHTML = `
	<p class="number">${hours > 9 ? hours : "0" + hours}</p><span>hs</span>
	<p class="number">${minutes > 9 ? minutes : "0" + minutes}</p><span>min</span>
	<p class="number">${seconds > 9 ? seconds : "0" + seconds}</p><span>s</span>`;

	/* modificaciones en la pestaña */
	document.title = `${hours > 9 ? hours : "0" + hours}
	${minutes > 9 ? minutes : "0" + minutes}
	${seconds > 9 ? seconds : "0" + seconds}`;
}
function countdown() {
	repeater = setInterval(runner, 1000); /* llama a la funcion runner cada un segundo */
}
function runner() {
	if (seconds > 0) {
		seconds--;
	} else {
		if (minutes > 0) {
			seconds = 59;
			minutes--;
		} else {
			if (hours > 0) {
				seconds = 59;
				minutes = 59;
				hours--;
			} else {
				alarm.play();
			}
		}
	}
	setTimer();
}
function stopTimer() {
	clearInterval(repeater);
	location.reload();
}
