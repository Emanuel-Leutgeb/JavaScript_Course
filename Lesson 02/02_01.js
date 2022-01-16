let clickMe = document.getElementById("clickMe")

function clickMeFunction() {
    if (clickMe.style.backgroundColor === "var(--color-secondary)"){
        clickMe.style.backgroundColor = "white";
    } else {
        clickMe.style.backgroundColor = "var(--color-secondary)";
    }
}

clickMe.addEventListener("click", clickMeFunction);

/*--------------------------------------------------------------------------------------------------------------------*/

let dblclickMe = document.getElementById("dblclickMe")

function dblclickMeFunction() {
    if (dblclickMe.style.backgroundColor === "var(--color-secondary)"){
        dblclickMe.style.backgroundColor = "white";
    } else {
        dblclickMe.style.backgroundColor = "var(--color-secondary)";
    }
}

dblclickMe.addEventListener("dblclick", dblclickMeFunction);

/*--------------------------------------------------------------------------------------------------------------------*/

let hoverMe = document.getElementById("hoverMe")

function hoverMeFunction() {
    if (hoverMe.style.backgroundColor === "var(--color-secondary)"){
        hoverMe.style.backgroundColor = "white";
    } else {
        hoverMe.style.backgroundColor = "var(--color-secondary)";
    }
}
hoverMe.addEventListener("mouseover", hoverMeFunction);

/*--------------------------------------------------------------------------------------------------------------------*/

let pressKey = document.getElementById("pressKey")

function pressKeyFunction() {
    if (pressKey.style.backgroundColor === "var(--color-secondary)"){
        pressKey.style.backgroundColor = "white"
    } else {
        pressKey.style.backgroundColor = "var(--color-secondary)";
    }
}
pressKey.addEventListener("keydown", pressKeyFunction);
