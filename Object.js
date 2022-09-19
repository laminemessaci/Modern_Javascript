//Object.entries()
const credits = {
  producer: "Open Replay",
  editor: "Federico",
  assistant: "John",
};
const arr = Object.entries(credits);
console.log(arr);

Output: [
  ["producer", "Open Replay"],
  ["editor", "Federico"],
  ["assistant", "John"],
];

// Object.values()
const credits1 = {
  producer: "Open Replay",
  editor: "Federico",
  assistant: "John",
};

const arr1 = Object.values(credits1);
console.log(arr1);

Output: ["Open Replay", "Federico", "John"];

//Object loop shorthand
const arr2 = ["Yes", "No", "Maybe"];

// Longhand
for (let i = 0; i < arr2.length; i++) {
  console.log("Here is item: ", arr2[i]);
}

// Shorthand
for (let str of arr2) {
  console.log("Here is item: ", str);
}

arr2.forEach((str) => {
  console.log("Here is item: ", str);
});

for (let index in arr2) {
  console.log(`Item at index ${index} is ${arr2[index]}`);
}

// For object literals
const obj = { a: 1, b: 3, c: 5 };

for (let key in obj) {
  console.log(`Value at key ${key} is ${obj[key]}`);
}

//Object property shorthand
const a = 1;
const b = 2;
const c = 3;

// Longhand
const obj2 = {
  a: a,
  b: b,
  c: c,
};

// Shorthand
// const obj2 = { a, b, c };

// Javascript For Loop Shorthand
// Longhand:
const fruits = ['mango', 'peach', 'banana'];

for (let i = 0; i < fruits.length; i++) { /* something */ }

// Shorthand:
for (let fruit of fruits) { /* something */  }

const obj3 = { continent: "Africa", country: "Ghana", city: "Accra" };
for (let key in obj3) console.log(key); // output: continent, country, city

//Shorthand for Array.forEach:
function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}
[2, 4, 6].forEach(logArrayElements);
// a[0] = 2
// a[1] = 4
// a[2] = 6