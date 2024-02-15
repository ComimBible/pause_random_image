let box = document.querySelector(".container");
let RandomImage = document.querySelector(".container");

let nowSrc;
let i = 0;
let toggle = true;

function change() {
  if (i < 10) {
    i++;
    RandomImage.style.backgroundImage = `url(./images/cat${i}.jpeg)`;
    // console.log(i);
  } else if (i >= 10) {
    i = 1;
    RandomImage.style.backgroundImage = `url(./images/cat${i}.jpeg)`;
  }
  nowSrc = RandomImage.style.backgroundImage;
}

let pauseTiming = setInterval(change, 100);

function pause() {
  clearInterval(pauseTiming);
  RandomImage.style.backgroundImage = nowSrc;
  toggle = false;
}

function replay() {
  pauseTiming = setInterval(change, 100);
  toggle = true;
}

box.addEventListener("mouseup", replay);
box.addEventListener("mousedown", pause);
