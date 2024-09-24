// Data Types:
// 1.Create a string, number, boolean, undefined, null, symbol, and bigint variable.
// 2.Print each variable type using typeof.


let name1 = 'Fidan'
console.log(typeof name1);
let age1 = 20
console.log(typeof age1);
let salary1 = undefined
console.log(typeof salary1);
let education = null
console.log(typeof education);
let isAdmin = true
console.log(typeof isAdmin);
let bigInt = 4444n
console.log(typeof bigInt);
let symbol= Symbol("private");
console.log(typeof symbol)


// Keywords:
// 3.Use let, const, and var to declare variables and explain their differences with examples.

let name2 = "Fidan"
console.log(name2);
name2 = "Aysel"
console.log(name2);
// It is possible to change the value with let. However, we do not write let a second time.


const surname = "Sultanova"
console.log(surname);
//With const, the value cannot be changed in any case.

var jobs = "CS"
console.log(jobs);
var jobs = "Network Admin"
console.log(jobs);
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
console.log("5" + 6);  //56  //If there is a string, it is no longer interpreted as a number, but as a string
console.log(30 / "6"); //5  //As you can see, this only applies to addition
console.log(30 / 5);
console.log(30 % 4);       //% indicates the remainder

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
console.log(d && e);             //&& means and
console.log(f > 14 && g < 100);
console.log(d || e);
console.log(f > 14 || g < 100); // || or means
console.log(!d);   //! expresses negation
console.log(!e);
// = gives value
// == it only compares by type
// === compares both by type and value


