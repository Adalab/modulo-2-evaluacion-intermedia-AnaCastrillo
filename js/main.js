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
  if (textN < 100 && textN > 1){
    if (textN < randomN){
      hint.innerHTML = "El número es mayor que " + textN;
    } else if (textN > randomN){
      hint.innerHTML = "El número es menor que " + textN;
    }else {
      hint.innerHTML = "¡Has ganado campeona!";
    }
  }else {
    hint.innerHTML = "El número ebe estar comprendido entre 1 y 100";
  }
}

btn.addEventListener("click", tryN);