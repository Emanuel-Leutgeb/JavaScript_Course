function focusFunction() {
    //children 0 = html / children 1 = body / children 1 = main
    let element = document.children[0].children[1].children[0].lastElementChild;

    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

function callAllFunction() {
    focusFunction();
    let email = document.getElementById("email").value

    let valid = emailIsValid(email)
    if (valid){
        alert("Correct e-mail.")
    } else if (!valid) {
        alert("No correct e-mail.")
    }
}

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}