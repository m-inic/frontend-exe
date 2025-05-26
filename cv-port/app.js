const arrowLeft = document.getElementById("arr-left");
const arrowRight = document.getElementById("arr-right");
const scrollContainer = document.getElementById("slide-cont");

function nextImage() {
    scrollContainer.scrollLeft += 610;
}

function prevImage() {
    scrollContainer.scrollLeft -= 610;
}

arrowRight.addEventListener("click", nextImage)
arrowLeft.addEventListener("click", prevImage)
