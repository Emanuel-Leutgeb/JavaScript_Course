let word1 = "Emanuel";
let word2 = "Leutgeb";
let num1 = 1;
let num2 = 2;

//old style
const fullNameOld = word1 + ' ' + word2;

//new style
const fullNameNew = `${num1 + num2} ${word1} ${word2}`;

//old style
let exampleOld = "Emanuel \n" + "Leutgeb"
document.getElementById("01_01").innerText = exampleOld

//new style
let exampleNew = `${word1}
${word2}`;

console.log(fullNameOld);
console.log(fullNameNew);
console.log(exampleOld);
console.log(exampleNew)