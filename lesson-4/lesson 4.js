//1;
// function showArray(array) {
//
//   console.log(array);
// }
// showArray([1,7]);
// showArray([16,'array']);

//2;
// function radom(array) {
//   for (let i = 0; i < 10; i++) {
//     let random = Math.round(Math.random()*732-8+8);
//     array.push(random);
//   }
//   showArray(array);
// }
// let arr3 = [];
// let arr4 = [100,250,50,168,120,345,188];
//
// radom(arr3);
// radom(arr4);

//3;
// function getMin(a, b) {
//   if (a < b) {
//     document.write(a + ' меньше чем' + b);
//   } else if (a > b) {
//     document.write(a + ' больше чем ' + b);
//   }
// }
//    getMin(34,76);


//3.1;
// function getMin(a, b, c) {
//   if (a < b && a < c) {
//     document.write('Min number is A: ' + a);
//   } else if (b < a && b < c) {
//     document.write('Min number is B: ' + b);
//   } else {
//     document.write('Min number is C: ' + c);
//   }
// }
// getMin(-30,-100, -50);
// getMin(-100,-11, -999);
// getMin(-30000,-5555, -1);
//



//6;
//   function showArar(arr){
//    console.log(arr);
//   }
//   showArar([12,56, true, 'Hej']);
//7;
// function max (array){
//   let max = array[0];
//   for (let item of array ){
//     if (item > max) max=item;
//   }
//   return max;
// }
// let minmaxArray=[12,55,75,3,2,76,101];
// let show= max(minmaxArray);
// console.log(show);

//8;
// function min (array){
//   let min = array[0];
//   for (let item of array ){
//     if (item < min) min=item;
//   }
//   return min;
// }
// let minmaxArray=[12,55,75,3,2,76,101];
// let show= min(minmaxArray);
// console.log(show);

//7;
// Array - Функция конструктор которая нужна для создания массивов. Array.prototype - Объект прототип,
// с набором методов, нужен для реализации прототипного наследования, к тому же имеется исключительно у
// функций, по умолчанию там храниться поле constructor, которое хранит ссылку на класс который создал этот объект.
//
// Array.prototype.min = function(){
//   let min = parseInt(this[this.length-1]), el;
//   for(let i=this.length-2; i>=0; i--){
//     el = parseInt(this[i]);
//     if(el<min){
//       min = el;
//     }
//   }
//   return min;
// };
//
// let array = [14,35,5,45,8,50];
// document.write(array.min());
// document.write('<br>');
//
// //8;
// Array.prototype.max = function(){
//   let max = parseInt(this[this.length-1]), el;
//   for(let i=this.length-2; i>=0; i--){
//     el = parseInt(this[i]);
//     if(el>max){
//       max = el;
//     }
//   }
//   return max;
// };
// let arr = [45,365,554,435,888,50];
// document.write(arr.max());

//10;
// function arithmeticArray(array) {
//   let i = 0;
//   for (let number of array) {
//     i += number;
//   }
//   let s = i / array.length;
//   return s;
//
// }
// let arithmetic = arithmeticArray([15, 10, 10, 5]);
// console.log(arithmetic);
//
//
// //9;
// let arr = [54,65,75,8,45, 12,-2];
//  function arrSum(array) {
//      let result = array.reduce((a, b) =>  a + b  );
//      result = result / array.length;
//      return +result.toFixed(2)
//  }
//  let sum = arrSum(arr);
//   console.log(sum);


//11;Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві.
// function minmaxReturn(array){
//   console.log(array.length);
//   return array.length;
// }
//   minmaxReturn(user1 =[{name: 'Irma',age: 27},{jobs:['artist', 'teacher']}]);
//

//13;
// - створити функцію  яка скаладає значення елементів з однаковими індексами та повертає новий результуючий масив.
//Приклад
// let a = [1,2,3,4];
// let b = [2,3,4,5];
//
// function eleM(array, array2) {
//  let result=[];
//   for (let i=0; i< array.length; i++){
//     console.log(array[i]+ array2[i]);
//     result.push(array[i]+ array2[i]);
//   }
//  console.log(result);
// }
// eleM(a,b);
// //14;
// //Додає в боді блок з текстом "Hello owu"
// function body(owu) {
//   document.body.innerText= owu;
// }
// body('Hello owu');

//15;
//Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи.
function createElement(innerText, elementName) {
  let body21 = document.getElementsByTagName('body');
  let newdiv = document.createElement(elementName);
  newdiv.innerText = innerText;
  body21[0].appendChild(newdiv);
}
createElement('VOMASDM', 'h1');
