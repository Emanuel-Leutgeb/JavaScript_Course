const buyFlightTicket = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true;

            if (error) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful");
            }
        }, 3000)
    })
}

//first run the function if success then() call a new function, but if not catch() it and call e.g. not success
buyFlightTicket()
    .then((success) => console.log(success))
    .catch((error) => console.log(error));
/*--------------------------------------------------------------------------------------------------------------------*/

//Challenge 09

/*
    Create a promise that returns some user data and throws an error when not found.
    Log the user data when listening to the promise as well as log the error.

    Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

//by emanuel
const userStorage = [];

const userData1 = (userName) => {
    return new Promise( (resolve, reject) => {
        if (userStorage.includes(userName)) {
            resolve("Welcome to our Platform!")
        } else {
            userStorage.push(userName);
            reject("You are now registered to our Platform")
        }
    })
}


function login(name){
    userData1(name)
        .then((login) => console.log(login))
        .catch((registered) => console.log(registered));
}

login("Emanuel");
login("Emanuel");

//by scrimba
const userData2 = new Promise((resolve, reject) => {
    const error = false;

    if(error) {
        reject('500 Level Error');
    } else {
        resolve({
            firstName: 'Dylan',
            age: 32,
            email: 'DylansEmail310@gmail.com'
        });
    }
});

userData2
    .then((data) => console.log(data))
    .catch((error) => console.log(error));


