'use strict'

function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}

const randomN = getRandomNumber(100);
console.log("El número aleatorio es " + randomN);

const text = document.querySelector(".text");
const hint = document.querySelector(".hint");
const attempt = document.querySelector(".attempt");
let attemptN = parseInt(attempt.innerHTML);
const btn = document.querySelector(".btn");

function tryN() {
	const textN = parseInt(text.value);
	console.log("Prueba con " + textN);
	if (textN <= 100 && textN >= 1) {
		if (textN < randomN) {
			hint.innerHTML = "Demasiado bajo";
		} else if (textN > randomN) {
			hint.innerHTML = "Demasiado alto";
		} else {
			hint.innerHTML = "¡Has ganado campeona!";
		}
	} else {
		hint.innerHTML = "El número debe estar comprendido entre 1 y 100";
	}
	attempt.innerHTML = ++attemptN;
}

btn.addEventListener("click", tryN);

const form = document.querySelector(".js-form");

function handleForm(ev) {
	ev.preventDefault();
}

form.addEventListener("submit", handleForm);
