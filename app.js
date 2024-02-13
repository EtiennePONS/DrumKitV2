const buttonClap = document.getElementById("padClap");
const buttonCrash = document.getElementById("padCrash");
const buttonOpenHH = document.getElementById("padOpenHH");
const buttonKick = document.getElementById("padKick");
const buttonSnare = document.getElementById("padSnare");
const buttonCloseHH = document.getElementById("padCloseHH");

const audioClap = new Audio("drums/clap.wav");
const audioCrash = new Audio("drums/crash.wav");
const audioOpenHH = new Audio("drums/open-hihat.wav");
const audioKick = new Audio("drums/kick.wav");
const audioSnare = new Audio("drums/snare.wav");
const audioCloseHH = new Audio("drums/closed-hihat.wav");

buttonClap.addEventListener("click", playClap);
buttonCrash.addEventListener("click", playCrash);
buttonOpenHH.addEventListener("click", playOpenHH);
buttonKick.addEventListener("click", playKick);
buttonSnare.addEventListener("click", playSnare);
buttonCloseHH.addEventListener("click", playCloseHH);
buttonClap.addEventListener("touchstart", playClap);
buttonCrash.addEventListener("touchstart", playCrash);
buttonOpenHH.addEventListener("touchstart", playOpenHH);
buttonKick.addEventListener("touchstart", playKick);
buttonSnare.addEventListener("touchstart", playSnare);
buttonCloseHH.addEventListener("touchstart", playCloseHH);

function playClap(event) {
  event.preventDefault();
  audioClap.play();
}
function playCrash(event) {
  event.preventDefault();
  audioCrash.play();
}
function playOpenHH(event) {
  event.preventDefault();
  audioOpenHH.play();
}
function playKick(event) {
  event.preventDefault();
  audioKick.play();
}
function playSnare(event) {
  event.preventDefault();
  audioSnare.play();
}
function playCloseHH(event) {
  event.preventDefault();
  audioCloseHH.play();
}

function setViewportHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setViewportHeight();
window.addEventListener("resize", () => {
  setTimeout(setViewportHeight, 100);
});
