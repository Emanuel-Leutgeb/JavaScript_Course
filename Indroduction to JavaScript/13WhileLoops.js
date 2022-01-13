//while loops

//using while loop
let count = 0;

while (true) {
    count++;

    if (count >= 20) {
        break;
    }
}

console.log(count);

do {
    count++;

    if (count >= 20) {
        break;
    }
} while (false)

console.log(count);
/*--------------------------------------------------------------------------------------------------------------------*/

// Challenge 13

// Analytics
/*
    1. Track our user's activity.
    2. While the total updates is under 10 updates keep logging the update count.
    3. After we reach our threshold say, 'No longer tracking the user'.
    4. Change the logic to a do while with it updating just a single time.
*/

// by emanuel
// while
let totalUpdates = 0;

while (totalUpdates < 10) {
    totalUpdates++;

    if (totalUpdates < 10) {
        console.log("Tracking User");
    } else {
        console.log("No longer tracking the user");
    }
}

//do while
totalUpdates = 0;

do {
    totalUpdates++;

    if (totalUpdates < 10) {
        console.log("Tracking User");
    } else {
        console.log("No longer tracking the user");
    }
} while (false)

// by scrimba
// while
totalUpdates = 0;

while (totalUpdates < 10) {
    totalUpdates++;

    console.log(totalUpdates);
}

console.log('No longer tracking the user.');

// do while
totalUpdates = 10;

do {
    totalUpdates++;

    console.log(totalUpdates);
} while (totalUpdates < 10)

console.log('No longer tracking the user.');

