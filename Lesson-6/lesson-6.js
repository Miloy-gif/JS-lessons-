//1;
//- создать массив с 20 числами.
// -- при помощи метода sort отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше.

// let array= [23,67,1,6,9,34,97,53,231,10,45,67,99,332,456,1000,4546,4332,-1,-12];
// let resultArrayNumber = array.sort();
// console.log(resultArrayNumber);
//  let sort = array.sort( (a,b) => b - a );
// console.log(sort);

//1.1;
// let resultArrayNumber = array.sort();
// console.log(resultArrayNumber);
// let sort = array.sort(function (a,b) {
//   return b - a;
// });
// console.log(sort);

//  let filter = array.filter(function (numb){
//   if (numb %3 == 0|| numb%10==0){
//     return true
//   }
//   else {
//     return false
//   }
// });
// console.log(filter);
//
// array.forEach(function (numb) {
//   console.log(numb);
// });

//  let map = array.map(function (numb) {
//    console.log(numb);
//   return numb*3;
// });
// console.log(map);

//2;
//- создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце.

// let arrWords = ['sun','fanny','ocean', 'life','actor','queen','bananas','cat','dark','info'];
// // let words = arrWords.sort(function (a,b) {
// //   if (a > b){
// //     return -1;
// //   }
// //   else {
// //     return 1;
// //   }
// // });
// // console.log(words);
//
// // let words = arrWords.filter(arr => arr.length < 4);
// // console.log(words);
//
// let words = arrWords.map(value => {
//   return value += '!'
// });
//   console.log(words);

  //3;
//Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив
//
// (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором.
// let human = [
//   {name: 'vasya', age: 31, status: false},
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
//   ];

// let otherHuman = human.sort((human1, human2)=> human1.age - human2.age);
// let otherHuman = human.sort((human1, human2)=> human2.age - human1.age);
// console.log(otherHuman);
// let otherHuman = human.sort((a,b) => a.name.length - b.name.length);
// console.log(otherHuman);

// let humansWithId = [];
// human.forEach(function (obj) {
//   obj.id = obj.name + obj.age;
//   humansWithId.push(obj);
// });
// console.log(humansWithId);
//
// let newUsers = human.map((a,b) =>{
//   a.id =b;
//   return a;
// });
// console.log(newUsers);
//
// let otherHuman = human.sort((a,b) => b.id -a.id);
//
// console.log(otherHuman);

//4;
// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком.

// function calculator (a, b, callback) {
//   return callback(a ,b);
// }
// //  let number = calculator( 50,20, function (a, b) {
// //    return a + b;
// //  });
// // console.log(number);
//
// let number = calculator(30,30, function (a, b) {
//    return a*b;
//  });
// console.log(number);
//
//
// function calc(a, b, c, callback) {
//   return callback(a,b,c);
// }
// let number2 = calc (10,20,10, function (a, b, c) {
//   return a + b * c;
// });
// console.log(number2);

//5;
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв
// let cars = [
//   {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204",volume: 2,power: 400},
//   {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "30",volume: 3,power:250},
//   {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "20",volume: 2,power: 300},
//   {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ej23",volume: 2,power: 140},
//   {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "204",volume: 2,power: 200},
//   {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine:"e204",volume: 2,power:165},
//   {producer:"bmw",model:"115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//   {producer:"bmw",model:"315",year: 2010, color:"white",type: "sedan",engine: "ej15",volume: 1.5, power: 120},
//   {producer:"bmw",model:"650",year: 2009, color:"black",type: "coupe",engine: "60",volume: 6,power: 350},
//   {producer:"bmw",model:"320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//   {producer:"mercedes",model:"e200",year: 1990, color:"silver",type: "sedan",engine: "200",volume: 2,power:180},
//   {producer:"mercedes",model:"e63",year: 2017, color:"yellow",type: "sedan",engine: "ej63",volume:3,power: 400},
//   {producer:"mercedes",model:"c250",year: 2017, color:"red",type: "sedan",engine: "e25",volume: 2.5,power: 230}
// ];

// let volume = cars.filter(value => value.volume > 3);
// console.log(volume);
// let volume = cars.filter(value => value.volume == 2);
// console.log(volume);
// let producer = cars.filter(value =>value.producer === 'mercedes' && value.volume >=3 );
// console.log(producer);
// let volume = cars.filter(value =>value.producer === 'subaru' && value.volume >=3 );
// console.log(volume);
// let power = cars.filter(value => value.power >300);
// console.log(power);
// let power = cars.filter(value => value.power >300 && value.producer == 'subaru');
// console.log(power);

// let engine = cars.filter(value => value.engine.startsWith('ej'));
// console.log(engine);
// let power = cars.filter(value => value.power >300 && value.producer == 'subaru' && value.engine.startsWith('ej'));
// console.log(power);
// // let volume = cars.filter(value => value.volume <3 && value.producer == 'mercedes');
// // console.log(volume);
// let volume = cars.filter(value => value.volume > 2 && value.power >= 250);
// console.log(volume);
// let power = cars.filter(value => value.power > 250 && value.producer === 'bmw');
// console.log(power);

//6;
// let usersWithAddress = [
//   {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//   {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Konna', number: 1}},
//   {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//   {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Brzozowa', number: 90}},
//   {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street:   'Lipowa', number: 115}},
//   {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//   {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//   {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Morelowa', number: 43}},
//   {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//   {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//   {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
//   ];
//-- отсортировать его по id пользователей, отсортировать его по id пользователей в обратном опрядке.
// -- отсортировать его по возрасту пользователей, отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей,отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный

// let id = usersWithAddress.sort((a,b) => a.id -b.id );
// console.log(id);
// let id = usersWithAddress.sort((a,b) => b.id - a.id );
// console.log(id);
// let age = usersWithAddress.sort((a, b)=> b.age - a.age);
// console.log(age);
//
// let name = usersWithAddress.sort(function (a,b) {
//   if (a.name > b.name){
//     return -1;
//   }
//   else {
//     return 1;
//   }
// });
// console.log(name);
// let name2 = usersWithAddress.sort(function (a,b) {
//   if (b.name > a.name){
//     return -1;
//   }
//   else {
//     return 1;
//   }
// });
// console.log(name2);

// let address = usersWithAddress.sort(function (a,b) {
//   if (b.address.street > a.address.street){
//     return -1;
//   }
//   else {
//     return 1;
//   }
// });
// console.log(address);
// let number = usersWithAddress.sort(function (a,b) {
//   if (b.address.number > a.address.number){
//     return -1;
//   }
//   else {
//     return 1;
//   }
// });
// console.log(number);

// let age = usersWithAddress.filter(value => value.age <30);
// console.log(age);

// let filter = usersWithAddress.filter(value => value.status == false);
// console.log(filter);
// let filter = usersWithAddress.filter(value => value.status == false && value.age < 30);
// console.log(filter);
//
// let number = usersWithAddress.filter(value => value.address.number %2==0);
// console.log(number);

//7;\
//Зробили половину автопарку ремонт мотору, що збільшить
// потужність автомобілів на 10% (переприсвоєння змінної потужності).
//На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
//Для початку вкладіть всі наші створені автомобілі в масив cars.
let Mila = {name : 'Mila', age: 27, experience: 7};
let Yura = {name : 'Yura', age: 26, experience: 5};

function Cars (model, power, year, cost, driver) {
  this.model = model;
  this.year = year;
  this.power = power;
  this.cost = cost;
  this.driver = driver;
}
let audi = new Cars('audi', 220, 2008, 10000, Mila);
let porsche = new Cars('porsche', 200, 1969, 90000, Yura);
let tesla = new Cars('tesla', 350, 2018, 1500000, Yura);
let bmw = new Cars('bmw', 280, 2002, 2450000, Mila);
let volga = new Cars('volga', 120, 1990, 2000, Yura);

let autoPark = [audi, porsche, tesla, bmw, volga];

// function newPower (array){
//   for (let i=0; i< array.length; i++) {
//    console.log(array[i].power += array[i].power * 0.1);
//   }
// }
// newPower(autoPark);

let newDriver = [
  {name : 'Mia', age: 31, experience: 3},
  {name : 'Vlad', age: 33, experience: 4},
  {name : 'Merry', age: 25, experience: 1}
];
for (let i = 0; i < newDriver.length; i++) {
  for (let j = 0; j < autoPark.length; j++) {
    if(i==j) {
      autoPark[j].driver = newDriver[i];
    }
  }
}
console.log(newDriver);
//Для початку вкладіть всі наші створені автомобілі в масив cars.
let carsArray =[];
for (let newDriver of autoPark){
  carsArray.push(newDriver);
}
console.log(carsArray);
//Далі необхідно рати кожну другу машинку (цикл з кроком в 2),
// та робити їй підвищення потужності двигуна на 10% та ціну на 5%.

function carPower (index){
  for (let i=0; i< index.length; i++) {
    if(  i %2 == 0) {
      console.log(index[i].power += index[i].power * 0.1, index[i].cost += index[i].cost * 0.5);
    }
  }
}
carPower(autoPark);
//Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років,
// але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації,
// що збільшить йому досвід на 1 рік.

let experience = autoPark.filter(value => value.driver.experience < 7 && value.driver.age >25).map( item =>{
  item.driver.experience = item.driver.experience+1;
  return item
});
console.log(experience);
//Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let sum =0;
for (let car of carsArray) {
  sum = sum + car.cost;
}
console.log(sum);


//8;
//Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и
// наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10.
// Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента.
// Если такого элемента нет в массиве, выведите -1.
// Пример:
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
let ar = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
let key =+prompt('key');

console.log(ar.indexOf(key));
console.log(ar.lastIndexOf(key));

