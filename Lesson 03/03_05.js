function goToPage() {
    let url = document.getElementById("www").value;
    let https = "https://";
    let newUrl = url.includes(https);
    if (newUrl){
        window.open(url, "_blank")
    } else{
        window.open(`${https}${url}`, "_blank")
    }
}

