//1//
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Method
  getName() {
    return `${this.name}  ${this.age}`;
  }
}

let myPerson = new Person("Fig", 33)
console.log(myPerson)


//2//
class Employee extends Person {
  constructor(name, age, id) {
    super(name, age);
    this.id = id;
  }
  getCompanyName() {
    return `Web Development Solutions Incorporated` + this.show();
  }
  getEmployeeID() {
    return this.id
  }
}
let myEmployee = new Employee("Fig", 33, 11)
console.log(myEmployee.id)

//3//
class Manager extends Employee{
  constructor(name, age, id, employees){
    super(name, age, id,)
    this.employees = []
  }
  newEmployee(){
    return  this.getEmployeeID()
  }
  getEmployee(){
    return
  }
}

/* //1//
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

const personInfo = new Person("fig", 33);

console.log(personInfo);

//2//
class Employee extends Person {
  constructor(name, age, id) {
    super(name, age);
    this.id = id;
  }
  getCompanyName() {
    return `Web Development Solutions Incorporated` + this.show();
  }
  getEmployeeID() {
    return (
      this.getName() +
      "New Employee:" +
      this.name +
      "age" +
      this.age +
      "ID:" +
      this.id
    );
    console.log(this.getEmployeeID)
  }
}

const newEmployee = new Employee();
console.log(newEmployee);
 */