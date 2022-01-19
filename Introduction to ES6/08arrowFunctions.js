//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

//long way
const dinnerMenu1 = (food) => {
    return `I'm going to eat ${food} for dinner`;
}
console.log(dinnerMenu1("chicken salad"));

//short way
const dinnerMenu2 = food => `I'm going to eat ${food} for dinner`;
console.log(dinnerMenu2("burger"));