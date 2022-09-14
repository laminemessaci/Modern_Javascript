// Known as a Named function and most common.
function Example() {
  return null;
}
// Named functions have name property
// But not all web browsers (i.e. not IE)
// WARNING: Bundlers can mangle the name!
console.log(Example.name);
// Known as Nameless function. Can't be called directly.
// Must use variable or expression to call it.
(function () {
  return null;
})();
// Known as an Arrow function.
// All these are the exact same.
(x) => {
  return x * 2;
};
(x) => x * 2;

// Arrow functions LOCK the value of 11 this''

// WARNING: Some event listeners set "this" to target!
window.num = 2020;
const add = (x) => this.num + x;
console.log(add(l)); // prints 2021
// call, apply and bind have no effect on ''this''
const obj = { num: 1990 };
console.log(add.call(obj, 1)); // prints 2021
console.log(add.apply(obj, [1])); // prints 2021
console.log(add.bind(obj)(l)); // prints 2021
// any function can be assigned to a variable
const a = function (x) {
  return x + 1000;
};
const b = function Example2() {
  return x + 1000;
};
const c = (x) => x + 1000;
// variable name can be confusing? Don't use it!
console.log(a.name); // prints II a II
console.log(b.name); // prints "Example2"
console.log(c.name); // prints rr C 11
