//boolean "true" & "false"

//using boolean
let example = false;
example = 66;

console.log(Boolean(example))
/*--------------------------------------------------------------------------------------------------------------------*/

//Challenge 05

//What kind of output?
let example1 = false;       //maybe false
let example2 = true;        //maybe true
let example3 = null;        //maybe false   //null can be a placeholder
let example4 = undefined;   //maybe false
let example5 = '';          //maybe false
let example6 = NaN;         //maybe false   //Not a Number (NaN)
let example7 = -5;          //maybe true    //negative and positive numbers are true values
let example8 = 0;           //maybe true    //only 0 is a false number

console.log(Boolean(example1));  //false
console.log(Boolean(example2));  //true
console.log(Boolean(example3));  //false
console.log(Boolean(example4));  //false
console.log(Boolean(example5));  //false
console.log(Boolean(example6));  //false
console.log(Boolean(example7));  //true
console.log(Boolean(example8));  //false