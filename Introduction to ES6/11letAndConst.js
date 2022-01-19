//var -global
if (false) {
    var example1 = 5;
}

console.log(example1)


var example2;

if (false) {
    example2 = 5;
}


//let - local
if (false) {
    let example3 = 5;
}

console.log(example3)


let example4;

if (false) {
    example4 = 5;
}

//const - static
const example5 = 5;
//example5 = 10;  //can't change const
console.log(example5);

const example6 = [5];
example6.push(2);
console.log(example6);