class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get pName() {
    return this.getName();
  }

  getName() {
    return `${this.name}  ${this.age}`;
  }
}

class Employee extends Person {
  constructor(name, age, id) {
    super(name, age);
    this.id = id;
  }
  static() {
    return `Web Development Solutions Incorporated`;
  }
  show() {
    return this.getName() + this.id;
  }
}

const personInfo = new Person("fig", 12);
const newEmployee = new Employee("Fig", 31, 25);
console.log(newEmployee);
console.log(personInfo);

function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}
function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
myCalculator(5, 5, myDisplayer);
