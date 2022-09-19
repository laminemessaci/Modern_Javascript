const restaurant = {
  name: "Classico Italiano",
  menu: ["Garlic", "Bread", "Salad", "Pizza", "Pasta"],
  openingHours: {
    friday: { open: 11, close: 24 },
    saturday: { open: 12, close: 23 },
  },
};

// Longhand
console.log("value of friday in restaurant:", restaurant.openingHours.friday);
console.log("value of name in restaurant:", restaurant.name);

// Shorthand
const { name, openingHours } = restaurant;
const {
  openingHours: { friday },
} = restaurant;

//we can go further and get the value of open in friday
const {
  openingHours: {
    friday: { open },
  },
} = restaurant;

console.log(name, friday, open);

//Arrays Destructuring
const arr = [2, 3, 4];

// Longhand
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// Shorthand
const [a, b, c] = arr;
//Spread Operator

const odd = [3, 5, 7];
const array = [1, 2, 3, 4];

// Longhand
// const nums = [2, 4, 6].concat(odd);
// const array2 = array.slice();

// Shorthand
const nums = [2, 4, 6, ...odd];
const array2 = [...arr];

//Unlike the concat() function, you can use the spread 
//operator to insert an array anywhere inside another array.
const odd1 = [3, 5, 7];
const nums1 = [2, ...odd, 4, 6]; // 2 3 5 7 4 6