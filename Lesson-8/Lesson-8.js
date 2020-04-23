//1;- Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
let formText = document.forms.formOne;
let commentsOne = formText.opinie;
if (localStorage.getItem('comments')) {
  commentsOne.value = localStorage.getItem('comments');
}
commentsOne.addEventListener('input', e => {
  localStorage.setItem('comments',commentsOne.value);
});
//2; - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
let h2 = document.getElementById('h2');
console.log(h2);
h2.style.color = 'red';
h2.style.fontFamily = 'Bradley Hand, cursive';
let contForm = document.getElementById('contactForm');
contForm.style.fontFamily = 'Bradley Hand, cursive';


let formTwo = document.forms.contactForm;

formTwo.addEventListener('input', e => {
  let elem = e.target;
  if (elem.type === 'radio' || elem.type === 'checkbox' || elem.tagName === 'SELECT') return;
  localStorage.setItem(elem.name, elem.value);
});

formTwo.addEventListener('change', e => {
  let elem = e.target;
  if (elem.type !== 'radio' && elem.type !== 'checkbox' && elem.tagName !== 'SELECT') return;
  if (elem.tagName === 'SELECT') localStorage.setItem(elem.name, elem.value);
  if (elem.type === 'checkbox') localStorage.setItem(elem.name, elem.checked);
  if (elem.type === 'radio') localStorage.setItem(elem.name, elem.id);
});


for (let elem of formTwo.querySelectorAll('[name]')) {
  if (elem.type !== 'radio' || elem.type !== 'checkbox') {
    if (localStorage.getItem(elem.name)) {
      elem.value = localStorage.getItem(elem.name);
    }
  }
  if (elem.type === 'checkbox') {
    if (localStorage.getItem(elem.name)) {
      elem.checked = JSON.parse(localStorage.getItem(elem.name));
    }
  }
  if (elem.type === 'radio') {
    if (localStorage.getItem(elem.name)) {
      const radio = document.getElementById(localStorage.getItem(elem.name));
      radio.checked = true;
    }
  }
}
// localStorage.clear();

//3; -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
let textForm = document.forms.formText;
let comment = textForm.comments;
let btnTransmit = textForm.save;

let buttonLeft = document.createElement('button');
buttonLeft.id = 'buttonLeft';
buttonLeft.textContent = '◄';

let buttonRight = document.createElement('button');
buttonRight.id = 'buttonRight';
buttonRight.textContent = '►';

let btnContainer = document.createElement('div');
btnContainer.append(buttonLeft,buttonRight);
btnContainer.hidden = true;
textForm.prepend(btnContainer);



let index = 0; //текущий индекс для кнопок стрелок
// если страница была перезагружена
// если хранилище существует
// установить в поле textarea последнее введенное значение
if (localStorage.getItem('storage')) {
  let storage = JSON.parse(localStorage.getItem('storage'));
  comment.value = storage[storage.length-1].comment;
  //текущий индекс для кнопок стрелок равен индексу последнего коментария в массиве
  //кнопка вперед теперь показывать последний коментарий
  index = storage.length-1;
}

btnTransmit.addEventListener('click', e => {
  if (btnContainer.hidden) btnContainer.hidden = false;
  //если хранилище не создано то создать его как массив объектов
  if (!localStorage.getItem('storage') && comment.value.length) {
    let storage = [];
    storage.push({comment:comment.value});
    //создать хранилище с помещенным в него первым комментом
    localStorage.setItem('storage', JSON.stringify(storage));
  }
  else {
    //если в поле было введено значение
    if (!comment.value.length) return;
    //получаем хранилище
    let storage = JSON.parse(localStorage.getItem('storage'));
    //в конец массива помещаем текущий коммент
    storage.push({comment:comment.value});
    //перезаписываем хранилище
    localStorage.setItem('storage', JSON.stringify(storage));
    //кнопка вперед теперь показывать последний коментарий
    index = storage.length-1;
  }
});



buttonLeft.addEventListener('click', e => {
  const storage = JSON.parse(localStorage.getItem('storage'));
  --index;
  if (index < 0) index = 0;
  //получить коммент по индексу вставить в textarea
  comment.value = storage[index].comment;

  e.preventDefault();
});

buttonRight.addEventListener('click', e => {
  const storage = JSON.parse(localStorage.getItem('storage'));
  ++index;
  if (index > JSON.parse(localStorage.getItem('storage')).length-1) index = JSON.parse(localStorage.getItem('storage')).length-1;
  //получить коммент по индексу вставить в textarea
  comment.value = storage[index].comment;

  e.preventDefault();

});
// localStorage.clear();

// 4;- Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму. Каждому контакту добавить кнопку для удаления контакта.
// Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все
// необходимые инпуты для редактирования, которые уже заполнены данными объекта
// ........................

//5;
// localStorage.setItem('myCat', 'Tom');
// let cat = localStorage.getItem('myCat');
// // localStorage.removeItem('myCat'); // вернёт undefined;
// localStorage.clear();
//
//
// function populateStorage() {
//   localStorage.setItem('bgcolor', 'red');
//   localStorage.setItem('font', 'Helvetica');
//   localStorage.setItem('image', 'myCat.png');
// }
// populateStorage();
// localStorage.clear();



let add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter;}
})();

function myFunction(){
  document.getElementById("demo").innerHTML = add();
}
