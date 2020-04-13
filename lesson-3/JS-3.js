//1;
/*
let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(arr.length);

//7;
console.log('do ' + arr);
for (let i=0; i<arr.length; i++) {
  if( arr[i]%3 == 0) {
    arr[i] = 'okten';
  }
}
console.log('before ' + arr);
/*
//2;
let i = 0;
while (i <= arr.length){
  document.write(i+ '<br>');
  i++;
}
document.write('<br>');

/*
 */
//3;
 //for(let i =0; i < arr.length; i++){
 //  document.write(arr[i]+'<br>');
 //}

//document.write('<br>');
 /*
for (let i=0; i<arr.length; i++) {
  if( i%2 != 0) {
    document.write(arr[i] + '<br>');
  }
}
document.write('<br>');
for (let i = arr.length; i<=0; i--){
  if (i%2!=0) {
    document.write(i);
  }
}
/*
//5;
for (let i=0; i<arr.length; i++) {
  if( i%2 == 0) {
    document.write(arr[i] + '<br>');
  }
}
document.write('<br>');
/*
//8;
arr.reverse();
console.log(arr);
document.write(arr);

/*
//4;(while)
let i=0;
while (i < arr.length){
  if(i%2 != 0) {
    console.log('Непарный индекс ' + i + ' ' + arr[i]);
  }
  i++;
}

//6;
let i=0;
while (i < arr.length){
  if(i%2 == 0) {
    console.log('Парный индекс ' + i + ' ' + arr[i]);
  }
  i++;
}
/*
  */

//9;
/*
//10;
let arr = [];
for (let i=0; i<50; i++) {
  if( i%2 == 0) {
    arr.push(i);
  }
  else {
    arr.push(i+111);
  }
}
console.log(arr);

 */
// let arr = [];
// for (let i=0; i<50; i++) {
//   if( i%2 != 0) {
//     arr.push(i);
//   }
//   else {
//     arr.push(i+111);
//   }
// }
// console.log(arr);


let arr = [];
for (let i=0; i<10; i++){
  let random = Math.random();
  arr.push(random);
}
console.log(arr);

