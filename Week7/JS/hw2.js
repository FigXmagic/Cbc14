class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Getter
  get pName() {
    return this.getName();
  }
  // Method
  getName() {
    return `${this.name}  ${this.age}`;
  }
}

const personInfo = new Person("fig", 12);

console.log(personInfo);

class Employee extends Person {
  constructor(name, age, id) {
    super(name, age);
    this.id = id;
  }
  static() {
    return `Web Development Solutions Incorporated` + this.show();
  }
  show() {
    return (
      this.getName() +
      "New Employee:" +
      this.name +
      "age" +
      this.age +
      "ID:" +
      this.id
    );
  }
}

const newEmployee = new Employee("jay", 10, 1);
console.log(newEmployee);
