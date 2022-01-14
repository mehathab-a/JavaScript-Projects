"use strict";

function random() {
  const c = Math.floor(Math.random() * 20) + 1;
  console.log(`random number:${c}`);
  return c;
}

function message(text) {
  document.querySelector(".message").textContent = text;
}

function scoreAssign(scor) {
  document.querySelector(".score").textContent = scor;
}

function highscoreAssign(highsc) {
  document.querySelector(".highscore").textContent = highsc;
}

let ch = random();
let y = document.querySelector(".guess").value;
let highscore;
let scr = 20;
const x = function () {
  scr = parseInt(document.querySelector(".score").textContent);
  y = document.querySelector(".guess").value;
  if (scr > 1 && scr <= 20) {
    highscore = document.querySelector(".highscore").textContent;
    if (y == ch) {
      scr++;
      scoreAssign(parseInt(scr));
      message("Correct Guess");
      ch = random();
      document.body.style.backgroundColor = "green";
      if (highscore <= scr) {
        highscore = scr;
        highscoreAssign(highscore);
      }
    } else {
      scr--;
      scoreAssign(parseInt(scr));
      message(y > ch ? "Too High" : "Too Low");
      document.body.style.backgroundColor = "black";
    }
    if (scr > 20) {
      message("You Won the Game");
    }
  } else if (!y) {
    message("No Number!!");
  } else if (scr <= 1) {
    message("You Lose the Game");
    scoreAssign(0);
  } else {
  }
};

const z = function () {
  scr = 20;
  highscoreAssign(0);
  document.querySelector(".guess").value = null;
  scoreAssign(20);
  ch = random();
  message("Start guessing...");
  document.body.style.backgroundColor = "black";
};

document.querySelector(".check").addEventListener("click", x);

document.querySelector(".again").addEventListener("click", z);
