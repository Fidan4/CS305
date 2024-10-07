// function sum () {
//     console.log('before return');
//     console.log('before return');
//     console.log('before return');
//     console.log('before return');
//     return 'okey'
//     console.log('after return');
//     console.log('after return');
//     console.log('after return');
//     console.log('after return');
// }
// console.log(sum ());

//Task 1

// Tasks
const arr1 = [21, 33, 21, 21, 18, 24, 22, 23, 18, 23, 18, 33, 43];
const arr2 = [20, 34, 17, 17, 18, 24, 22, 23, 18, 23, 18, 34, 43];

// 1. create function which calc a and b

 function sum1 (a,b) {
    return (a + b)
 }
 console.log(sum1(100,344));

// 2. create function which sum 'arr1' or 'arr2'
 function mult(x) {
  const result1 = x.reduce((acc, item) => acc * item, 1);
  return Math.round(result1);
 }
 console.log(mult(arr1));

// 3. create function which take two parameters (firstName and lastName)

 const name1 = "Fidan"
  const surname1 = "Sultan"

 function bl(firstName, lastName) {
   return (firstName + " " + lastName )

 }
 console.log(bl(name1,surname1));
