"use strict";

let array = [[], [], []];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (j === 0) {
            array[i][j] = prompt(`User ${i + 1}: Enter your first name`)
        }
        if (j === 1) {
            array[i][j] = prompt(`User ${i + 1}: Enter your last name`);
        }
        if (j === 2) {
            array[i][j] = prompt(`User ${i + 1}: Enter your age`);
        }
    }
}

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        let a = array[i][j];
        document.write(a + "<br>");
    }
    document.write("<br>")
}

let selectUser = prompt("Select a user information.");
let selectIndex = prompt("Select an index.");

alert(array[selectUser - 1][selectIndex - 1]);