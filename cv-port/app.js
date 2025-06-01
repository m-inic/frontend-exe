const arrowLeft = document.getElementById("arr-left");
const arrowRight = document.getElementById("arr-right");
const scrollContainer = document.getElementById("slide-cont");
const getToWork = document.getElementById("nav-menu-link-1");
const getToMe = document.getElementById("nav-menu-link-2");
const getToContact = document.getElementById("nav-menu-link-3");
const hiEmoji = document.getElementById("hi-emoji");
const toTopBtn = document.getElementById("to-top-btn");

function nextImage() {
    scrollContainer.scrollLeft += 610;
}

function prevImage() {
    scrollContainer.scrollLeft -= 610;
}

arrowRight.addEventListener("click", nextImage)
arrowLeft.addEventListener("click", prevImage)

getToWork.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({
        top: 800,
        behavior: "smooth"
    });
});

getToMe.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({
        bottom: 0,
        behavior: "smooth"
    });
});

getToContact.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({
        top: 2300,
        behavior: "smooth"
    });
});

function shakeHand() {
    hiEmoji.classList.toggle("animate__shakeX");
}

hiEmoji.addEventListener("click", shakeHand);

window.onscroll = function() {showToTopBtn()};

function showToTopBtn() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        toTopBtn.style.display = "flex";
        toTopBtn.style.opacity = 1;
    } else {
        toTopBtn.style.display = "none";
    }
}

showToTopBtn();

toTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
})