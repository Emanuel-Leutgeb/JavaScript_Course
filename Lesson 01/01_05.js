"use strict";
const userName = "Emanuel";
const userPassword = "123abc789xyz"

let inputUserName = prompt("Please enter your username");
let inputUserPassword = prompt("Please enter your password");

if (inputUserName !== userName) {
    alert("Wrong username!")
} else {
    alert("Correct username!")
}

if (inputUserPassword !== userPassword) {
    alert("Wrong password!")
} else {
    alert("Correct password!")
}

