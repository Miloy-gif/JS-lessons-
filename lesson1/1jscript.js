
//
//
// function changeColor() {
//   var div = document.getElementById( 'block' );
//
//   var color = div.style.backgroundColor;
//   if (color === "black")
//     div.style. = "red";
//   else if (!color || color === "red")
//     div.style.backgroundColor = "black";
//
// }
//

function getInputValue(){
  // Selecting the input element and get its value
  let country = document.getElementById("myInput").value;

  // Displaying the value

let weather;
let food;
let currency;

if(country === 'Англия') {
  weather = 'ужасная';
  food = 'сытная';
  currency = 'фунты стерлингов';
}

if(country === 'Франция') {
  weather = 'хорошая';
  food = 'потрясающая, но не всегда вегетарианская';
  currency = 'маленькая, смешная и цветная';
}

if(country === 'Германия') {
  weather = 'средняя';
  food = 'лучшие колбаски';
  currency = 'маленькая, смешная и цветная';
}

var message = 'это ' + country + ', погода ' +
  weather + ', еда ' + food + ' и ' +
  'валюта ' + currency;

let message2 = document.getElementById('message');

message2.innerHTML=message;
}

function checkPassword(){
  let password = document.getElementById('password').value;

  if(password.length < 4){
    alert('Пароль говно');
    let message2=document.getElementById('message');
    message2.innerHTML="Пароль говно";
  }

  else{
  let message2=document.getElementById('message');
  message2.innerHTML="OK";
  }

}


let pow= Math.pow(11,2);
console.log(pow);
