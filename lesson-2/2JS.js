//task-1,2;
'use strict';
let num1 = 'hello owu.com.ua';
let num2 = 1;
let num3 = 10;
let num4 = -999;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bool = true;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(bool);

alert(num1);
alert(num2);
alert(bool);

document.write(num1);document.write('<br>');
document.write(num2);document.write('<br>');
document.write(num3);document.write('<br>');
document.write(num4);document.write('<br>');
document.write(num5);document.write('<br>');
document.write(num6);document.write('<br>');
document.write(num7);document.write('<br>');
document.write(bool);


//2;
const [sky, spring, flower] = ['sky', 'spring', 'flower'];
const [age, height, weight] = [20, 158, 51];
const arr = [sky, spring, flower, age, height, weight];
arr.forEach( v => console.log(v));

//3
const string1='Hello World!';
const string2='2020';
const string3='-550';
console.log(string1);
console.log(string2);
console.log(string3);
/*
//4,5,6;
  const person = {
    first: 'Yurii', last: 'Pinchuk', surname:'Nikolaevich'};

   let first =prompt('Enter first');
     let last = prompt('Enter last');
    let surname =prompt('Enter surname');

 console.log(first +" "+ last +" "+ surname);
alert(first +' '+ last +' '+ surname);
document.write('<br>'); document.write(  first +' '+ last +' '+ surname);

//7;
/*
let number1 = +prompt('Enter first num:1');
let number2 = +prompt('Enter second num:2');
let number3 = +prompt('Enter third num:3');

console.log(number1 + number2 + number3);

/*
//8;
let number1 = +prompt('Enter 1 num: 1');
let number2 = +prompt('Enter 2 num: 2');
let number3 = +prompt('Enter 3 num: 3');
let number4 = +prompt('Enter 4 num: 4');

let result = number1 + number2 + number3 + number4;
console.log(parseInt(result));
/*



 */
//9,10;
/*
let number1 = +prompt('Enter 1 num: 2');
let number2 = +prompt('Enter 2 num: 2');
let number3 = +prompt('Enter 3 num: 2');

let result = number1 + number2 + number3;
console.log(parseFloat(result));
console.log(Math.round(result));
*/

//11;
let number1 = Math.round(prompt('Enter 1 num: '));
let number2 = Math.round(prompt('Enter 2 num: '));
console.log(Math.pow(number1,number2));

/*
//12;
let a = 100;
let b = '100';
let c = true;
let d = undefined;

console.log(typeof a);
// expected output: "number"

console.log(typeof 'b');
// expected output: "string"

console.log(typeof c);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined";

/*
//13;
let a = 5 < 6,
    b = 5 > 6,
    c = 5 >= 6,
    d = 5 === 6,
    e = 10 == 10,
    f = 10 >= 10,
    g = 10 >= 0 || 1 <10;
let i = 10 !== 10;
let j = 10 <= 10 && 0 > 10;
let k = 123 === '123';
let l = 123 =='123';
console.log(a,b,c,d,e,g,f,i,j,k,l);

 */
//14;
 let users=[
   {name:'vasya', age:31, status:false},
   {name: 'petya', age: 30, status: true},
   {name: 'kolya', age: 29, status: true},
   {name: 'olya', age: 28, status: false},
   {name: 'max', age: 30, status: true},
   {name: 'anya', age: 31, status: false},
   {name: 'oleg', age: 28, status: false},
   {name: 'andrey', age: 29, status: true},
   {name: 'masha', age: 30, status: true},
   {name: 'olya', age: 31, status: false},
   {name: 'Max', age: 31, status: true}
 ];
   console.log(users[7].status);
   console.log(users[10].status);
   console.log(users[9].name);
   console.log(users[2].name);
   console.log(users[5].age);
   console.log(users[6].age);
   console.log(users[3].age);
   console.log(users[4].age,users[4].name);
