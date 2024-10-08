
const colorSpan = document.querySelector(".color");
const change = document.querySelector(".change-color");

change.addEventListener("click",() => {
const randomcolor= getRandomHexColor();
document.body.style.backgroundColor = randomcolor;
colorSpan.textContent = ` ${randomcolor}`;
} );  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

