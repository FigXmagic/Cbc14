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
food.pop();
console.log(food);
food.push("strawberries");
console.log(food);
food.shift();
console.log(food);
food.unshift(broccoli);
console.log(food);
let veggies = food.slice(0, 6);
console.log(veggies);
let fruit = food.slice(6);
console.log(fruit);
const food = veggies.concat(fruit);
console.log(food);
food.slice(5, 1);
console.log(food);
var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";
console.log(text[5]);
console.log(text[-1]);
let lastItem = text.slice(-1);
console.log(lastItem);
var lorem = text.slice(0, 5);
console.log(lorem);
var chores;
