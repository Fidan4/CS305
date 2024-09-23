// Data Types:
// 1.Create a string, number, boolean, undefined, null, symbol, and bigint variable.
// 2.Print each variable type using typeof.


let Name= 'Fidan'
console.log(typeof Name)
let Age=20
console.log(typeof Age)
let Salary=undefined
console.log(typeof Salary)
let education=null
console.log(typeof education)
let isAdmin=true
console.log(typeof isAdmin)
let BigInt=4444n
console.log(typeof BigInt)
let Symbol1 = Symbol("private")
console.log(typeof Symbol1)


// Keywords:
// 3.Use let, const, and var to declare variables and explain their differences with examples.

let Name1 = "Fidan"
console.log(Name1);
Name1 = "Aysel"
console.log(Name1);
// It is possible to change the value with let. However, we do not write let a second time.


const Surname = "Sultanova"
console.log(Surname);
//With const, the value cannot be changed in any case.

var Jobs = "CS"
console.log(Jobs);
var Jobs = "Network Admin"
console.log(Jobs);
//It is possible to absorb new value when using var.


// Backticks (Template Literals):
// 4.Use backticks to create a dynamic message that includes (firstName,lastName,age,country,hobby,occupation) variables.

const firstName = 'Fidan'
const lastName = 'Sultan'
let age = 20 
let country = 'Azerbaijan'
let hobby = 'Recitation'
let occupation = 'teacher'
console.log (`My name is ${firstName} ${lastName} . I am ${age} . I live in ${country} . ${hobby} is my hobby . I work is ${occupation} .`)


//  Operators:
// 5.Use arithmetic operators (+, -, *, /, %).
console.log(5 + 6);
console.log(11 - 5);
console.log(5 * 6);
console.log("5" + 6);
console.log(30 / 5);
console.log(30 % 4);

// 6.Use comparison operators (==, ===, >, <, etc.)
let a = 26
let b = "37" 
let c  = 37
console.log(a == b);
console.log(b == c);
console.log(b === c);   
console.log(b == c);
console.log(a > b);
console.log(a < b);

// 7.Use logical operators (&&, ||, !).
let d = true
let e = false
let f = 58
let g = 98
console.log(d && e);
console.log(f > 14 && g < 100);
console.log(d || e);
console.log(f > 14 || g < 100);
console.log(!d);
console.log(!e);







