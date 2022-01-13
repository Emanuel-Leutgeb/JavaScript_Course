//objets in different way's

//using objects
let example = {             //creating properties
    firstName: "Emanuel",
    lastName: "Leutgeb",
    address: {
        city: "Wels",
        state: "Oberösterreich"
    },
    age: 25,
    pets: ["Timi", "Tito", "Rocky"]
};

example.age = 26;

console.log(Object.keys(example));      //print all keys but not the values
console.log(Object.values(example));    //print all values and also the keys

console.log(example.hasOwnProperty("firstName"));   //check if the String (fristName) is a property in the object (example)
console.log(example.hasOwnProperty("fullName"));    //check if the String (fullName) is a property in the object (example)
/*--------------------------------------------------------------------------------------------------------------------*/

// Challenge 07

// User Profile Form
/*
    1. Your organization needs the user's personal information to ship the inventory to. Create an object to store the data in.
    2. Store a user's first and last name.
    3. Store a user's address. City and state will be enough. Have this as a nested object. (Interface Segregation Principle)
    4. The business wants to give more personalized ads and wants to collect information about the user's hobbies. Create a list of hobbies.
    5. Are they a gold member? Store a boolean with this value.
*/

//by emanuel
let personalInformation = {
    firstName: "",
    lastName: "",
    address: {
        city: "",
        state: ""
    },
    hobbies: [],
    goldMember: ""
};

console.log(Object.values(personalInformation));

//by scrimba

const user = {
    firstName: "Emanuel",
    lastName: "Leutgeb"
};

user['address'] = {  //this is sometimes bad convention
    city: "Linz",
    state: "Upper Austria"
};

user.hobbies = ["Cooking", "Tracking", "Coding"]
user.isGoldMember = true;

console.log(user)