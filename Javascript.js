var count = (function () {
  var _counter = 0;
  return function () {
    return (_counter += 1);
  };
})();

count();
count();
count();
count();
console.log(count());

console.log("jattends !! 8 secondes pour afficher le i");
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 8000);
}

console.log(count());
