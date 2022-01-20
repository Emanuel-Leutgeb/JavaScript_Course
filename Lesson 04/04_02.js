$("div").on({
    mouseout: mouseout,
    dblclick: dblclick,
    contextmenu: contextmenu
});

function mouseout(){
    alert("Mouse out.")
}

function dblclick(){
    alert("Double click.")
}

function contextmenu(){
    alert("Right click.")
}

