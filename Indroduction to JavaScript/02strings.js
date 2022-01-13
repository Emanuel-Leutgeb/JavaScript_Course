//strings in different way's

//using stings
let firstName = "Emanuel";    //double
let lastName = 'Leutgeb';     //single

console.log(typeof firstName)

console.log(firstName + ' ' + lastName);
console.log(lastName, firstName);
console.log(`${firstName} ${firstName}`);
console.log(`          ${firstName} ${lastName}`.length);
console.log(`          ${firstName} ${lastName}`.trim().length);
console.log(`${firstName} ${lastName}`.toLowerCase());
console.log(`${firstName} ${lastName}`.toUpperCase());
console.log(`${firstName} ${lastName}`.split(" "));
console.log(`${firstName} ${lastName}`.split(""));
/*--------------------------------------------------------------------------------------------------------------------*/

//Challenge 03

let firstName03 = "Emanuel";
let lastName03 = "Leutgeb";

let fullName03 = firstName03 + " " + lastName03;        //bad choice
const fullName03const = `${firstName03} ${lastName03}`  //good choice

console.log(fullName03);
console.log(fullName03const);