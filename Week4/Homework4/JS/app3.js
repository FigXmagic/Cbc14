const game = {
  win: 0,
  loss: 0,
};

const choices = ["rock", "paper", "scissors"];

var random1 = Math.round(Math.random() * 2);
var random2 = Math.round(Math.random() * 2);

var bot1 = choices[random1];
var bot2 = choices[random2];

console.log("Player 1:" + bot1);
console.log("Player 2:" + bot2);

let x = bot1;
let y = bot2;

switch (x) {
  case "paper":
    switch (y) {
      case "rock":
        console.log("Player 1 Wins!");
        break;
      case "scissors":
        console.log("Player 2 Wins!");
        break;
      case "paper":
        console.log("Draw!");
        break;
    }
}

switch (x) {
  case "rock":
    switch (y) {
      case "scissors":
        console.log("Player 1 Wins!");
        break;
      case "paper":
        console.log("Player 2 Wins!");
        break;
      case "rock":
        console.log("Draw!");
        break;
    }
}

switch (x) {
  case "scissors":
    switch (y) {
      case "paper":
        console.log("Player 1 Wins!");
        break;
      case "rock":
        console.log("Player 2 Wins!");
        break;
      case "scissors":
        console.log("Draw!");
        break;
    }
}
const x,y = {
  rock: {
    name: "Rock",
    defeats: "scissors",
  },
  paper: {
    name: "Paper",
    defeats: "rock",
  },
  scissors: {
    name: "Scissors",
    defeats: "paper",
  },
};

if (bot1 != x) console.log(bot2);
if (bot2 == y) console.log(bot2);
