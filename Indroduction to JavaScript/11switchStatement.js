//switch statements

//using switch
let studentAnswer = "A";

switch (studentAnswer) {
    case "A":
        console.log("A is wrong.")
        break;
    case "B":
        console.log("B is wrong.")
        break;
    case "C":
        console.log("C is correct.")
        break;
    default:
        console.log("Not a real answer.");
}
/*--------------------------------------------------------------------------------------------------------------------*/

// Challenge 11

// Customer Upgrade
/*
    1. Our business wants to convince users to upgrade their accounts.
    2. Check a user's account type (switch) of 'shopper', 'super shopper', & 'guest'.
    3. If a user is a 'guest' ask them if they want to upgrade to a 'shopper'.
    4. If a user is a 'shopper' ask if they want to upgrade to a 'super shopper'
    5. If a user is a 'super shopper' tell them they are the best!
    6. If we don't know user's status they are a guest.
*/

const userType = "super shopper";

switch (userType){
    case "guest":
        console.log("Do you want to upgrade to 'shopper'?")
        break;
    case "shopper":
        console.log("Do you want to upgrade to 'super shopper'?")
        break;
    case "super shopper":
        console.log("You are the best!")
        break;
    default:
        console.log("You are a guest.")
}