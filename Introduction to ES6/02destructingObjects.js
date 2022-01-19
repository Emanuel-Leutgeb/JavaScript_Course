const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
        city: 'Los Angeles'
    }
};

//old style
console.log(player.address.city);
//player.name
//player.club

//new style
const {name, club, address: {city}} = player;
//name
//club

console.log(`${name} plays for ${club}`);
console.log(`${name} lives in ${city}`);
/*--------------------------------------------------------------------------------------------------------------------*/

//Challenge 01

/*
    For this challenge destruture the following object.
*/

const student = {
    nameS: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const {nameS, age, projects: {diceGame}} = student;

console.log(`${nameS} is ${age} years old.`);
console.log(`${nameS} works on the Game: ${diceGame}`);