//numbers in different way's

//using numbers
let example = 7;
example = 7.77;

console.log(typeof example);
console.log(example);
console.log(parseInt(example));
console.log(parseFloat(example));

example = "7.77";

console.log(example);
console.log(parseInt(example));
console.log(parseFloat(example));

example = 7.56;

console.log(example.toFixed(1));
/*--------------------------------------------------------------------------------------------------------------------*/

//Challenge 04

//What kind of output?
let example1 = parseInt("Hello 33 World 22");   //maybe 3322        //number
let example2 = parseFloat('44 Dylan 33');       //maybe 44.33       //number
let example3 = 55.3333.toFixed(0);        //maybe 55          //string
let example4 = 200.0.toFixed(2);          //maybe 200.00      //string

console.log(example1);  //null - if it would start with a number it will find it
console.log(example2);  //44
console.log(example3);  //55
console.log(example4);  //200.00

console.log(typeof example1);   //number
console.log(typeof example2);   //number
console.log(typeof example3);   //string
console.log(typeof example4);   //string