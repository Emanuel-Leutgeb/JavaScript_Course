$("#button1").click(findRed)

function findRed() {
    $("[input*='red']").css("background-color", "yellow");
}


//
// let valueElement = $("input:contains('Red')").val()
// alert(valueElement)
//
// $("p:contains()+ p").css("background-color", "yellow");