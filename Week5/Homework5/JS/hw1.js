// define an element
const food = [
  "okra",
  "carrots",
  "kale",
  "spinach",
  "onion",
  "apples",
  "bananas",
  "grapes",
  "oranges",
];
console.log(food);
// remove one element
food.pop();
console.log(food);
// add an element
food.push("strawberries");
console.log(food);
food.shift();
console.log(food);
//add element to the front of page
food.unshift("broccoli");
console.log(food);

// define veggies and fruits

let veggies = food.slice(0, 5);
console.log(veggies);

let fruit = food.slice(5);
console.log(fruit);

food.splice(4, 1);
console.log(food);

food.splice(2, 2, "brussels sprouts");
console.log(food);

var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";
console.log([text[5]]);
const last = text[text.length - 1];
console.log([last]);

let lastItem = text.slice(-1);
console.log(lastItem);
var lorem = text.slice(0, 5);
console.log(lorem);
var chores1 = "clean, pay bills, groceries";
var chores2 = "learn JS, doctors office, pick up kids";
var allChores = chores1.split(chores2);
console.log(allChores);
