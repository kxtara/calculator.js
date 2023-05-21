let total = document.querySelector(".total");
let clear = document.querySelector(".clear");
let button = document.querySelectorAll("button");
let divide = document.querySelector(".btn-divide");
let equal = document.querySelector(".btn-equal");
var test;

// for each button that's clicked
button.forEach((button) => {
  button.addEventListener("click", (event) => {
    test = total.textContent += button.value;
  });
});

// clear the total div
clear.addEventListener("click", (event) => {
  total.textContent = 0;
});

// just a test case
divide.addEventListener("click", (event) => {
  test = total.textContent += "/";
});

/*

querySelectorAll: collects and stores all refrences to all the input elements.

The forEach() method is used to listen for an event on each individual button

Then we add the value of the button to the total div

*/
