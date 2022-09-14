// Event Capturing In JavaScript
<div id="parent">
  <button id="child">Child</button>
</div>;
var parent = document.querySelector("#parent");
var child = document.querySelector("#child");
parent.addEventlistener(
  "click",
  function () {
    console.log("Parent clicked");
  },
  true
);
child.addEventlistener("click", function () {
  console.log("Child clicked");
});
// Parent Clicked => Child Clicked
