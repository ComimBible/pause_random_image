let box = document.querySelector(".container");
let RandomImage = document.querySelector(".container img");

let nowSrc;
let i = 0;
let toggle = true;

function change() {
  if (i < 10) {
    i++;
    RandomImage.src = `images/cat${i}.jpeg`;
    console.log(i);
  } else if ((i = 10)) {
    i = 0;
  }
  nowSrc = RandomImage.src;
  // console.log(i, nowSrc)
}

let pauseTiming = setInterval(change, 100);

function pause() {
  clearInterval(pauseTiming);
  RandomImage.src = nowSrc;
  toggle = false;
}

function replay() {
  pauseTiming = setInterval(change, 100);
  toggle = true;
}

box.addEventListener("mouseup", replay);
box.addEventListener("mousedown", pause);
