let contactsOld = ["Mary", "Joel", "Danny"];

//make a copy
let personalFriendsOld = contactsOld;

console.log(personalFriendsOld);

contactsOld.push("Emanuel")

console.log(personalFriendsOld);


//new style
let contactsNew = ["Mary", "Joel", "Danny"];

//make a copy with spread operator
let personalFriendsNew = ["Miriam", ...contactsNew, "Sandra"];

console.log(personalFriendsNew);

contactsNew.push("Emanuel")

console.log(personalFriendsNew);

let person = {
    name: "Herbert",
    age: 25,
    city: "Wels"
}

let employee = {
    ...person,
    salary: 5000,
    position: "software Developer"
}

console.log(employee);

/*--------------------------------------------------------------------------------------------------------------------*/

//Challenge 04

/*
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.

    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.

    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it.
*/

const shoppingList = ["eggs", "milk", "butter"];

//by emanuel
let shoppingBasket1 = [...shoppingList, "sausages", "honey", "bread"]
console.log(shoppingBasket1);

//by scrimba
const shoppingBasket2 = [ ...shoppingList, "bread", "pasta"];
console.log(shoppingBasket2);