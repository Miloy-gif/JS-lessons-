// //1;
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 29,
  eyeColor: "blue"
};

let myCar = {
  make: 'Ford',
  model :'Mustang',
  year : 1969
};

 let boyfriend={
   name : 'Yura',
   body : 'sports',
   age : 27
 };

 let myCupboard= {
   color: 'brown',
   size : 'big',
   years : 3
 };

 let dog ={
   nickname :'Bud',
   age: 4,
   colors : 'white-brown'
};
// //
// // //4;
// // let arr = [dog, myCupboard, boyfriend, myCar,person];
// //  for (let arrElement of arr) {
// //    console.log(Object.keys(arrElement));
// //  }
//
//
//  //2,3;
// //
// let man ={
//   name: 'Vlad',
//   skills: ['java','js'],
//   wife:{
//     name: 'Mia',
//     age: 31
//   }
// };
//
// let fruits ={
//   name:'kokos',
//   age: 29,
//   color:['brown','white'],
//   brother:{
//     name:'ananas',
//     taste:'sweet',
//     weight: 3
//   }
// };
// console.log(Object.keys(fruits));
// for (let key in fruits) {
//   console.log(key);
// }
//
// let human = {
//   name: 'Alex',
//   age: 25,
//   work: ['sportsman', 'programmer'],
//   sports: {
//     skills: ['swimming', 'boxing'],
//     victory: 5
//   }
// };
//3;
// console.log(Object.keys(human));
// console.log('human');
// console.log(human);
//
//  for (let key in human) {
//   console.log(key);
// }



//5;
//    let tenCars = [
//      {
//        model: 'audi',
//        year: 2008,
//        color: 'silver',
//        power: 180
//      },
//      {
//        model : 'tesla',
//        year : 2017,
//        power: 350,
//        color: 'black'
//      },
//      {
//        model: 'bmw',
//        year :2010,
//        power: 220,
//        color: 'red'
//       }
//       ];
//
// //
//  //6,7;
//
//   let cities  = [
//    {
//   city: 'Paris',
//   population: 802400,
//   country: 'France',
//   region:'Central'
//    },
//    {
//   city: 'Rome',
//   population: 7670000,
//   country: 'Italy',
//   region:'Monti'
//     },
//    {
//   city: 'Barcelona',
//   population: 4604000,
//   country: 'Spain',
//   region: 'Sants'
// }
// ];

//8;
// let i=0;
// while (i <tenCars.length){
//   console.log(tenCars[i]);
//   i++;
// }
// let i=0;
// while (i <cities.length){
//   console.log(cities[i]);
//   i++;
// }


//9;
// for (let i=0; i<tenCars.length; i++ ) {
//   console.log(i);
//   console.log(tenCars);
// }

// for (let i=0; i<cities.length; i++ ) {
//   console.log(i);
//   console.log(cities[i].country);
//   console.log(cities[i].region);
// }

//10;
// for (let userArray of tenCars){
//   console.log(userArray);
// }
// for (let userCities of cities){
//   console.log(userCities);
// }


//11;
// console.log(JSON.stringify(myCar));
// console.log(JSON.stringify(person));
// console.log(JSON.stringify(dog));
// console.log(JSON.stringify(myCupboard));
// console.log(JSON.stringify(boyfriend));

//12;
// let jsonDog= JSON.stringify(dog);
// console.log(JSON.parse(jsonDog));
//
// let jsonMyCar =JSON.stringify(myCar);
// console.log(JSON.parse(jsonMyCar));
//
// let jsonPerson = JSON.stringify(person);
// console.log(JSON.parse(jsonPerson));
//
// let jsonBoyfriend = JSON.stringify(boyfriend);
// console.log(JSON.parse(jsonBoyfriend));
//
// let jsonMyCupboard = JSON.stringify(myCupboard);
// console.log(JSON.parse(jsonMyCupboard));

//13;
// for (let userArray of tenCars){
//     console.log(JSON.stringify(userArray));
//  }
//14;
// for (let userCities of cities){
//   console.log(JSON.stringify(userCities));
// }

//15;
// let jsonCities=[];
// for (let userCities of cities){
//   console.log(JSON.stringify(userCities));
// jsonCities.push(JSON.stringify(userCities));
// }
// console.log(jsonCities);

 // let jsonCars = [];
 // for (let car of tenCars) {
 //   jsonCars.push(JSON.stringify(car));
 //   console.log(JSON.stringify(car));
 // }
 //  console.log(jsonCars);


//16,17;
// let skillsArray =[];
// let users = [
//   {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//   {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//   {name: 'kolya', age: 29, status: true, skills: ['mysql', 'mongo']},
//   {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//   {name: 'max', age: 30, status: true, skills: ['mysql', 'mongo']}
//   ];
// for (let i=0; i<users.length; i++) {
//   let user = users[i];
//   // console.log(user.name);
//
//   for (let j = 0; j < user.skills.length; j++) {
//     let skill = user.skills[j];
//     skillsArray.push(skill);
//     // console.log(skill);
//   }
// }
// console.log(skillsArray);


//16,17-> 18;
// for (let i = 0; i < users.length; i++) {
//     const userElement = users[i];
//     for (let j = 0; j < userElement.skills.length; j++) {
//         console.log(userElement.skills[j]);
//     }
// }

//19;
let users = [
       {
    name: 'Vlad',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'Yura',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'Kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
},
    {
    name: 'Max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

let addrArr = [];
for (let i = 0; i < users.length; i++) {
    const user = users[i];
  addrArr.push(user.address);
}
console.log(addrArr);

//20;
for (let i = 0; i < users.length; i++) {
    let div =document.createElement('div');
    div.innerHTML = `${users[i].name} ${users[i].age} ${users[i].status} ${users[i].address.city}
    ${users[i].address.country} ${users[i].address.street} ${users[i].address.houseNumber}`;
    div.classList.add('user');
    div.classList.add('user${i+1}');
    document.body.appendChild(div);
}
//21;
for (let user of users) {
    let outerDiv = document.createElement('div');
    for (let field in user) {
        let innerDiv = document.createElement('div');
        innerDiv.innerHTML = `${user[field]}`;
        outerDiv.appendChild(innerDiv);
    }
    document.body.appendChild(outerDiv);
}

//22;
for (let user of users) {
    let outerDiv = document.createElement('div');
    for (let field in user) {
        if (typeof user[field] == 'string' || typeof user[field] == 'number' || typeof user[field] == 'boolean' ) {
            let innerDiv = document.createElement('div');
            innerDiv.innerHTML = `${user[field]}`;
            outerDiv.appendChild(innerDiv);
        }

        else if (typeof user[field] =='object' ) {
            let innerDiv = document.createElement('div');
            let addDiv = document.createElement('div');
            addDiv.innerHTML = `${user[field].city} ${user[field].country} ${user[field].street} ${user[field].houseNumber}`;
            innerDiv.appendChild(addDiv);
            outerDiv.appendChild(innerDiv);
        } else break;
    }
    document.body.appendChild(outerDiv);
}
