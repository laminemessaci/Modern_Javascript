// charAt()
var txt = "Hello World";
console.log(txt.charAt(0));
//prints 'H'

// concat()
var str1 = "Hello ";
var str2 = "codi ngtute ! ";
console.log(str1.concat(str2));
//prints "Hello codingtute!"

// indexOf()
var txt = "Lets find where 'pen' occurs!";
console.log(txt.indexOf("pen"));
// prints 17

// lastlndexOf()
var str = "A dev knows a dev";
var pos = str.lastIndexOf("dev");
//prints 14

//replace()
var str = "Hello Dev 1";
console.log(str.replace("Dev", "World"));
//prints "Hello World"

//search()
var str = "hello dev!";
console.log(str.search("dev"));
//prints 6

// slice(start, end)
var str = "Developers world! ";
console.log(str.slice(0, 10));
//prints "Developers"

//substr(start, length)
var s = "JavaScript";
console.log(s.substr(4, 6));
//prints "Script"

//substring( start, end)
var str = "Hello dev!";
console.log(str.substring(1, 4));
// prints ell

//toUpperCase()
var sentence = "CodingTute";
console.log(sentence.toUpperCase());
//prints "CODINGTUTE"

// valueOf()
const str3 = new String("test");
typeof str3; // 'abject'
s.valueOf(); // 'test'
typeof str3.valueOf(); // 'string'
//trim()
var str8 = "Trim Bath Side";
console.log(str8.trim());
//prints "Trim Both Side"

// toString()
var num = 15;
console.log(num.toString());
//prints "15"

// includes()

var str9 = "My name is codîngtute.";
console.log(str9.includes("name"));
//prints true

//charCodeAt()
var str4 = "TEST";
str4.charCodeAt(0); // returns 84

//match()
let str6 = "lopersum lopersum lopersum lopersum. ";
console.log(str6.match(/sum/g));
//prints

//split()

let str7 = "1 2 3 4 5";
console.log(str7.split(","));
//prints ["1" ,"2", "3","4","5"]

// tolowerCase()
let sentence2 = "CodingTute";
console.log(sentence2.toLowerCase());
//prints "codingtute"
