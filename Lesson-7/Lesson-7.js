//1;
//1.- - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// let button = document.getElementsByTagName('button')[0];
// let div = document.getElementById('text');
//
// function toggle () {
//   if (div.style.display == 'none') {
//     div.style.display = 'block';
//   } else {
//     div.style.display = 'none';
//   }
// }
//
// button.addEventListener('click', toggle, false);

//2;
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// container.onmouseover = container.onmouseout = handler;
// function handler(event) {
//   if (event.type == 'mouseover') {
//     event.target.style.background = 'pink'
//
//   }
//   if (event.type == 'mouseout') {
//     event.target.style.background = ''
//   }
// }

//2;
// back.onmouseover = back.onmouseout = handler;
// function handler(event) {
//   if (event.type == 'mouseover') {
//     event.target.style.display = 'none'
//
//   }
//   if (event.type == 'mouseout') {
//     event.target.style.display = 'block'
//   }
// }
//2.1;
//   back.onclick = function (event) {
//     back.style.display = 'none'
// };

//3;
//створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача.

// let input = document.forms.yourAge.age;
// let submit = document.forms.yourAge.submit;
// submit.onclick = function () {
//     if (input.value < 18) {
//         alert('Bad guy!');
//
//     } else alert('Hello! Welcome!');
// };

//4;
//Создайте меню, которое раскрывается/сворачивается при клике/
// let div = document.getElementsByClassName('submenu');
// function toggle () {
//   if (div[0].style.display == 'none') {
//     div[0].style.display = 'block';
//   } else {
//     div[0].style.display = 'none';
//   }
// }
// button.addEventListener('click', toggle, false);

//9;
//.- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let i = 1;
// for(let li of carousel.querySelectorAll('li')) {
//   li.style.position = 'relative';
//   li.insertAdjacentHTML('beforeend', '<span style="position:absolute;left:0;top:0">${i}</span>');
//   i++;
// }
// let width = 130;
// let count = 3;
//
// let list = carousel.querySelector('ul');
// let listElems = carousel.querySelectorAll('li');
// let position = 0;
// carousel.querySelector('.prev').onclick = function() {
//   position += width * count;
//   position = Math.min(position, 0);
//   list.style.marginLeft = position + 'px';
// };
// carousel.querySelector('.next').onclick = function() {
//   position -= width * count;
//   position = Math.max(position, -width * (listElems.length - count));
//   list.style.marginLeft = position + 'px';
// };
//5;
//Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let commentArr = [
//   {title:'Tourism', body:'People travel from the very beginning of their civilization'},
//   {title:'My weekend', body:'In whole the weekend is the great time when all my family gathers together'},
//   {title:'My Free Time', body:'At weekends I go out with my friends. Sometimes we go to the cinema, sometimes to the pizza place'},
// ];
// let commen = document.getElementById('content');
// commentArr.forEach(item => {
//   let div = document.createElement('div');
//   let h4 = document.createElement('h4');
//   let p = document.createElement('p');
//   let button = document.createElement('button');
//   button.innerText = 'Click hide';
//
//   button.onclick = ev => {
//     p.hidden
//     ? p.hidden = false
//     : p.hidden = true
//   };
//     h4.innerText=item.title;
//     p.innerText=item.body;
//     div.appendChild(h4);
//     div.appendChild(p);
//     div.appendChild(button);
//    commen.appendChild(div);
//   }
// );
//6;

//створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//  let butt = document.getElementById('bth');
//  let input1 = document.getElementById('input1');
//  let input2 = document.getElementById('input2');
//  let input3 = document.getElementById('input3');
//  let input4 = document.getElementById('input4');
// butt.onclick = ev =>{
// };

//7;
// Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
// let tableContainer = document.getElementsByClassName('tableClass')[0];
// let button = document.getElementsByTagName('button')[0];
// let rows = document.forms.table.rows;
// let columns = document.forms.table.columns;
//
// button.onclick = function () {
//     tableCreator( rows.value,columns.value, tableContainer);
// };
// function tableCreator(rows,columns, place) {
//     let table = document.createElement('table');
//     place.appendChild(table);
//
//     for (let i=0; i<rows; i++) {
//         let tableRow = document.createElement('tr');
//         tableRow.innerText = '#${i+1}';
//         table.appendChild(tableRow);
//         for (let j = 0; j < columns; j++) {
//             let tableColumns = document.createElement('td');
//             tableColumns.innerText = '#${j+1}';
//             tableRow.appendChild(tableColumns);
//         }
//     }
// }

//10;
//Сворити масив не цензцрних слів. Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку.
// let bth = document.getElementById('bth');
// bth.onclick = function () {
//
//   let inp33ut = document.getElementById("inputID").value;
//   let arrayWords = ['ass', 'fuk', 'cunt', 'bitch'];
//
//   for (let i=0; i<arrayWords.length; i++) {
//     if (arrayWords[i] === inp33ut) {
//       alert('STOP!!!');
//     }
//   }
// };

//11;
//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить. Перевірку робити при натисканні на кнопку.
// let bth = document.getElementById('bth');
// bth.onclick = function () {
//   let inp12t = document.getElementById("inputID").value;
//   let names = ['ass', 'fuck', 'bitch'];
//   let arr = inp12t.split(' ');
//   console.log(arr);
//
//   for (let i=0; i < arr.length; i++) {
//     if(names.find(element => element == arr[i])){
//       alert(`Stop!!`);
//     }
//   }
// };

//13;
let usersWithAddress = [
  {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
  {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
  {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
  {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
  {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
  {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
  {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
  {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
  {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
  {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
  {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
//Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ.

let content = document.getElementById('contenting');
let userD = document.createElement('div');

userD.appendChild(renderContent(usersWithAddress));

 let label1  = document.createElement('label');
 let label2 = document.createElement('label');
 let label3 = document.createElement('label');

 label1.innerText = 'Status false';
 label2.innerText = 'More 29';
 label3.innerText = 'Kyiv';

 let inputStatus = document.getElementById('status');
 let inputAge = document.getElementById('age');
 let inputCity = document.getElementById('city');
 let buttonId = document.getElementById( 'bth');

content.appendChild(userD);

content.appendChild(label1);
content.appendChild(inputStatus);
document.write('</br>');
content.appendChild(label2);
content.appendChild(inputAge);
document.write('</br>');
content.appendChild(label3);
content.appendChild(inputCity);
document.write('</br>');
document.write('</br>');
content.appendChild(buttonId);

buttonId.onclick = ev=> {
  let myArray = JSON.parse(JSON.stringify(usersWithAddress));
  if (inputStatus.checked) myArray = myArray.filter(value => !value.status);
  if (inputAge.checked) myArray = myArray.filter(value => value.age >= 29);
  if (inputCity.checked) myArray = myArray.filter(value => value.address.city == 'Kyiv');
  userD.innerHTML = ' ';
  userD.appendChild(renderContent(myArray))
};

  function renderContent (array) {
  let nain = document.createElement('div');
  array.forEach(item =>{
    let div = document.createElement('div');
    div.innerText = JSON.stringify(item);
    nain.appendChild(div);
  });
  return nain;
}

//12;
// let headerOne = document.querySelector('h1');
// let head = document.querySelectorAll('h2');
//
// let sideMenu = document.createElement('div');
// document.body.appendChild(sideMenu);
// sideMenu.classList.add('sideMenu');
// let i = 1;
// for (const element of head) {
//     let ruleName = document.createElement('a');
//     ruleName.setAttribute('name','${i}');
//     element.appendChild(ruleName);
//
//     let header = document.createElement('a');
//     let brMenu = document.createElement('br');
//     sideMenu.appendChild(brMenu);
//     sideMenu.appendChild(header);
//     header.innerText = element.innerText;
//     header.setAttribute('href','#${i}');
//     i++;
// }
// console.log(headerOne);
// console.log(head);

//15;
// function foo() {
//   let elem = document.createElement("p");
//   elem.innerHTML = "Text Information. A non fiction writing written with intention of informing the reader about " +
//     "a specific topic.";
//   document.body.appendChild(elem);
// }

