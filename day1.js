const test = () => {
  let text = "Day 1 Exercises";
  return text;
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("#result").innerHTML = test();
});

// comments can make code redable
// Welcome to 30DaysOfJavaScript

/* comments can make code readable, easy to reuse and informative sss
 */

let v4; //undefined
let v5 = 12; //number
let v6 = "Text"; //string
let v7 = true; //boolean
let v8 = null; //null, object

console.log(typeof v4);
console.log(typeof v5);
console.log(typeof v6);
console.log(typeof v7);
console.log(typeof v8);

let name1;
let lastName1;
let maritalStatus1;
let country1;

let name2, lastName2, maritalStatus2, country2;
let myAge = 345;
let yourAge = 2;
console.log("I am " + myAge + " years old");
console.log("You are " + yourAge + " years old");
