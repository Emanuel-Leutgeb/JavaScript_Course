//old style
function add1(nums) {
    console.log(arguments);
}

//new style
function add2(...nums) {
    console.log(nums);
}

add1(4, 5, 6, 12)
add2(4, 5, 6, 12)
