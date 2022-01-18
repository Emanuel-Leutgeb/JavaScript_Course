function focusFunction() {
    //children 0 = html / children 1 = body / children 1 = main
    let element = document.children[0].children[1].children[0].lastElementChild;

    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}