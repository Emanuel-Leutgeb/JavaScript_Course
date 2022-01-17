"use strict";
let h1 = prompt("Enter the Headline.");

//children 0 = html / children 1 = body / children 0 = h1
document.children[0].children[1].children[0].innerHTML = h1;
// document.body.firstElementChild.innerHTML = h1;

let p = prompt("Enter the Text.");

//children 0 = html / children 1 = body / children 1 = p
document.children[0].children[1].children[1].innerHTML = p;

document.getElementById("h2").innerHTML = prompt("Enter second headline.");

document.getElementById("p").innerHTML = prompt("Enter second text.");