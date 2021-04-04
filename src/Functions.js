
var headerElement;
var sticky_header;

window.onscroll = function() {
    StickyHeader();
};


window.addEventListener("load", init);

function init() {
    headerElement = document.getElementById("myHeader");
    sticky_header = headerElement.offsetTop;
}

// adds class Sticky to header to change it to fixed mode
function StickyHeader() {
    if(headerElement == null) return;

    if(window.pageYOffset > sticky_header) {
        headerElement.classList.add("sticky");
    } else {
        headerElement.classList.remove("sticky");
    }
}