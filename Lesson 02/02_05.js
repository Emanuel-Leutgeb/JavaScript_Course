function billFunction(site) {
    let num1 = getRandomInt(10);
    let num2 = getRandomInt(10);
    let operator = null;

    do {
        if (site === 1) {
            let result = prompt(`${num1} + ${num2}`)
            if ((parseInt(result) === (num1 + num2))) {
                alert("Correct")
                window.location.href = "02_05_02.html"
                break;
            } else {
                alert("Not correct")
            }
        } else if (site === 2) {
            let result = prompt(`${num1} - ${num2}`)
            if ((parseInt(result) === (num1 - num2))) {
                alert("Correct")
                window.location.href = "02_05_03.html"
                break;
            } else {
                alert("Not correct")
            }
        } else if (site === 3) {
            let result = prompt(`${num1} * ${num2}`)
            if ((parseInt(result) === (num1 * num2))) {
                alert("Correct")
                window.location.href = "index.html"
                break;
            } else {
                alert("Not correct")
            }
        }
    } while (true)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

