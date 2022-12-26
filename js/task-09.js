function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
const changeEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
const color = getRandomHexColor();

changeEl.addEventListener('click', handleClick);

function handleClick () {
colorEl.textContent = color;
bodyEl.style.backgroundColor = color;
}
