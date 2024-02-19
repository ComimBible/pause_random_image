let box = document.querySelector("body");
let RandomImage = document.querySelector(".container img");

let nowSrc;
let i = 0;
let toggle = true;

box.addEventListener("mouseup", replay);
// box.addEventListener("touchstart", replay);
box.addEventListener("mousedown", pause);
// box.addEventListener("touchend", pause);

function change() {
  if (i < 11) {
    i++;
    RandomImage.src = `./images/cat${i}.jpg`;
  } else if (i >= 11) {
    i = 1;
    RandomImage.src = `./images/cat${i}.jpg`;
  }
  nowSrc = RandomImage.src;
  console.log(i);
}

let pauseTiming = setInterval(change, 80);

function pause() {
  clearInterval(pauseTiming);
  RandomImage.src = nowSrc;
  toggle = false;
}

function replay() {
  pauseTiming = setInterval(change, 80);
  toggle = true;
}

console.log(box);
