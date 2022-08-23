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
let str3 = ''
console.log(str3.concat('30 Days Of', ' JavaScript'));
console.log(challenge.repeat(2));