import StardewFishingGif from './Resources/fishing_mechanic.gif';
import StardewFishingJPG from './Resources/stardewfishing_small.jpg';

var headerElement;
var sticky_header;

var stardew_fishing_card;

window.onscroll = function() {
    StickyHeader();
};

window.addEventListener("load", init);

function init() {
    headerElement = document.getElementById("myHeader");
    sticky_header = headerElement.offsetTop;
    stardew_fishing_card = document.getElementById("stardew_valley_fishing");
    stardew_fishing_card.addEventListener('mouseenter', e => StardewFishingToGif());
    stardew_fishing_card.addEventListener('mouseleave', e => StardewFishingToJPG());
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

function StardewFishingToGif() {
    var image = stardew_fishing_card.firstChild;

    image.src = StardewFishingGif;
}

function StardewFishingToJPG() {
    var image = stardew_fishing_card.firstChild;

    image.src = StardewFishingJPG;
}