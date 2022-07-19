var headerList = document.getElementById("header_menu");

header_menu.style.maxHeight = "0px";
function burger_menu() {
    if (header_menu.style.maxHeight == "0px") {
        header_menu.style.maxHeight = "100%";
    } else {
        header_menu.style.maxHeight = "0px";
    }
}