const game = {
  win: 0,
  loss: 0,
};

const choices = ["rock", "paper", "scissors"];

var random1 = Math.floor(Math.random() * (3 - 1) + 0);
var random2 = Math.floor(Math.random() * (3 - 1) + 0);

var bot1 = choices[random1];
var bot2 = choices[random2];

var compare = function (choice1, choice2) {
  var x = choices.indexOf(choice1),
    y = choices.indexOf(choice2);
  if (x === y) {
    return "The result is a tie!";
  }

  return ((x - y) % 3 > 0 ? choice1 : choice2) + " wins";

  if (choice1 === choice2) {
    return "The result is a tie!";
  }

  if (choice1 === "rock") {
    if (choice2 === "scissors") {
      return "rock wins";
    } else {
      return "paper wins";
    }
  }

  if (choice1 === "paper") {
    if (choice2 === "rock") {
      return "paper wins";
    } else {
      return "scissors wins";
    }
  }

  if (choice1 === "paper") {
    if (choice2 === "scissors") {
      return "scissors wins";
    } else {
      return "rock wins";
    }
  }
};
var results = "";

console.log(results);
