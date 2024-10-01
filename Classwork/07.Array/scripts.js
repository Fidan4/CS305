// const nums = [4, 5, 7, 8, 10, 33, 0]

// let sum = 0
// for (let i = 0; i < nums.length; i++)  {
//     sum *= nums[i]
// }
// console.log(sum);


// for (let i= 2; i<4; i++ ) {
// console.log(nums[i]);
// }

// for (let i= 0; i < nums.length-1; i++) {
//     console.log(nums[i]);
    
// }

// let sum1 = 0
// for (let i = 0; i<nums.length ;i++) {
//   if (nums[i] %2 === 0) { 
//     sum1 += nums[i]
    
//   }
    
// }
// console.log(sum1);

// let sum2 = 0
// for (let i = 0; i<nums.length ;i++) {
//   if (nums[i] %2 !== 0) {
//     sum2 += nums[i]
    
//   }
// }
// console.log(sum2);
 const users = [
 {
  id : 1,
  name1 : 'Fidan',
  gender: 'Female',
  age : 20 ,

 },

 {
  id : 2,
  name1 : 'Fatime',
  gender: 'Female',
  age : 18,

 },
 {
  id : 3,
  name1 : 'Sabir',
  gender: 'Male',
  age : 32 ,

 },
 {
  id : 4,
  name1 : 'Gunel',
  gender: 'Female',
  age : 20,

 },
 {
  id : 5,
  name1 : 'Nusret',
  gender: 'Male',
  age : 18,

 }, 
 {
  id : 6,
  name1 : 'Polad',
  gender: 'Male',
  age : 17,

 },
 ]

 sum = 0
 let result = users.map (item => sum += item.age )
 console.log(result);
 
 


let result1 = users.filter(item => item.gender === 'Female')
console.log(result1); 


let result3 = users.filter(item => item.age > 25 )
console.log(result3);

let result4 = users.map( item => item.age * 10 )
console.log(result4);
