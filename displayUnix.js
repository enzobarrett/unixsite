document.getElementById("unixmover").style.display = "none";
display();
document.onmousemove = function(e) {
    var event = e || window.event;
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;
    document.getElementById("unixmover").style.left = (window.mouseX + 10) + "px";
    document.getElementById("unixmover").style.top = (window.mouseY - 10 + window.scrollY) + "px";
    document.getElementById("unixmover").style.display = "inline";
}
window.onscroll = function scrollMove() {
    document.getElementById("unixmover").style.left = (window.mouseX + 10) + "px";
    document.getElementById("unixmover").style.top = (window.mouseY - 10 + window.scrollY) + "px";
    document.getElementById("unixmover").style.display = "inline";
}
function display() {
    document.getElementsByClassName("unix")[0].innerHTML = Math.round(new Date().getTime()/1000);
    document.getElementsByClassName("unix")[1].innerHTML = Math.round(new Date().getTime()/1000);
    window.setTimeout(display, 1000);
}
