let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let fullDate = `${day}.${month}.${year}`;
console.log(fullDate);
// 9.06.2021

let date1 = new Date().toJSON().slice(0, 10);
console.log(date1);
// 2021-06-09

let date3 = new Date().toUTCString().slice(5, 16);
console.log(date3);
// 09 Ju11 2022

let date4 = new Date().toLocaleDateString('fr');
console.log(date4);