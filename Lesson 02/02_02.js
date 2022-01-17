let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")

one.onclick = clickMeFunction;
two.onclick = clickMeFunction;
three.onclick = clickMeFunction;
four.onclick = clickMeFunction;

function clickMeFunction(event) {
    this.style.backgroundColor = "white";
    event.stopPropagation();
    // console.log(document);
    if (this !== document.children[0].children[1].children[0].firstElementChild){
        this.parentNode.style.backgroundColor = "var(--color-primary)";
    }
}