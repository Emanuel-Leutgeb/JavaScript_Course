const leadSinger = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger("Chris Martin");

//default params
leadSinger();
/*--------------------------------------------------------------------------------------------------------------------*/

//Challenge 05

/*
    Create a function that receives a parameter of food.
    If your parameter food is going to have a value of "milk"
    the function should print into the console the following:

    "I'm going to buy milk from the grocery shop"

    But if you don't pass a value to your parameter food, it should print
    "I'm going to buy something from the grocery shop"
*/

function foodShopping(food = "something") {
    console.log(`I'm going to buy ${food} from the grocery shop`);
}

foodShopping("eggs");
foodShopping();