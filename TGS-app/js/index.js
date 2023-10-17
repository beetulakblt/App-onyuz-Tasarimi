var filter_menu = document.getElementById("filter-menu");
var filter_button = document.getElementsByClassName("filter");
var var_button = document.getElementsByClassName("personnel-update");
var personnel_page = document.getElementById("personnel-page")
var history_button = document.getElementsByClassName("view-history");
var history_page = document.getElementById("history-page")

var a = 1;
var h = 1;
var p = 1;

function show_hide() {
    if (a == 1) {
        filter_menu.style.display = "block";
        return a = 0;
    }
    else {
        filter_menu.style.display = "none";
        return a = 1;
    }
}

function history_hide() {
    if (h == 1) {
        history_page.style.display = "flex"
        return h = 0;
    }
    else{
        close_page();
    }
}

function close_page(){
    if(h == 0){
        history_page.style.display = "none"
        return h = 1;
    }
}

function personnel_hide() {
    if (p == 1){
        personnel_page.style.display = "flex";
        return p = 0;
    }
}

function close_personnel_page(){
    if(p == 0){
        personnel_page.style.display = "none"
        return p = 1;
    }
}
