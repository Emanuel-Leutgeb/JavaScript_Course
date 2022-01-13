//relational operators and how it works

//using relational operators
let example1 = 10;
let example2 = "10";

console.log(example1 >= example2)   // <  >  <=  >=  ==  !=  !==

console.log(example1 == example2)   //== check if the number is the same
console.log(example1 === example2)  //=== check if the number and the type is the same
/*--------------------------------------------------------------------------------------------------------------------*/

// Challenge 08

// Best Promo Code
/*
    1. Our business wants to make sure we give our users the best promo codes available for two categories.
    2. Create two promo codes in variables and compare to find out if the first one is a better value for the dollars off category.
*/

const promoCode1 = 10;
const promoCode2 = 20;

console.log("Is promo code 1 is a better deal:", promoCode1 <= promoCode2);

