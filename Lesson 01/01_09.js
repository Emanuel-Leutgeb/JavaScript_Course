"use strict";
let array = []

for (let i = 0; i < 5; i++) {
    array[i] = prompt("Enter something");
}

for (let i = 0; i < array.length; i++) {
    let a = array[i];
    document.write(a + "<br>");
}