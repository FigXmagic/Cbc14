//1//
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Method
  getName() {
    return this.name + this.age;
  }
}


//2//
class Employee extends Person {
  constructor(name, age, id) {
    super(name, age);
    id = 0
    this.id = id;
  }
  getCompanyName() {
    return `Web Development Solutions Incorporated` + this.getEmployeeID();
  }
  getEmployeeID() {
    return `${this.id}`
  }
}

//3//
class Manager extends Employee{
  constructor(name, age, id, employees){
    super(name, age, id,)
    employees = []
  }
  newEmployee(){
    return  employees.push(getEmployee())
  }
  getEmployees(){
    return `${this.name} + ${this.age} + ${this.id}`
  }
}


//4//
class Clerk extends Employee{
  constructor(name, age, id, employees, supervisorId){
    super(name, age, id)
    this.supervisorId = supervisorId
  }
  getSupervisor(){
    return this.supervisorId
  }
}


//5//
let currentId = 0;

//6//
let boss = new Manager("Fig", 33, currentId++, [])
console.log(boss.name)
//7//
let clerk1 = new Clerk("Alice", 44, currentId++, boss.getEmployeeID)
console.log(clerk1.name)
//8//
let clerk2 = new Clerk("Bob", 64, currentId++, boss.getEmployeeID)
console.log(clerk2.name)

//9//
boss.getEmployees(clerk1)
console.log(boss.employees)
//10//


//11//
console.log(boss.id)
console.log(clerk2.getSupervisor())

//12//
console.log(getEmployees())


//5//

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