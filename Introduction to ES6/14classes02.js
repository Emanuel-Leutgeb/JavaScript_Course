import {Animal, Cat, Player1, Player2, TennisPlayer1, TennisPlayer2} from "./14classes01.js";
/*--------------------------------------------------------------------------------------------------------------------*/

let cat1 = new Animal("Cat", 4);

cat1.legs = 3;

cat1.makeNoise("Meow");
console.log(cat1.type);
console.log(cat1.legs);

console.log(Animal.return10())

console.log(cat1.metaData)


let cat2 = new Cat("Cat", 4);

cat2.makeNoise();

console.log(cat2.metaData);
/*--------------------------------------------------------------------------------------------------------------------*/

//by emanuel
let footballPlayer = new Player1();
console.log(footballPlayer.footballText("Alaba", "Austria"));

let tennisPlayer = new TennisPlayer1();
tennisPlayer.tennisText("Dominik Thiem", 28);

//by scrimba
const messi = new Player2("Messi", "Argentina");
messi.introduce();

const thiem = new TennisPlayer2("Dominik Thiem", "Austria", 28);

thiem.introduce();
thiem.playTennis();
