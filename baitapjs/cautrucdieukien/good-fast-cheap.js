// Check: document.getElementById("checkbox").checked = true;

// Uncheck: document.getElementById("checkbox").checked = false;

function fc() {
    if (document.getElementById("g").checked == true) {
        if (document.getElementById("f").checked == true) {
            document.getElementById("c").checked = false;
        } else {
            document.getElementById("f").checked = false;
        }
    } else{
        document.getElementById("c").checked = true;
        document.getElementById("c").checked = true;
    }
}
function gc() {
    if (document.getElementById("f").checked == true) {
        if (document.getElementById("g").checked == true) {
            document.getElementById("c").checked = false;
        } else {
            document.getElementById("g").checked = false;
        }
    } else{
        document.getElementById("g").checked = true;
        document.getElementById("c").checked = true;
    }
}
function gf() {
    if (document.getElementById("c").checked == true) {
        if (document.getElementById("f").checked == true) {
            document.getElementById("g").checked = false;
        } else {
            document.getElementById("f").checked = false;
        }
    } else{
        document.getElementById("g").checked = true;
        document.getElementById("f").checked = true;
    }
}