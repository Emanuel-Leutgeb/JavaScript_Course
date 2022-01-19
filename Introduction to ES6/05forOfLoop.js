//for of - Loop
//way one
let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
    console.log(income);
    total += income;
}
console.log(total);

//way two
let fullName = "Emanuel Coders Bay Leutgeb"


for (const char of fullName) {
    console.log(char);
}
/*--------------------------------------------------------------------------------------------------------------------*/

// Challenge 03

// For Of Loop
/*
    Using the For of Loop, iterate through the array and print into the console, a message like:
    Tom lives in Lisbon
*/

const students = [
    {name: "John", city: "New York"},
    {name: "Peter", city: "Paris"},
    {name: "Kate", city: "Sidney"}
];

//by emanuel
for (const element1 of students) {
    const {name, city} = element1;
    console.log(`${name} lives in ${city}`)
}

//by scrimba
for (const student of students) {
    console.log(student.name + " lives in " + student.city);
}