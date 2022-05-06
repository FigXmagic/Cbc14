function addNums(...nums){
    let res= nums.reduce((num1, num2) => num1 + num2)
    return res
}
console.log(addNums(1,2))
console.log(addNums(30,60,90))

let x = 10
let y = 20
let z = 30
let abc = "hello world"
let one23 = addNums(x,y,z)
let three21 = addNums(x * y *z)



console.log(addNums(x,y))
console.log(addNums([x,y]))
console.log(addNums([x+y+z * z+x+y]))
console.log(addNums([x+y+z] * [z+x+y]))
console.log(addNums(x,abc))
console.log(addNums(abc,y))
console.log(addNums(one23,three21))
console.log(addNums(one23 * three21))
console.log(`${abc.length} (${one23.length} + ${three21.length}`))