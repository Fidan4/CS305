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
//  const users = [
//  {
//   id : 1,
//   name1 : 'Fidan',
//   gender: 'Female',
//   age : 20 ,

//  },

//  {
//   id : 2,
//   name1 : 'Fatime',
//   gender: 'Female',
//   age : 18,

//  },
//  {
//   id : 3,
//   name1 : 'Sabir',
//   gender: 'Male',
//   age : 32 ,

//  },
//  {
//   id : 4,
//   name1 : 'Gunel',
//   gender: 'Female',
//   age : 20,

//  },
//  {
//   id : 5,
//   name1 : 'Nusret',
//   gender: 'Male',
//   age : 18,

//  }, 
//  {
//   id : 6,
//   name1 : 'Polad',
//   gender: 'Male',
//   age : 17,

//  },
//  ]

//  sum = 0
//  let result = users.map (item => sum += item.age )
//  console.log(result);
 
 


// let result1 = users.filter(item => item.gender === 'Female')
// console.log(result1); 


// let result3 = users.filter(item => item.age > 25 )
// console.log(result3);

// let result4 = users.map( item => item.age * 10 )
// console.log(result4);

                                                //ARRAY METHODS
//  const numbers = [ 9, 5, 3, 11, 12, 33, 22, 9, 11, 10, 0, 8]
 // 1.reverse 'numbers'

// numbers.reverse() 


// 2.sort asc

  // numbers.sort((a, b) => a - b) 

// 3.sort desc

  // numbers.sort((a, b) => b - a) 

// 4.splice '11' to '22'

  //let result = numbers.splice(3,4)

// 5.find first number which is equal 11

 // let bloom = numbers.find(item => item === 11)
 // console.log(bloom);


// 6.filter numbers which is greater 10
 // const result1 = numbers.filter(item => item > 10)
 // console.log(result1);


// 7.push 66 and 77 to 'numbers' array (end)
  //   numbers.push(66, 77)
  //   console.log(numbers);
  
// 8.remove 4 items from 'numbers' (end)
 // numbers.pop()
 // numbers.pop()
 // numbers.pop()
 // numbers.pop()
 // console.log(numbers);


// 9.remove 2 items (front)
 // numbers.shift()
 // numbers.shift()
 // console.log(numbers);

// 10.add 0,1,2 to 'numbers' (front)  
 // numbers.unshift(0,1,2) 
 // console.log(numbers);
  
                                                          2



// const nums = [5, 3, 7, 8, 9, 13]
// const result = nums.every((num) => num > 2)
// console.log(result)

const numbers = [9, 5, 3, 11, 12, 33, 22, 9, 11, 10, 0, 8]
const list = ['6', '3', true, 'a', undefined, false, 10, 11, 5]
const list2 = ['a', ['f'], 7, ['d', [false]]]

// 1.check 'numbers' if any item is greater than 5 (some)
const result = numbers.some ((item) => item > 5)
console.log(result); //true

// 2.check 'numbers' if all item is greater than 2 (every)
const result1 = numbers.every ((item) => item > 2)
console.log(result1);  //false

// 3.flat 'list2' deeps(2) (flat)
console.log(list2.flat(1));

// 4.flat 'list2' deeps(Infinity) (flat)
console.log(list2.flat(Infinity));

// 5.sum all 'numbers' (reduce)
const bloom = numbers.reduce((acc, item) => acc + item, 0)
console.log(bloom);

// 6.sum only type number in 'list' (reduce)
  
console.log (list.reduce((acc, item) => typeof item ==='number' ? (acc + item) : (acc), 0)) 

// 7.check 'list' array that all item is true value (not falsy value) (every)
  
bloom1 = list.every((item) => item);
console.log(bloom1);

// 8.sort only numbers in 'list'
 num = list.filter((item) => typeof item === 'numbers')
f= num.sort()
console.log(num)





 




