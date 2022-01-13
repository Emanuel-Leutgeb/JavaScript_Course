"use strict";

let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");
let age = prompt("Enter your age: ");

let userInformation = [];

userInformation.push(firstName, lastName, age);

document.write("Here are your user information's. <br>");

for (const userInfo of userInformation) {
    document.write(userInfo + "<br>");
}