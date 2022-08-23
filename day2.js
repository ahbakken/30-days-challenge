// Day 2 level 1
let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3, challenge.length));
console.log(challenge.substring(0, 3));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));
let str = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(str.split(","));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let str2 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str2.search("because"));
console.log(challenge.trimEnd(" ").trimStart(" "));
console.log(challenge.startsWith("30 D"));
console.log(challenge.endsWith("ript"));
alla = /a/gi;
console.log(challenge.match(alla));
let str3 = "";
console.log(str3.concat("30 Days Of", " JavaScript"));
console.log(challenge.repeat(2));

// Day 2 level 2
console.log(
  '"There is no exercise better for the heart than reaching down and lifting people up." by John Holmes teaches us to help one another.'
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
console.log(typeof "10" == typeof 10);
console.log(typeof parseInt("10") == typeof 10);
console.log(typeof "9.8" == typeof 10);
console.log(typeof parseFloat("9.8") == typeof 10);
let str4 = "python";
let str5 = "jargon";
console.log(str4.includes("on") == str5.includes("on"));
let str6 = "I hope this course is not full of jargon.";
console.log(str6.includes("jargon"));
console.log(Math.random() * 100);
console.log(Math.random() * 50 + 50);
console.log(Math.random() * 255);
let str7 = "JavaScript";
console.log(str7.charAt(Math.random() * str7.length));
let str8 =
    "1 1 1 1 1\
    2 1 2 4 8\
    3 1 3 9 27\
    4 1 4 16 64\
    5 1 5 25 125";
console.log(str8);
let str9 =
  "You cannot end a sentence with because because because is a conjunction";
let str10 = "because because because";
// , )
console.log(
  str9.substr(0, str9.indexOf("b") - 1) +
    str9.substr(str9.indexOf("b") + str10.length, str9.length)
);
