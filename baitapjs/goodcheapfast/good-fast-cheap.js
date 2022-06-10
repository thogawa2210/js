// Check: document.getElementById("checkbox").checked = true;

// Uncheck: document.getElementById("checkbox").checked = false;

function fc() {
    if (document.getElementById("g").checked == true && document.getElementById("f").checked == true) {
            document.getElementById("c").checked = false;
    }
}
function gc() {
    if (document.getElementById("f").checked == true && document.getElementById("g").checked == true) {
            document.getElementById("c").checked = false;
    }
}
function gf() {
    if (document.getElementById("c").checked == true && document.getElementById("f").checked == true) {
            document.getElementById("g").checked = false;
        }
}