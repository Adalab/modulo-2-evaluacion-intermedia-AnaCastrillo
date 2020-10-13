function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  }

const randomN = getRandomNumber(100);
console.log("El número aleatorio es " + randomN);

const text = document.querySelector(".text");
const hint = document.querySelector(".hint");
const attempt = document.querySelector(".attempt");
const btn = document.querySelector(".btn");