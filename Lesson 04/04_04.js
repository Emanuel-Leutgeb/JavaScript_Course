function setCookie(cookieName, inhalt, dauer) {
    let datum = new Date();
    datum.setTime(datum.getTime() + (dauer * 24 * 60 * 60 * 1000));
    let ablaufdatum = "expires=" + datum.toUTCString()
    document.cookie = cookieName + "=" + inhalt + ";" + ablaufdatum;
}

function getCookie(cookieName) {
    cookieName += "=";
    let decCookie = decodeURIComponent(document.cookie);
    let arr = decCookie.split(";");
    for (let i = 0; i < arr.length; i++) {
        let inhalt = arr[i];
        while (inhalt.charAt(0) === ' ') {
            inhalt = inhalt.substring(1);
        }
        if (inhalt.indexOf(cookieName) === 0) {
            return inhalt.substring(cookieName.length);
        }
    }
    return "";
}

function checkCookie() {
    let anwender = getCookie("anwender");
    if (anwender !== "") {
        alert("Hallo " + anwender + "!");
    } else {
        anwender = prompt("Gib deinen Namen ein:");
        alert("Hallo " + anwender + "!");
        if (anwender !== "" && anwender != null) {
            setCookie("anwender", anwender, 180);
        }
    }
}

document.write(document.cookie)
