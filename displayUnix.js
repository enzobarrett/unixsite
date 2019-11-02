var displayed = 0;
document.getElementById("unixmover").style.display = "none";
setInterval(mousemov, 20);
display();
document.onmousemove = function(e) {
    var event = e || window.event;
    window.mouseX = event.clientX;
    window.mouseY = event.clientY;
    displayed = 1;
}
function display() {
    document.getElementsByClassName("unix")[0].innerHTML = Math.round(new Date().getTime()/1000);
    document.getElementsByClassName("unix")[1].innerHTML = Math.round(new Date().getTime()/1000);
    window.setTimeout(display, 1000);
}
function mousemov() {
    document.getElementById("unixmover").style.left = (window.mouseX + 10) + "px";
    document.getElementById("unixmover").style.top = (window.mouseY - 10 + window.scrollY) + "px";
    if (displayed) {
	document.getElementById("unixmover").style.display = "inline";
    }
}
