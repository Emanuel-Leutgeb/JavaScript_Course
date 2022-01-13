"use strict";
let array = []
let i = 0;
while (array.length < 5) {
    array[i] = prompt("Enter something");
    i++;
}

i = 0;

while (i < 5) {
    let a = array[i];
    document.write(a + "<br>");
    i++;
}