//increment & decrement

//using increment & decrement
let example1 = 1;

example1 = example1 + 1; //old way
example1 += 5;  //new way like += -= /= *=

example1++;     //addition by 1
example1--;     //subtraction by 1

console.log(example1)
/*--------------------------------------------------------------------------------------------------------------------*/

// Challenge 09

// Upsell Quantity
/*
    1. Our business wants to upsell items in a user's cart.
    2. Ask the user if they would like to add one more item (with the variable provided). Update the quantity variable if they do.
    3. Log the current quantity.
*/

const customerAnswer = Math.random() >= 0.5;
let quantity = 2;

if (customerAnswer) {
    quantity++;
}

console.log(quantity);