//for loops

//using for loop
let total01 = 0;

for (let i = 0; i < 5; i++) {
    console.log(i);
    total01 += i;
}

console.log(total01);

let numArray = [10, 20, 30, 40, 50, 60, 70, 80];

for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
    total01 += numArray[i];
    console.log(numArray[i]);
}
/*--------------------------------------------------------------------------------------------------------------------*/

// Challenge 12

// Total Price
/*
    1. Give our customer their total price.
    2. Add the price of the items together with a sales tax of 8%.
    3. Log the price.
*/

const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];

// by emanuel
let totalPrice = 0;

for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].quantity * cartItems[i].price
    console.log(totalPrice);
}

totalPrice *= 1.08;

console.log(totalPrice.toFixed(2));

// by scrimba
let total = 0;

// for(let i = 0; i < cartItems.length; i++) {
//     total += cartItems[i].price * cartItems[i].quantity;
// }

for(const cartItem of cartItems) {
    total += cartItem.price * cartItem.quantity;
}

// total = total * 1.08;
total *= 1.08;

console.log(total);

