//functions

//using functions
function add() {
    //console.log("add");
    return 5;
}

add();
console.log(add())

function addition(num1, num2) {
    return num1 + num2;
}

console.log(addition(10, 6))
console.log(addition(15, 20))
/*--------------------------------------------------------------------------------------------------------------------*/

// Challenge 14

// Checkout
/*
    1. Go through the full checkout process.
    2. Use getUserCredentials provided that returns the first name, last name and concat with email.
    3. Write a function called getPreTaxTotal that take in our cartItems and returns the total without tax.
    4. Pass the preTaxTotal value to a getTaxedTotal function that returns the value with tax.
    5. Log each value from the 3 functions out.
*/

// by emanuel
/*
function getUserCredentials(firstName, lastName, email) {
    return firstName + " " + lastName + " " + email;
}

function getPreTaxTotal(cartItems){
    let total = 0;

    for(const cartItem of cartItems) {
        total += cartItem.price * cartItem.quantity;
    }

    return total;
}

function getTaxedTotal(preTaxTotal) {
    return preTaxTotal *= 1.08;
}

const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];

console.log(getUserCredentials("Emanuel", "Leutgeb", "emanuel@leutgeb.com"));
let preTaxTotal = getPreTaxTotal(cartItems);
console.log(preTaxTotal);
console.log(getTaxedTotal(preTaxTotal).toFixed(2));
*/

// by scrimba
function getUserCredentials(firstName, lastName, email) {
    return `${firstName} ${lastName} | ${email}`
}

const userCredentials = getUserCredentials('Dylan', 'Israel', 'DylansEmail310@gmail.com');

function getPreTaxTotal(cartItems) {
    let total = 0;

    for (let cartItem of cartItems) {
        total += cartItem.quantity * cartItem.price;
    }

    return total;
}

const cartItems = [
    {quantity: 1, price: 5},
    {quantity: 3, price: 4},
    {quantity: 10, price: 1}
];

const preTaxTotal = getPreTaxTotal(cartItems);

function getTaxedTotal(preTaxTotal) {
    return preTaxTotal *= 1.08;
}

const finalTaxedTotal = getTaxedTotal(preTaxTotal);

console.log(userCredentials)
console.log(preTaxTotal);
console.log(finalTaxedTotal);