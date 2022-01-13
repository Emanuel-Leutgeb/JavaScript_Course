//arrays and the methods of it

//using arrays
let example = [5, 7, 6];

console.log(example.length) //length of array
console.log(example[0]);    //number at index of array
console.log(example[3]);

example.push(8, 9, 10);     //add to array
example.pop();              //remove the last one

example[0] = 1;             //override

console.log(example.length)

example.forEach((element) => {
    console.log(element)
});

console.log(example);
/*--------------------------------------------------------------------------------------------------------------------*/

// Challenge 06

// Manage Inventory
/*
    1. Your company is launching 3 new products: toilet paper, bottled water, and sanitizer. Store them in a list.
    2. Turns out there was a mistake and toilet paper was actually paper towels. Make the appropriate update.
    3. Sanitizer sells out. Remove it from the list.
    4. Business is so good the company launches a new product: Bleach. Add it to the list.

    Note: After creating the initial array do not just create a brand new array. Modify it accordingly.
*/

//by emanuel
let newProducts = ["toilet paper", "bottled water", "sanitizer"]

newProducts[0] = "paper towels";
newProducts.pop();
newProducts.push("bleach")

newProducts.forEach((element) => {
    console.log(element)
});

//by scrimba
const products = ["toilet paper", "bottled water", "sanitizer"]

products[0] = "paper towels";
products.pop();
products.push("bleach")

console.log(products);