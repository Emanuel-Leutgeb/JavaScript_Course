let name = null;
let enterName = true;

if (enterName) {
    name = prompt("Please enter your Name.");
    document.getElementById("myName").innerHTML = name;
    enterName = false;
}

let countRound = parseInt(prompt("How many rounds do you wanna play?"));

function game(selectHuman) {
    //Random choice from computer
    let selectComputer = Math.floor(Math.random() * 3) + 1;
    showComputer(selectComputer);

    //Write it into console
    console.log(`Human ${selectHuman}`);
    console.log(`Computer ${selectComputer}`);

    //My algorithm
    let dif = Math.abs(selectHuman - selectComputer);

    if (dif === 1) {
        if (selectHuman < selectComputer) {
            console.log("Human won, computer lose!");
            confirmFunction(1);
        } else {
            console.log("Human lose, computer won!");
            confirmFunction(2);
        }
    } else if (dif === 2) {
        if (selectHuman > selectComputer) {
            console.log("Human won, computer lose!");
            confirmFunction(1);
        } else {
            console.log("Human lose, computer won!");
            confirmFunction(2);
        }
    } else {
        console.log("Draw!");
        confirmFunction(3);
    }
}

function showComputer(selectComputer) {
    if (selectComputer === 1) {
        document.images[3].src = "../img/stone.png";
        document.images[3].style.visibility = "visible";
    } else if (selectComputer === 2) {
        document.images[3].src = "../img/scissors.png";
        document.images[3].style.visibility = "visible";
    } else if (selectComputer === 3) {
        document.images[3].src = "../img/paper.png";
        document.images[3].style.visibility = "visible";
    }
    setTimeout(hideComputer, 3000);
}

function hideComputer() {
    document.images[3].style.visibility = "hidden";
}

let countHuman = 0;
let countComputer = 0;

function confirmFunction(winner) {
    countRound--;
    if (winner === 1) {
        let a = window.confirm("You won!");
        countHuman++;
    } else if (winner === 2) {
        let b = window.confirm("You lose!");
        countComputer++;
    } else if (winner === 3) {
        window.confirm("Draw!");
    }
    document.getElementById("countRound").innerHTML = `Round: ${countRound}`;
    document.getElementById("countHuman").innerHTML = `${name}: ${countHuman}`;
    document.getElementById("countComputer").innerHTML = `Computer: ${countComputer}`;

    if (countRound < 1) {
        winnerIs(countHuman, countComputer);
        if (window.confirm("Do you wanna Play again?")) {
            location.reload();
        } else {
            window.location.href = "winner.html";
        }
    }

}

document.getElementById("countRound").innerHTML = `Round: ${countRound}`;
document.getElementById("countHuman").innerHTML = `${name}: ${countHuman}`;
document.getElementById("countComputer").innerHTML = `Computer: ${countComputer}`;


function winnerIs(countHuman, countComputer) {
    if (countHuman > countComputer) {
        alert("YOU WON")
    } else if (countHuman === countComputer){
        alert("DRAW")
    } else {
        alert("YOU LOSE")
    }
}