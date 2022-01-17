let elementTable = document.getElementById("nameTable");
let elementTrs = elementTable.getElementsByTagName("tr")
let elementTds = null;

//th
for (let i = 0; i < elementTrs.length; i++) {
    elementTds = elementTrs[i].getElementsByTagName("th");
    for (let j = 0; j < elementTds.length; j++) {
        elementTds[j].onclick = clickMeTable;
    }
}

//td
for (let i = 0; i < elementTrs.length; i++) {
    elementTds = elementTrs[i].getElementsByTagName("td");
    for (let j = 0; j < elementTds.length; j++) {
        elementTds[j].onclick = clickMeTable;
    }
}

function clickMeTable(event) {
    event.stopPropagation();
    if (this.style.backgroundColor === "white") {
        this.style.backgroundColor = "var(--colour-primary)";
    } else {
        this.style.backgroundColor = "white";
    }

}