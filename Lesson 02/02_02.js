function clickMeOneFunction(element, number) {
    if (number === 1 && element.style.backgroundColor === "var(--color-secondary)") {
        element.style.backgroundColor = "white";
    } else {
        element.style.backgroundColor = "var(--color-secondary)";
    }

}

/*--------------------------------------------------------------------------------------------------------------------*/
function clickMeTwoFunction() {

}


/*--------------------------------------------------------------------------------------------------------------------*/
function clickMeThreeFunction() {
    if (clickMeThree.style.backgroundColor === "var(--color-secondary)") {
        clickMeThree.style.backgroundColor = "white";
    } else {
        clickMeThree.style.backgroundColor = "var(--color-secondary)";
    }
}

/*--------------------------------------------------------------------------------------------------------------------*/
function clickMeFourFunction(element) {
    console.log(element.id);
    element.style.backgroundColor = "white";
    if (clickMeFour.style.backgroundColor === "var(--color-secondary)") {
        clickMeFour.style.backgroundColor = "white";
    } else {
        clickMeFour.style.backgroundColor = "var(--color-secondary)";
    }
}


// function clickMeFunction(element) {
//     console.log(element.id);
//
//     if (element.style.backgroundColor === "var(--color-secondary)"){
//         element.style.backgroundColor = "white";
//     } else {
//         element.style.backgroundColor = "var(--color-secondary)";
//     }
// }

