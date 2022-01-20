import fetch from "node-fetch";

const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise((resolve, reject) => {
        setTimeout(() => {
            //photos.push("Profile Pic");
            if (photos.length >= 1){
                resolve("photo Uploaded")
            } else{
                reject("error")
            }
        }, 10000)
    })

    let result = await uploadStatus;

    console.log(result);
    console.log(photos.length);
}

photoUpload().catch((result) => console.log(result));


photoUpload().catch((result) => console.log(result));
/*--------------------------------------------------------------------------------------------------------------------*/

//Challenge 11

/*
    //Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await
*/
const apiUrl = "https://api.chucknorris.io/jokes/random";

//by emanuel
fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))

//by scrimba
async function getJoke() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data.value);
}

getJoke();