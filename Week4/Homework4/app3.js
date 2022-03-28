let game = { win: 0, loss: 0 };
let choices = ["Rock", "Paper", "Scissors"];

function getRandomInt(max) {
  return Math.floor(Math.random() * choices.length);
}
var random1 = getRandomInt();

var random2 = getRandomInt();

var bot1 = choices[random1];
var bot2 = choices[random2];

console.log(bot1);
console.log(bot2);

if (
  (bot1 === "ROCK" && bot2 === "SCISSORS") ||
  (bot1 === "PAPER" && bot2 === "ROCK") ||
  (bot1 === "SCISSORS" && bot2 === "PAPER")
) {
  game.win = 1;
} else if (
  (bot1 === "ROCK" && bot2 === "PAPER") ||
  (bot1 === "PAPER" && bot2 === "SCISSORS") ||
  (bot1 === "SCISSORS" && bot2 === "ROCK")
) {
  game.loss = 1;
} else if (random1 === random2) {
}

var results = "";
if (game.win > 0) {
  results += bot1;
  results += " beats ";
  results += bot2;
} else if (game.loss > 0) {
  results += bot2;
  results += " beats ";
  results += bot1;
} else {
  results += " Tie Game ";
}
console.log(results);
