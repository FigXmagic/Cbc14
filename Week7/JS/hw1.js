//2//
let wizardName = "jon Dee";

function capitalizeFirstLetter(string) {
  return string.replace(/^\w/, (c) => c.toUpperCase());
}
//3//
var firstCap = capitalizeFirstLetter(wizardName);

console.log(firstCap);
//4//
const isWizard = true;

//5//
if (true) {
  var luckRoll = 3.3;
  var roundUP = Math.round(luckRoll * Math.random(3.3));
  //6//
  console.log("Luck:" + " " + roundUP++);
}

/* function gainGrit() {
  window.event.preventDefault;
  let grit = 0;
  grit = grit + roundUP++;
  localStorage.setItem("Grit:", grit++);
}

console.log(gainGrit()); */

if (true) {
  let charType = "Wizard";
  console.log("Type:" + " " + charType);
}
if (isWizard) {
  var level = 6;
  console.log("Level:" + " " + level);
}
//7//
if (level > 3) {
  let manaPower = Math.sqrt(6);
  manaLevel = Math.ceil(manaPower + 9);
  console.log("Power:" + " " + manaLevel);
}

//8//
/* console.log(manaPower); */

//9//
/* var extraDef = isWizard;
var isWizard = 7;
console.log(isWizard); */

//10//
const attack = [];

if (isWizard == true && level == 6) {
  const attack6 = [
    {
      attack: "Fireball",
      power: 9,
    },
    {
      attack: "Wand Thrust",
      power: 3,
    },
    {
      attack: "Ice Javelin",
      power: 6,
    },
  ];
  //11//
  attack.push(attack6);
}

console.log(attack);
//12//
const spAbilities = "";
console.log(spAbilities);
//13//
const createdBy = [
  {
    name: "Jorge Figueroa",
    age: 32,
  },
];

let myName = createdBy[0].name;
const myAge = createdBy[0].age;
//14//
const myGreet = `Hello i am ${myName}`;
console.log(myGreet);

//15//
function greet() {
  const myGreeting = myGreet + `and i am ${myAge} years old`;
  console.log(myGreeting);
}

greet();

//16//
console.log(myName);
console.log(myAge);

//17//
let arrow = () => "hello World";
arrow1 = arrow;
console.log(arrow());

let arrowAccept = (str) => console.log(str);
arrow2 = str;
console.log(arrow2());
