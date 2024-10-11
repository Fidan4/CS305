const arr1 = new Array()
const arr2 =[1, 2, 'Hello']

//map 
// const numbers = [ 1, 2, 3, 4, 5]
// result = numbers.map((item,index) => item * index)
// console.log(result);

// result1 = numbers.map(item => item * 0)
// console.log(result1);

// result2 = numbers.map(index => index * 2)
// console.log(result2);

// result1 = numbers.map(item => { 
//     if()})

 
//filter == if+ map
// 
// result1= arr3.filter((item,index) => typeof item === 'number')
// console.log(result1);

// result = arr3.filter(item => !item )
// console.log(result);

//find and findIndex

result = arr3.filter(item => item < 3)
console.log(result);
result1 = arr3.find(item => item < 3)
console.log(result1);
result2 = arr3.findIndex(item => item < 3)
console.log(result2);

let arr3 = [ 4, 2, 'Fidan', 'Student',  2, 3 ]
result= arr3.some(item => typeof item === 'string')
console.log(result);
result1= arr3.every(item => typeof item === 'string')
console.log(result1);
