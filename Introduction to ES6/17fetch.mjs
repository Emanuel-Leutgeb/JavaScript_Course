import fetch from "node-fetch";
/*
Fetch

RESTFul API - https://jsonplaceholder.typicode.com/
Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
*/

fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments', {
        method: "POST",
        body: JSON.stringify({
            postId: 1,
            name: "Emanuel",
            email: "emanuelsemail@gmail.com",
            body: "That was dope!"
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
/*--------------------------------------------------------------------------------------------------------------------*/

//Challenge 10

/*
    GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
    POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.

    RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
    Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
*/

//by emanuel
fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments', {
    method: "PUSH",
    body: JSON.stringify({
        postID: 101,
        id: 101,
        name: "Emanuel",
        email: "emanuelsemail@gmail.com",
        body: "Tanks dude!"
    })
})
    .then(response => response.json())
    .then(data => console.log(data))

//by scrimba
fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then((response) => response.json())
    .then((data) => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    body: JSON.stringify({
        name: 'Comment 105',
        email: 'dylansemail310@gmail.com',
        body: 'Dopes comment in the game',
        postId: 1
    })
})
    .then((response) => response.json())
    .then((data) => console.log(data))