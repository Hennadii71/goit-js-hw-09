function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  buttonStart: document.querySelector('button[data-start]'),
  buttonStop: document.querySelector('button[data-stop]'),
  bodyColor: document.querySelector('body'),
};

refs.buttonStart.addEventListener('click', onChangeColorBody);
refs.buttonStop.addEventListener('click', ofChangeColorBody);

let timerId;

function onChangeColorBody() {
  refs.buttonStart.disabled = true;
  refs.buttonStop.disabled = false;
  timerId = setInterval(() => {
    refs.bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function ofChangeColorBody() {
  refs.buttonStart.disabled = false;
  refs.buttonStop.disabled = true;
  clearInterval(timerId);
}
