const arrowLeft = document.getElementById("arr-left");
const arrowRight = document.getElementById("arr-right");
const scrollContainer = document.getElementById("slide-cont");
const getToWork = document.getElementById("nav-menu-link-1");
const getToMe = document.getElementById("nav-menu-link-2");
const getToContact = document.getElementById("nav-menu-link-3");
const hiEmoji = document.getElementById("hi-emoji");
const toTopBtn = document.getElementById("to-top-btn");
const blackText = document.querySelectorAll("#assume span");
const circleMenuBtn = document.getElementById("circle-menu");
const linksList = document.querySelector("#link-frames ul");
const listLink1 = linksList.children[0].children[0]
const listLink2 = linksList.children[1].children[0]
const listLink3 = linksList.children[2].children[0]
const overlay = document.getElementById("overlay");

function nextImage() {
    if (window.innerWidth < 1280) {
        scrollContainer.scrollLeft += 610;
    } else if (window.innerWidth >= 1280) {
        scrollContainer.scrollLeft += 786;
    }
}

function prevImage() {
    if (window.innerWidth < 1280) {
        scrollContainer.scrollLeft -= 610;
    } else if (window.innerWidth >= 1280) {
        scrollContainer.scrollLeft -= 786;
    }
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
        top: 1600,
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

window.onscroll = function () { showToTopBtn() };

function showToTopBtn() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
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

if (window.innerWidth >= 1280) {
    blackText[0].style.color = "white";
    blackText[1].style.color = "white";
} else if (window.innerWidth < 1280) {
    blackText[0].style.color = "black";
    blackText[1].style.color = "black";
}

function showMenu() {
    listLink1.classList.remove("animate__fadeOutTopRight");
    listLink2.classList.remove("animate__fadeOutUp");
    listLink3.classList.remove("animate__fadeOutTopLeft");
    overlay.classList.remove("animate__fadeOutUp");

    linksList.style.display = "flex";
    listLink1.classList.add("animate__fadeInTopRight");
    listLink2.classList.add("animate__fadeInDown");
    listLink3.classList.add("animate__fadeInTopLeft");
    overlay.style.display = "block";
    listLink1.style.pointerEvents = "auto";
    listLink2.style.pointerEvents = "auto";
    listLink3.style.pointerEvents = "auto";
    overlay.style.opacity = "1";
    overlay.classList.add("animate__fadeInDown");
}

function hideMenu() {
    if (linksList.style.display === "flex") {
        listLink1.classList.replace("animate__fadeInTopRight", "animate__fadeOutTopRight");
        listLink2.classList.replace("animate__fadeInDown", "animate__fadeOutUp");
        listLink3.classList.replace("animate__fadeInTopLeft", "animate__fadeOutTopLeft");
        overlay.classList.replace("animate__fadeInDown", "animate__fadeOutUp");
        overlay.style.opacity = "0";
        listLink1.style.pointerEvents = "none";
        listLink2.style.pointerEvents = "none";
        listLink3.style.pointerEvents = "none";
    }
}

circleMenuBtn.addEventListener("click", showMenu);
overlay.addEventListener("click", hideMenu);
listLink1.addEventListener("click", hideMenu);
listLink2.addEventListener("click", hideMenu);
listLink3.addEventListener("click", hideMenu);