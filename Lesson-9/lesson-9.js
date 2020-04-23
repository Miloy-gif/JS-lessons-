//Зробити свій розпоряжок дня.
// Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
// Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
// Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне
// виконання.
// Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
// Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави -
// Працюєте - Поїхали до дому - Повчились - Лягли спати.
// Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції
// доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.
let h4 = document.getElementById('h4');
h4.style.color = 'red';
h4.style.fontFamily = 'Andale Mono, monospace';
h4.style.fontSize = '24px';
//
// function byDayYura(day) {
//   return new Promise((resolve, reject) =>  {
//    setTimeout (() =>{
//      Math.random() > 0.4
//        ?resolve(day)
//        :reject('Get up at 6 o’clock')
//     }, 2000)
//   })
// }
// function breakfast(eats) {
//   console.log('for breakfast eat cereal with milk');
//   return new Promise((resolve, reject) =>  {
//     setTimeout (() =>{
//       Math.random() > 0.4
//         ?resolve(eats)
//         :reject('the refrigerator did not work')
//     }, 2000)
//   })
// }
// function dressed(appearance) {
//   console.log('dressed in a shirt and jeans');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       Math.random() > 0.4
//         ? resolve(appearance)
//         : reject('the shirt was dirty')
//     }, 2000)
//   })
// }
// function trainWork(goWork) {
//   console.log('I\'m going to work, there are no traffic jams');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       Math.random() > 0.4
//         ? resolve(goWork)
//         : reject('stuck in an elevator')
//     }, 2000)
//   })
// }
// function workDay(working) {
//   console.log('I\'m working now');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       Math.random() > 0.4
//         ? resolve(working)
//         : reject('many projects')
//     }, 2000)
//   })
// }
// function dinnerBreak(dinner) {
//   console.log('running to lunch');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       Math.random() > 0.4
//         ? resolve(dinner)
//         : reject('lunch is over')
//     }, 2000)
//   })
// }
//
//
// byDayYura('alarm clock')
//
// .then((result) => {
//   console.log(result);
//   return breakfast ('No milk in the fridge')
// })
//   .then((result) => {
//     console.log(result);
//     return dressed ('jeans are torn')
//   })
//   .then((result) => {
//     console.log(result);
//     return workDay ('tik-tok')
//   })
//   .then((result) => {
//     console.log(result);
//     return dinnerBreak ('no dinner')
//   })
//
// .catch((error) =>{
//   console.log(error);
// });
//

//2;
// async function dayMia() {
//   await new Promise( resolve => {
//     console.log('Ring an alarm ...');
//     setTimeout(resolve, 1000)
//   });
//
//   await new Promise((resolve) => {
//     console.log('Get up at 9 o’clock');
//     setTimeout(resolve, 2000)
//   });
//
//   await new Promise((resolve) => {
//     console.log('for breakfast eat cereal with milk');
//     setTimeout(resolve, 2000)
//   });
//
//   await new Promise((resolve) => {
//     console.log('dressed in a shirt and jeans');
//     setTimeout(resolve, 2000)
//   });
//   await new Promise((resolve) => {
//     console.log('I\'m working now');
//     setTimeout(resolve, 3000)
//   });
//
//   await new Promise((resolve) => {
//     console.log('I have coffee during the break');
//     setTimeout(resolve, 3000)
//   });
//   await new Promise((resolve) => {
//     console.log('going home by car');
//     setTimeout(resolve, 3000)
//   });
//   await new Promise((resolve) => {
//     console.log('I\'m going to the pool');
//     setTimeout(resolve, 4000)
//   });
//   await new Promise((resolve) => {
//     console.log('with husband go to the cinema');
//     setTimeout(resolve, 4000)
//   });
//   await new Promise((resolve) => {
//     console.log('we have dinner in a cafe');
//     setTimeout(resolve, 4000)
//   });
//   await new Promise((resolve) => {
//     console.log('we go home to sleep');
//     setTimeout(resolve, 4000)
//   });
// }
// dayMia();
