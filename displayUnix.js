display();
function display() {
    document.getElementById("unix").innerHTML = Math.round(new Date().getTime()/1000);
    window.setTimeout(display, 1000);
}
