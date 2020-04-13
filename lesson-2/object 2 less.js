// //1;
// let i={
//   name: 'dog Robi',
//   age: 2,
//   breed:'bulldog',
//   color:'brown',
//   weight: 7
// };
//
// let i2={
//   name: 'human Mila',
//   age: 27,
//   skills :'jvsx',
//   hair :'blond',
//   height: 158
// };
//
// let i3={
//   name: 'car audi',
//   model: 'tt',
//   year: 2005,
//   color: 'silver',
//   type: 'coupe 1.8T'
// };
//
// let i4={
//   name: 'apartment',
//   rooms: 3,
//   street: 'Kavaleridze',
//   floor: 5,
//   city: 'Lviv'
// };
//
// let i5 = {
//   name:'book',
//   genre:'novel',
//   year: 1987,
//   pages: 545
// };
// console.log(i, i2,i3,i5,i4);
//
// //2;
// let dogs = ['bulldog', 'husky','pug', 'labrador', 'boxer'];
// console.log(dogs);
// let people = ['Ivan','Vlad', 'Yura', 'Mila', 'Sonia'];
// console.log(people);
// let cars = ['audi','opel', 'bmw', 'toyota', 'honda'];
// console.log(cars);
//
// //3;
// let user1 ={
//    name: 'Irma',
//    age: 27,
//    husband: 'Yura',
//    jobs:['artist', 'teacher'],
//    work:{
//       title: 'skills',
//       company:{
//       title:'BUDcompany',
//         street:'Rynek-7'
//     }
//   }
// };
// console.log(user1);
//
//
// //4;
// let users = [
//   {name:'vasya', age:31, status:false},
//   {name: 'petya', age: 30, status: true},
//   {name: 'kolya', age: 29, status: true},
//   {name: 'olya', age: 28, status: false},
//   {name: 'max', age: 30, status: true},
//   {name: 'anya', age: 31, status: false},
//   {name: 'oleg', age: 28, status: false},
//   {name: 'andrey', age: 29, status: true},
//   {name: 'masha', age: 30, status: true},
//   {name: 'olya', age: 31, status: false},
//   {name: 'max', age: 31, status: true}
// ];
// console.log(users[7].status);
// console.log(users[10].status);
// console.log(users[9].name);
// console.log(users[2].name);
// console.log(users[5].age);
// console.log(users[6].age);
// console.log(users[3].age);
// console.log(users[4].age,users[4].name);
// console.log(users[0].name, users[3].name);
//
// //5;
// let content = document.getElementById('content');
// console.log(content.innerText);
//
// let rules = document.getElementById('rules');
// console.log(rules.innerText);
//
// content.innerText = 'Oh, I hope some day, i make it out of here. Even if it takes all night or a hundred years';
//
// rules.innerText = 'I love coffee';
//
// content.style.backgroundColor = 'silver';
// rules.style.backgroundColor = 'silver';
//
// content.style.color = 'blue';
// rules.style.color = 'blue';
// console.log(rules.classList);

// let fc_rules=document.getElementById('fc_rules);
// console.log(fc_rules);
// for (let fcRule of fc_rules) {
//   fcRule.style.color ='red';
//
// }



//Class;
//1;
let main_header = document.getElementById('main_header');
console.log(main_header.innerText);
main_header.style.color= 'green';

//2;
let ul = document.getElementsByTagName("UL");
console.log(ul);
ul[0].style.width = '600px';

//3,4,5;
let lis = document.getElementById("navbar").getElementsByTagName("li");
console.log(lis);

for (let li of lis) {
  li.style.width = '50%';
  li.style.backgroundColor = 'pink';
}

//6;
let aList = document.getElementsByTagName('a');
for (let aListElement of aList){
  aListElement.classList.add('anchor');
}
//7;
for (let aListElement of aList) {
  if (aListElement.innerText == 'link3') {
    aListElement.style.fontSize = '40px'
  }
}
//8;
for (let aListElement of aList) {
  let innerText = aListElement.innerText;
  aListElement.classList.add('element_' + innerText);
}

//9;
let color = prompt('Give me color for sub-header!!!');
console.log(color);

let sub = document.getElementsByClassName('sub-header');
console.log(sub);
for (let el of sub){
  el.style.backgroundColor = color;
}


//10;

let color1 = prompt('Give me color for content_2!!!');
console.log(color1);

let sub1 = document.getElementsByClassName('sub-header');
for (let aListSub of sub1) {
  if (aListSub.innerText == 'content 2 segment') {
    aListSub.style.color = color1;
  }
}

//11;
//
let text1 = prompt('Give me color for content_1!!!');
console.log(text1);

let sub2 = document.getElementsByClassName('content_1');
for (let aSub of sub2) {
    aSub.innerText = text1;
}


//12;
let liss = document.getElementsByTagName("p");
console.log(liss);
for (let lip of liss) {
  lip.style.padding = '40px';
}

//13;

  let text2 = document.getElementsByClassName("content_2");
for (let lil of text2) {
  lil.innerText = 'To be happy with a man you must understand him a lot and love him a little. ' +
    'To be happy with a woman you must love her a lot and not try to understand her at all.';
}
