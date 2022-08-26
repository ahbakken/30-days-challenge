//1 - variables and check typeof
let firstName = "Astrid";
let lastName = "Bakken";
let city = "Oslo";
let age = 27;
let isMarried = false;
let year = 2022;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
//2
console.log(typeof "10" == typeof 10);
//3
console.log(parseInt("9.8") == 10);
//4 - 3 truthy vs 3 falsy
console.log("1" + "0" == 10);
console.log(parseInt("10.4") === 10);
console.log(firstName == "Astrid");
console.log("5" + "5" == 10);
console.log(age == year);
console.log(toString(10) == 10);
//5 guess true vs false
console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //false - it's true
console.log(4 != 4); //false
console.log(4 !== 4); //true - it's false
console.log(4 != "4"); //false
console.log(4 == "4"); //true
console.log(4 === "4"); //false
//6 guess true vs false, round 2
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!false); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === "4")); //true
let str1 = "dragon";
let str2 = "python";
console.log(str1.includes("on") == str2.includes("on")); //true
//7
const now = new Date();
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("#result1").innerHTML = now.getFullYear();
});
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("#result2").innerHTML = now.getMonth();
});
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("#result3").innerHTML = now.getDate();
});
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("#result4").innerHTML = now.getDay();
});
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("#result5").innerHTML = now.getHours();
});
document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("#result6").innerHTML = now.getMinutes();
});

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("#result7").innerHTML = Date.now();
});
