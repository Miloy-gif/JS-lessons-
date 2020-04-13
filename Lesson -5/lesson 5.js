// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
//   this.nationality = "English";
// }
//
// let myFather = new Person("John", "Doe", 50, "blue");
// let myMother = new Person("Sally", "Rally", 48, "green");
//
// document.getElementById("nav").innerHTML =
//   "My father is " + myFather.nationality + ". My mother is " + myMother.nationality;

//1;Створити функцію конструктор для об'єкту який описує теги:
// -Властивості, назва тегу, опис його дій,масив з атрибутами (2-3 атрибути максимум).
// Кожен атрибут описати як окремий який буде містити: назву атрибуту, опис дії атрибуту.
//   function a () {
//   this.tagName = 'a';
//   this.action = 'Тег <a> предназначен для создания ссылок.';
//   this.attrs = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к тексту ссылки.'},
//   ];
// }
//
//  function Div() {
//   this.tagName = 'div';
//   this.action = ' Элимент <div> блочный элемент, предназначен для выделения фрагмента документа';
//   this.attrs = [
//     {titleOfAttr: 'align', actionOfAttr: 'Выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
//     {titleOfAttr: 'class',
//       actionOfAttr: 'Задает стилевой класс, который позволяет связать тег со стилевым оформлением'
//     },
//   ];
// }
//
// function input() {
//   this.tagName = 'input';
//   this.action = ' <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков';
//   this.attrs = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к элементу с помощью комбинации клавиш.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
//     {titleOfAttr: 'type', actionOfAttr: 'Определяющий вид элемента, основной атрибут тега <input>'},
//   ];
// }
//
// function select() {
//   this.tagName = 'select';
//   this.action = ' <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, ' +
//     'список с одним или множественным выбором';
//   this.attrs = [
//     {titleOfAttr: 'accesskey', actionOfAttr:'Позволяет перейти к списку с помощью некоторого сочетания клавиш'},
//     {titleOfAttr: 'size', actionOfAttr: 'Количество отображаемых строк списка.'},
//     {titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
//   ];
// }
//2;
//-  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту

//  class teg {
//   constructor(nameTag, action, attrs, form) {
//     this.nameTag = nameTag;
//     this.action= action;
//     this.attrs = attrs;
//     this.form = form;
//   }
//      sayTeg(){
//     document.write()
//     console.log(this.nameTag + ' позволяет создать элемент интерфейса в виде раскрывающегося списка, ' +
//       'список с одним или множественным выбором ');
//   }
//  }
//
// const selections = new teg('select', 'action', 'attrs', 'form');
// console.log(selections);



//4;
//Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//info () - яка виводить всю інформацію про автомобіль
//increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//changeYear (newValue) - змінює рік випуску на значення newValue
//addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
//  function ca99r( model, producer, year, maxSpeed, engine, driver) {
//    this.model = model;
//    this.producer = producer;
//    this.year = year;
//    this.maxSpeed = maxSpeed;
//    this.engine = engine;
//    this.driver = driver;
//
//    this.weDrive = function () {
//      console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' на годину')
//    };
//    this.inform = function () {
//      console.log('Інформація про авто: ' + this.model + ', ' + this.producer + ', ' + this.year + ', ' + this.maxSpeed +
//        ', ' + this.engine +', '+  this.driver+ ';')
//    };
//
//    this.increaseMaxSpeed = function (newSpeed) {
//      this.maxSpeed += newSpeed;
//      console.log(this.maxSpeed);
//    };
//
//    this.changeYear = function (newValue) {
//      this.year = newValue;
//      console.log(this.year);
//    };
//
//    this.opelDriver = function addDriver(driver) {
//      this.driver = driver;
//      console.log(driver);
//    };
//  }
//
// let mycars = new ca99r('Audi', 'Audi TSi', 2008, 180, 1.8, 'Sergei');
// let opel = new ca99r('Opel', 'Adam Opel AG', 2012, 160, 1.6, 'Yura');
//
// mycars.weDrive();
// opel.inform();
// opel.increaseMaxSpeed(45);
// opel.changeYear(2002);
// opel.opelDriver('Mila');
//

//3;
//- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//    додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в
// поточний об'єкт car
//
// let car = {
//   model: 'Audi',
//   producer: 'Audi TSi',
//   year : 2009,
//   maxSpeed : 180,
//   engine: 1.8,
//   driverCar :' ',
//
//   drive() {
//     console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' на годину');
//   },
//   info (){
//     console.log(car);
//   },
//   increaseMaxSpeed (newSpeed){
//     this.maxSpeed += newSpeed;
//       console.log(this.maxSpeed);
//   },
//    changeYear (newValue){
//     this.year = newValue;
//     console.log(this.year);
//   },
//   addDriver (driver){
//     this.driverCar = driver;
//     console.log(this.driverCar);
//   }
//
// };
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(40);
// car.changeYear(2012);
// car.addDriver('Masha');


//5;
//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в
// поточний об'єкт car

// class CarGenerator {
//   constructor(model, producer, year, maxSpeed, engine, driver) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.driver = driver;
//   }
//     drive(){
//       console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' на годину');
//     }
//       info () {
//         console.log(this);
//       }
//
//      increaseMaxSpeed (newSpeed){
//       this.maxSpeed += newSpeed;
//      console.log(this.maxSpeed);
//     }
//
//     changeYear (newValue) {
//     this.year = newValue;
//     console.log(this.year);
//   }
//
//      addDriver (carDriver) {
//       this.driver = carDriver;
//       console.log(this.driver);
//     }
//
// }
// let zapor = new CarGenerator('Opel', 'Adam Opel AG', 1989, 120, 1.2, 'Sergei');
// zapor.drive();
// zapor.info();
// zapor.increaseMaxSpeed(60);
// zapor.changeYear(2000);
// zapor.addDriver('Yura');

//6;
//створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Cinderella{
  constructor(name, age, heelSize) {
    this.name = name || 'No name';
    this.age = age || 'No age';
    this.heelSize = heelSize || 'No heelSize';
  }
}
let girl = new Cinderella ('Ira', 22, 37);
let girl2 = new Cinderella ('Masha', 28, 38);
let girl3 = new Cinderella ('Lena', 27, 38);
let girl4= new Cinderella ('Katy', 23, 37,5);
let girl5= new Cinderella ('Merry', 24, 36);
let arrCinderella = [girl,girl2,girl3,girl4,girl5];

class Prince {
  constructor(name, age, sizeFoot) {
    this.name = name || 'No name';
    this.age = age || 'No age';
    this.sizeFoot = sizeFoot || 'No sizeFoot';
  }
   filtrCenderella(array){
    let filtr = array.find(Cinderella => Cinderella.heelSize === this.sizeFoot);
     filtr
     ?console.log('My Cinderella ' + filtr.name)
     :console.log('I did not fond my Cinderella');
 }
}
 let man = new Prince('Yura', 28, 35);
 man.filtrCenderella(arrCinderella);

