"use strict";

//Selecting Elements
const totalscore0el = document.getElementById("score--0"); //Total Score of Player-1
const totalscore1el = document.getElementById("score--1"); //Total Score of Player-2
const score0el = document.getElementById("current--0"); //Current Score of Player-1
const score1el = document.getElementById("current--1"); //Current Score of Player-2
const diceel = document.querySelector(".dice"); //Dice Object
const playr0 = document.querySelector(".player--0"); //Player-1 Object
const playr1 = document.querySelector(".player--1"); //Player-2 Object
const btnr = document.querySelector(".btn--roll"); //Roll button object
const btnh = document.querySelector(".btn--hold"); //Hold button object
const btnn = document.querySelector(".btn--new"); //New-Game button object
let nowPlayer;
let currentscore;
let wincond;
const totalscore = [0, 0];

// Initial values
const intial = function () {
  nowPlayer = 0;
  currentscore = 0;
  wincond = 0;
  totalscore[0] = 0;
  totalscore[1] = 0;
  totalscore0el.textContent = 0;
  totalscore1el.textContent = 0;
  diceel.classList.add("hidden");
};

//Functions for Event Handling

//adding score to currentScore function
const addCurrent = function (a) {
  currentscore = Number(currentscore) + a;
  nowPlayer == 0
    ? (score0el.textContent = currentscore)
    : (score1el.textContent = currentscore);
};

//Adding score to totalscore function
const addTotal = function () {
  nowPlayer === 0
    ? (totalscore[0] += currentscore)
    : (totalscore[1] += currentscore);
};

//checking for switch condition function
const checkSwitch = function (a) {
  if (a == 1) {
    return true;
  }
};

//Checking for Win Condition Function
const checkWin = function () {
  if (totalscore[0] > 100 || totalscore[1] > 100) {
    document
      .querySelector(`.player--${nowPlayer}`)
      .classList.add(`player--winner`);
    document
      .querySelector(`player--${nowPlayer}`)
      .classList.add(`player-winner name`);
    wincond = 1;
    diceel.classList.add("hidden");
    return true;
  } else return false;
};

//Switching player function
const switchPlayer = function () {
  if (!checkWin()) {
    currentscore = 0;
    document.getElementById(`current--${nowPlayer}`).textContent = 0;
    console.log(`current--${nowPlayer}`);
    nowPlayer === 0 ? (nowPlayer = 1) : (nowPlayer = 0);
    playr0.classList.toggle("player--active");
    playr1.classList.toggle("player--active");
  }
};

//Rolling Dice Function(Roll Button)
const roll = function () {
  if (wincond === 0 && !checkWin()) {
    const r = Math.floor(Math.random() * 6) + 1; //Generting random Number
    diceel.classList.remove("hidden");
    document.getElementById("die").src = `./dice-${r}.png`; //generating the die
    if (!checkSwitch(r)) {
      addCurrent(r);
    } else if (checkSwitch(r)) {
      switchPlayer();
    }
  }
  checkWin();
};

//Holding function(Hold Button)
const hold = function () {
  if (wincond === 0 && !checkWin()) {
    addTotal();
    nowPlayer === 0
      ? (totalscore0el.textContent = totalscore[0])
      : (totalscore1el.textContent = totalscore[1]);
    switchPlayer();
  } else {
  }
  checkWin();
};

//Newgame function(New Game Button)
const newGame = function () {
  intial();
  playr0.classList.add("player--active");
  playr1.classList.remove("player--active");
  diceel.classList.add("hidden");
  playr0.classList.remove(`player--winner`);
  playr1.classList.remove(`player--winner`);
};

//Event Listeners & Setting initial Values
intial();
btnr.addEventListener("click", roll);
btnh.addEventListener("click", hold);
btnn.addEventListener("click", newGame);
