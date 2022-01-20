$(document).ready(function () {
    let textFromElement = $("h1").text();
    $("p").text(textFromElement);

    $("#myButton").click(function () {
        let inputText = $("#text").val()
        $("p:nth-child(3)").text(inputText);
        alert(inputText)
    })
});