// let email = require("./first.js")
// console.log("email is: ", email)

let abc = require("./first.js")
console.log("email is : ", abc.email)
console.log("email is : ", abc.greet())


// let obj = require("./second.js")
// console.log(obj)
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.isMarried)

let {name, age , isMarried} = require("./second.js")
console.log(name)
console.log(age)
console.log(isMarried)

// // destructuring : 

// let arr = [10,20,30,40];

// [a,b,c,d] = arr // destructuring

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// // -------------------------------------------------------------------------
// let student = {
//     name : "ankit",
//     lname : "khare",
//     age : 24
// }

// let {name, lname, age} = student // destructuring

// console.log(name)
// console.log(lname)
// console.log(age)


