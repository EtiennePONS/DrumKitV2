let playClap = document.getElementsByClassName(".padClap");
let playCrash = document.getElementById(".playCrash");
let playOpenHH = document.getElementById(".playOpenHH");
let playKick = document.getElementById(".playKick");
let playSnare = document.getElementById(".playSnare");
let playCloseHH = document.getElementById(".playCloseHH");

function playMusic() {
  let audioClap = new Audio("drums/clap.wav");
  audioClap.play();
}
playClap.addEventListener("click", playMusic);
