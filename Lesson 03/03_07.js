function changeLayout(index) {
    if (index === 1) {
        document.body.style.backgroundColor = "pink";
        document.body.style.fontSize = "30px";
        document.body.style.color = "yellow";
    } else if (index === 2) {
        document.body.style.backgroundColor = "red";
        document.body.style.fontSize = "10px";
        document.body.style.color = "blue";
    } else if (index === 3) {
        document.body.style.backgroundColor = "white";
        document.body.style.fontSize = "50px";
        document.body.style.color = "green";
    }
}