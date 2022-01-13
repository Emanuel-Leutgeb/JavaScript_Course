//variables like "var" "let" "const"


var nameOfVariableVar  //var is "old school" and the variable is also global

let nameOfVariableLet  //let ist the "standard" and the variable is only local
/*--------------------------------------------------------------------------------------------------------------------*/

//using let
let firstName = "Emanuel";
firstName = "Miriam";

let lastName = "Leutgeb";
let fullName = lastName + " " + firstName;

let age = 20;
let isEmployed = true;
isEmployed = false;

console.log(fullName)
/*--------------------------------------------------------------------------------------------------------------------*/

//Challenge 01
//It your Dog's Birthday!

/*
Create 2 variables related to your dog. Make one of them its age and update it by one.
Log out all the values in a friendly way of your choosing.
*/

let catName01 = "Timi";
let catAge01 = 1;
catAge01 = catAge01 + 1;

console.log('My cat ' + catName01 + " is turning " + catAge01)
/*--------------------------------------------------------------------------------------------------------------------*/

//using const
const buildDate = "Dezember, 24, 1995"; //const can not be changed

let releasedDate;
releasedDate = "September, 27, 1996";

console.log(releasedDate);
console.log(buildDate);
/*--------------------------------------------------------------------------------------------------------------------*/

//Challenge 02
//It your Dog's Birthday!

/*
 Create 2 variables related to your dog. Make one of them its age and update it by one.
 Log out all the values in a friendly way of your choosing.

 Update: How might we change our variable challenge to use const?
*/

const catName02 = "Rocky";
let catAge02 = 2;
catAge02 = catAge02 + 1;

console.log("My cat " + catName02 + " is turning " + catAge02)
/*--------------------------------------------------------------------------------------------------------------------*/