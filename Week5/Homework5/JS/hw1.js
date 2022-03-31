//Jorge Figueroa//
//6:40 PM UTC March 31st 2022//

//Start//Food//

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

food.unshift("broccoli");
console.log(food);

//Fruits and Veggie//

let veggies = food.slice(0, 5);
console.log(veggies);

let fruit = food.slice(5);
console.log(fruit);

food.splice(4, 1);
console.log(food);

food.splice(2, 2, "brussels sprouts");
console.log(food);

//Lorem Text//

var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";
console.log([text[5]]);

console.log([text[text.length - 1]]);

var lorem = text.slice(0, 5);

console.log([lorem]);

//Chores//

var chores1 = "clean, pay bills, groceries";
var chores2 = "learn JS, doctors office, pick up kids";

var allChores = chores1.split(chores2);

var x = allChores.concat(chores2);

console.log(x);
