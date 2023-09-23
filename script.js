const input = document.querySelector("input");
const button = document.querySelector("button");
const space = document.createElement("span");
const body = document.querySelector("body");
const wordWrapper = document.querySelector(".word-wrapper");
const img = document.querySelector("img");
const lose = document.querySelector("h2");

const words = ["masina", "casa", "copac", "semafor"];
const imagesPath = [
  "./images/img2.jpg",
  "./images/img3.jpg",
  "./images/img4.jpg",
  "./images/img5.jpg",
  "./images/img6.jpg",
];

let imagesPosition = 0;
let correctAnswer = 0;
let currentWord = words[Math.floor(Math.random() * 4)];

const letters = currentWord.split("");

for (let i = 0; i < currentWord.length; i++) {
  const span = document.createElement("span");
  wordWrapper.appendChild(span);
}

button.addEventListener("click", () => {
  let find = 0;
  const wordLetters = document.querySelectorAll("span");

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === input.value) {
      wordLetters[i].innerHTML = input.value;
      correctAnswer++;
    } else {
      find++;
    }
  }

  if (correctAnswer === letters.length) {
    button.style.visibility = "hidden";
    input.style.visibility = "hidden";
    wordWrapper.style.visibility = "hidden";
    lose.style.visibility = "visible";
    lose.innerText = "You win";
    lose.style.backgroundColor = "greenyellow";
  }
  if (find === letters.length) {
    img.src = imagesPath[imagesPosition];
    imagesPosition++;
  }
  if (imagesPosition === 5) {
    button.style.visibility = "hidden";
    input.style.visibility = "hidden";
    wordWrapper.style.visibility = "hidden";
    lose.style.visibility = "visible";
  }

  input.value = "";
});
