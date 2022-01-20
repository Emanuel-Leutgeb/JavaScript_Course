$("input").click(function(e) {
    if (this.value === 'Red'){
        $(this).css('backgroundColor','red');
    }
    else if (this.value === 'bar'){
        $(this).css('backgroundColor','green');
    }
    else $(this).css('backgroundColor','white');
});