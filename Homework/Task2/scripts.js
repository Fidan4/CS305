////////////// TASK 1 //////////////

// 1.Multiply 12 with 8, and console the result:

console.log(12 * 8);  // 96
console.log('12' * '8'); //96
// Vurma(Toplmadan başqa bütün əməllər)zamanı type-nın string və ya number olmasının heç bir fərqi yoxdu.Yəni hər zaman əməlin nəticəsini göstərəcək



// 2.Divide 10 by 2 add result to variables x, and console x:

let a = 10
let b = 2
let x = a / b
console.log(x);



// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.

let num1 = 20
let num2 = 17
console.log(num1 + num2);



/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

//4.1.

  const yourName = 'Fidan'
  const yourSurname= 'Sultanova'
  const yourBirthOfYear = 2004 
  console.log(`Name: ${yourName}     Surname: ${yourSurname}     Date of birth : ${yourBirthOfYear}`);

  //4.2

  const info = {
    yourName1 : 'Fidan',
    yourSurname1 : 'Sultanova',
    yourBirthOfYear1 : 2004
  }

  console.log(info.yourName1);
  console.log(info.yourSurname1);
  console.log(info.yourBirthOfYear1);
  //Sualı tam analmadığım üçün,anladığım 2 variantda da yazdım
  
  
  



// 5.Console the remainder(%) when 17 is divided by 12.

console.log(17 % 12); // 5 -> 17 : 12 = 1(qalıq 5)  ; %- bizə bölmə zamanı qalan qalığı  göstərir




// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence, console result.

let cityName = 'Baku'
cityName = 'Gence' 
console.log(cityName);  // Gence
// Dəyəri dəyişəcəyimiz üçün let-dən istifadə etdik.Çünki let bizə dəyəri dəyişməyə imkan yaradır. Lakin dəyəri dəyişdiyimiz zaman let yazmırıq.




////////////// TASK 2 //////////////

console.log('test1', test); // test1 undefined
{
    let test = "something"
    console.log('test2', test); // test2 something
}
console.log('test3', test);  // test3 undefined


console.log('test1', test);  // test1 undefined
{
    var test = "something"
    console.log('test2', test); // test2 something
}
console.log('test3', test); // test2 something
 



 //Find the type of all the following cases

// let name = "Ulfat"
// let surname = Zakirli
// let year = 2000
// year = "2000"
// let city;
// let qualification = null
// let obj = { name: 'ulfat' }
// let arr = ['a', 'b', 'c']

const name1 = 'Fidan'
console.log(typeof name1);
const surname1 = 'Sultan'
console.log(typeof surname1);
let year1 = 2004
console.log(typeof year1);
year1 = '2004'
console.log(typeof year1);
let city
console.log(typeof city);
let qualification1 = null
console.log(qualification1);
let obj1 = {name2 :'Ulfat'}
console.log(typeof obj1);
let arr = ['a', 'b', 'c'] 
console.log(typeof arr);


// 1.Create a object add your name, surname, age and city.
const White = {
  name3 : 'Fidan',
  surname3 : 'Sultanova',
  age3 : 20,
  city : 'Baku'

}
console.log(White);



// 2.Then change name to "Jhon"

White.name3 = 'John'
console.log(White.name3);


// const user = {
//   email: "ulfat@gmail.com",
//   info: {
//       gender: "Male",
//       loc: {
//           city: "Baku",
//           street: "Nizami 22",
//           education: {
//               "uni name": "ADNSU",
//           },
//       },
//   },
// };

const user2 = {
  email4 : 'fidansultan200@gmail.com',
  info : {
    gender : 'Female',
    loc: {
      city: 'Baku',
      street : 'Nizami 11',
      education : {
        'uni-name' : 'BDU'
      }
      
    }
  }
}

// 3.console each value of user object

console.log(user2.email4);
console.log(user2.info.gender);
console.log(user2.info.loc.city);
console.log(user2.info.loc.street);
console.log(user2.info.loc.education["uni-name"]);



// 4.Console only keys of user

for (let key in user2){
  console.log(key);
}
for (let key in user2.info){
  console.log(key);
}
for (let key in user2.info.loc){
  console.log(key);
}


// 5.Console only values of user

for (let values in user2) {
  console.log(user2[values]);
  
}
for (let values in user2.info) {
  console.log(user2.info[values]);
  
}

for (let values in user2.info.loc) {
  console.log(user2.infoloc[values]);
  
}


// const mixedObject = {
//   name: "ulfat",
//   age: 25,
//   isStudent: false,
//   hobbies: null,
//   year: 2024,
//   address: undefined,
//   surname: "Zakirli",
//   contactInfo: {
//       email: "ulfat@example.com",
//       phone: null,
//   },
//   scores: [98, 87, 92],
// };

const mixedObject ={
  name4 : 'Fidan',
  age : 20,
  isStudent : true,
  hobbies : null,
  year2 : 2024,
  address : undefined,
  surname4 : 'Sultanova',
  contactInfo : {
    email4: "fidan@gmail.com",
  phone : null,

  },
scores1: [98, 87, 92],

}


// 6.Log only the 'keys' whose values are of type string

for( key in mixedObject) {
  if (typeof mixedObject[key]  === 'string')  {
    console.log(key);
  }
}
for( key in mixedObject.contactInfo) {
  if (typeof mixedObject.contactInfo[key]  === 'string')  {
    console.log(key);
  }
}



// 7.Log only the 'keys' whose values are of type number

for( key in mixedObject) {
  if (typeof mixedObject[key]  === 'number')  {
    console.log(key);
  }
}



// 8.Log only the 'keys' whose values are of type boolean

for( key in mixedObject) {
  if (typeof mixedObject[key]  === 'boolean')  {
    console.log(key);
  }
}



// 9.Log only the 'keys' whose values are of type undefined

for( key in mixedObject) {
  if (typeof mixedObject[key]  === 'undefined')  {
    console.log(key);
  }
}



// 10.Log only the 'keys' whose values are of type object

for( key in mixedObject) {
  if (typeof mixedObject[key]  === 'object')  {
    console.log(key);
  }
}



// 11.Repeat (6,7,8,9,10) tasks but now log 'values'

for( values in mixedObject) {
  if (typeof mixedObject[values]  === 'string')  {
    console.log(mixedObject[values]);
  }
}

for( values in mixedObject.contactInfo) {
  if (typeof mixedObject.contactInfo[values]  === 'string')  {
    console.log(mixedObject.contactInfo[values]);
      } }

for( values in mixedObject) {
  if (typeof mixedObject[values]  === 'number')  {
    console.log(mixedObject[values]);
 }
}
for( values in mixedObject) {
  if (typeof mixedObject[values]  === 'bollean')  {
    console.log(mixedObject[values]);
 }
}
for( values in mixedObject) {
  if (typeof mixedObject[values]  === 'undefined')  {
    console.log(mixedObject[values]);
 }
}
for( values in mixedObject) {
  if (typeof mixedObject[values]  === 'object')  {
    console.log(mixedObject[values]);
 }
}      
