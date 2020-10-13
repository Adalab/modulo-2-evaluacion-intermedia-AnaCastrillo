function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  }

const randomN = getRandomNumber(100);
console.log("El número aleatorio es " + randomN);

const text = document.querySelector(".text");
const hint = document.querySelector(".hint");
const attempt = document.querySelector(".attempt");
const btn = document.querySelector(".btn");

function tryN() {
  const textN = text.value;
  console.log("Prueba con " + textN)
  if (textN < randomN){
    hint.innerHTML = "El número es mayor que " + textN;
  } else if (textN > randomN){
    hint.innerHTML = "El número es menor que " + textN;
  }else {
    hint.innerHTML = "¡Has ganado campeona!";
  }
}

btn.addEventListener("click", tryN);