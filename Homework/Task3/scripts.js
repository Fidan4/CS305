////////////// TASK 1 //////////////
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]

// 1.Sum all the numbers in 'arr1'

 function mult(x) {
    const result1 = x.reduce((acc, item) => acc * item, 1);
    return Math.round(result1);
   }
   console.log(mult(arr1));
  
// 2.Add two numbers (10,88) to end of arrr1 (push methods)

 // arr1.push(10,88)
 //  console.log(arr1); //[9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8, 10, 88]
    

// 3.Remove first two numbers from arr1

 // arr1.shift()
 // arr1.shift()
 // console.log(arr1); //[ 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]

// 4.Add three numbers (0,9,11) in front of arr1(unshift)

 // arr1.unshift(0,9,11)
 // console.log(arr1); // [0, 9, 11, 9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]

// 5.Remove four numbers in front of arr1(shift)

 // arr1.shift()
 // arr1.shift()
 // arr1.shift()
 // arr1.shift()
 // console.log(arr1); // [ 9, 9, 3, 22, 11, 12, 32, 8]


////////////// TASK 2 //////////////
const arr2 = ["Sabir", "Fatime", "Rufet", 'Mehman', 'Fatime', 'Gunel',"Fatime", "Cavid", 'Ramin', "Ali", "Polad"]

// 1.Console values from "Rufet" to "Ali"

//1.1
 // let result2 = arr2.splice(2,7)
 // console.log(result2);

//1.2
 // let result3 = arr2.slice(2,9)
 // console.log(result3);

//1.3
 //  let result4 =arr2.slice(arr2.indexOf("Rufet"), arr2.indexOf("Ali"))
 // console.log(result4);


// 2.Change Mehman to Fidan

  // ????  // result5 = arr.(arr2.[3]) = 'Fidan' // ????

 // let result5 = arr2[arr2.indexOf("Mehman")] = "Fidan";
 // console.log(arr2);

// 3.Console each name with map

 // let result6 =arr2.map (item => item )
 // console.log(result6);

// 4.Console only names which is Fatime

 // const result7 = arr2.filter(item =>  item === 'Fatime')
 // console.log(result7);

// 5.Console all names where name is Gunel, then change it to "Nihad"

 // let result8 = arr2[arr2.indexOf("Gunel")] = "Nihad";
 // console.log(arr2);

// 6.Console last second value of arr2

 // console.log(arr2[arr2.length-2]);

// 7.Console length of arr2

 // console.log(arr2.length);


////////////// TASK 3 //////////////

const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]

// 1.Show only numbers

 // result9 = arr3.filter((item) => typeof item === "number");
 // f = result9.sort();
 // console.log(result9);

// 2.Show only true values

 // result10 = arr3.filter(item => item === true);
 // console.log(result10);

// 3.Show only false values

 // result11 = arr3.filter(item => item === false);
 // console.log(result11);

// 4.Show only strings

 // result11 = arr3.filter((item) => typeof item === "string");
 // i = result11.sort();
 // console.log(result11);



////////////// TASK 4 //////////////

const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]

// 1.Console (only even numbers)

// // 1.1
//  result12= numbers.filter(item => item %2 === 0) 
//  console.log(result12);

// // 1.2
//  for (let i=0; i<numbers.length; i++ ) {
//     if (numbers[i]%2 ===0){
//     console.log(numbers[i]);
//     }
//     }  
    
// 2.Console (only odd numbers)

//2.1
//  result12= numbers.filter(item => item %2 !== 0) 
//  console.log(result12);

//  2.2
// for (let i=0; i<numbers.length; i++ ) {
//     if (numbers[i]%2 !==0){
//     console.log(numbers[i]);
//     }
//     }  

////////////// TASK 5 //////////////

const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)

// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]

// 2.Sum all numbers of arr4
//2.1
 // let sum1 = 0
 // for (let i = 0; i<arr4.length ;i++) {
 //   if (arr4=> arr1.typeof === 'string') { 
 //     sum1 += arr4[i]
 //  }
 // }
 // console.log(sum1);  //?????????

//2.2

 // console.log (arr4.reduce((acc, item) => typeof item ==='number' ? (acc + item) : (acc), 0)) 

// 3.Count only the values that are true

 //  const result0 = arr4.filter(value => value === true).length;
 //  console.log(result0);

// 4.Count only the values that are string
 
 //  const result01 = arr4.filter(value => typeof value === 'string').length;
 //  console.log(result01);

// 5.Count only the values that are false

 //  const result02 = arr4.filter(value => value === false).length;
 //  console.log(result02);




////////////// TASK 6 //////////////

 let fullName = 'Fidan Sultanova Azer'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)

 //  result14= (fullName.split (''))
 //  console.log(result14);

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// 3) Alinan yeni arrayi stringe cevirin(join)

//2.1

 //  let result15 = fullName.split (' ');  
 //  let result16 = `${result15[1]} ${result15[0]} ${result15[2]}`;  
 //  console.log(result16);

//2.2

 //  let result17 = fullName.split (' ');  
 //  [result17[0], result17[1]] = [result17[1], result17[0]]; 
 //  let result18 =result17.join(' '); 
 //  console.log(result18);



let arr = [8, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
 // let result19 = arr.filter(num => num === 5).length;
 // console.log(result19);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

 //  let result20 = arr.reduce((acc, item) => acc + item, 0)
 //  console.log(result20);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun

 // console.log(arr.sort());

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)

 // let result21 = Math.max(...arr);
 // let result22 = arr.filter(num => num === result21).length;

 // console.log (result21); // ən böyük rəqəm  // 8
 // console.log( result22); // ən böyük rəqəmin neçə dəfə təkrarlandığı  // 1

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)

 // const name2 = "Fidan";  // Adınızı bura daxil edin
 // const result23 = arr.includes(name2.length);
 // console.log(result23);


//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin

 // for (let i = 0; i < arr.length; i++) {
 //   if (arr[i] % 3 === 2) { 
 //    sum2 = i;
 //   console.log(sum2);
 //   }
 // }

//10) arraydaki en boyuk reqemin ilk indexini tapin
 // const test = Math.max(...arr); 
 // const test1 = arr.indexOf(test);
 // console.log(test1);


//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
 //  let test2 = [];
 //  arr.forEach((num, index) => {
 //     if (num === 4) {
 //       test2.push(index);
 //     }
 //  });
 //   console.log(test2);

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
  
 //  console.log(arr.indexOf(5));
 //  console.log(arr.lastIndexOf(5));

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
 //   let test3 =arr.filter(num => num > 2)
 //  console.log(test3);
 //  console.log(arr.length - test3.length);

//14) 7 reqeminin indexleri cemini tapin.
 //  let test4 = arr.reduce((sum, num, index) => num === 7 ? sum + index : sum, 0)
 //  console.log(tesxt4);



///////////// TASK 7//////////////
let arr6= [
  {
      name: 'test',
      key: 1
  },
  {
      name: 'task',
      key: 2
  },
  {
      name: 'tanqo',
      key: 3
  },
  {
      name: 'like',
      key: 4
  },
  {
      name: 'task',
      key: 5
  },
  {
      name: 'trust',
      key: 6
  },
  {
      name: 'test',
      key: 7
  },
  {
      name: 'last',
      key: 8
  },
  {
      name: 'tanqo',
      key: 9
  },
  {
      name: 'elephant',
      key: 10
  },
  {
      name: 'love',
      key: 11
  },
  {
      name: 'small',
      key: 12
  },
  {
      name: 'little',
      key: 13
  },
]


//QEYD - !!! Bu tasklarda arr2 istifade edilecekdir və hər bir algorithm funksiya daxilində yazılmalıdır...

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

 //  arr6.test4 = function() {
 //   return this.filter(item => item.name.startsWith('t'));
 //  };
 //  console.log(arr6.test4());


// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin.

  arr6.test5 = function() {
  return this.filter(item => item.name.startsWith('t') && item.name.endsWith('t'));
  };
  console.log(arr6.test5());
 

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

 arr6.test6 = function() {
 return this.filter(item => item.name.startsWith('t') && item.name.endsWith('t')).reduce((sum, item) => sum + item.key, 0);
 };
 console.log(arr6.test6())


 
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

 arr6.test7 = function () {
  return this.map(item => item.name.endsWith('e') ? { ...item, name: 'SuperDev' } : item);
 };
 console.log(arr6.test7());


// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin.

 arr6.test8 = function () {
  return this.reduce((longest, item) => item.name.length > longest.name.length ? item : longest).key;
 }
 console.log(arr6.test8());


 


// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
arr6.test8 = function () {
  return this.reduce((longest, item) => item.name.length > longest.name.length ? item : longest).key;
 }
 console.log((arr6.test8())**2);


// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.

 function test9(arr6) {
  return arr6.filter(item => item.name.length === 4);
 }
 console.log(test9(arr6))


// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin

 function test10(arr6) {
  return arr6.reduce((max, item) => item.key > max.key ? item : max).name;
 }
 console.log(test10(arr6))


// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.

 function test11(arr6) {
  return arr6.map((item, index) => (item.name.match(/L/gi) || []).length === 2 ? index : -1).filter(index => index !== -1);
 }
 console.log(test11(arr6));



// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.

 function test12(arr6) {
  return arr6.filter(item => (item.name.match(/t/gi) || []).length === 2).map(item => item.key);
 }
 console.log(test12(arr6));
