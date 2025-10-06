let menuIcons = document.getElementById("menu-icon");
let menu = document.getElementsByClassName("menu");
menuIcons.onclick = function() {
    console.log("clicked");
    if (menu[0].style.display === "none") {
        menu[0].style.display = "flex";
    } else {
        menu[0].style.display = "none";
    }
}