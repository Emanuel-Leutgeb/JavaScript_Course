"use strict";
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    temp *= 2;
    array[i] = temp;
    console.log(array[i])
}



