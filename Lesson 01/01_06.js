"use strict";
let points = 0;

let mathLesson01 = parseInt(prompt("What is 2 * 3"));

if (mathLesson01 === 6) {
    alert("Your answer is true.")
    points++;
} else {
    alert("Your answer is false.")
}

let mathLesson02 = parseInt(prompt("What is 3 * 3"));

if (mathLesson02 === 9) {
    alert("Your answer is true.")
    points++;
} else {
    alert("Your answer is false.")
}

let mathLesson03 = parseInt(prompt("What is 7 * 7"));

if (mathLesson03 === 49) {
    alert("Your answer is true.")
    points++;
} else {
    alert("Your answer is false.")
}

let mathLesson04 = parseInt(prompt("What is 1 + 4"));

if (mathLesson04 === 5) {
    alert("Your answer is true.")
    points++;
} else {
    alert("Your answer is false.")
}

let mathLesson05 = parseInt(prompt("What is 6 - 2"));

if (mathLesson05 === 4) {
    alert("Your answer is true.")
    points++;
} else {
    alert("Your answer is false.")
}

switch (points) {
    case 0:
    case 1:
    case 2:
    case 3:
        alert("Test not passed. :[");
        break;
    case 4:
        alert("Just passed the test. :|");
        break;
    case 5:
        alert("Test perfectly passed. :D")
        break;
}