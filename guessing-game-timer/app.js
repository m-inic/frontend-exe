const listOfImgs = document.getElementById("game-holder");
const resetBtn = document.getElementById("restart-btn");
let gamePics = document.querySelectorAll(".game-picture");
const timeNumber = document.getElementById("timer-count");
const secs = document.getElementById("secs");

let firstImg = null;
let secondImg = null;
let clickedImg = '';
let matchingImgs = false;
let counterInterval;

function getFirstImg() {
    firstImg = clickedImg;
}

function getSecondImg() {
    secondImg = clickedImg;
}

function resetSelection() {
    firstImg = null;
    secondImg = null;
}

function saveSelection() {
    getFirstImg();
    getSecondImg();
    firstImg.style.opacity = 1;
    secondImg.style.opacity = 1;
    resetSelection();
}

function startTimer() {
    if (+timeNumber.innerHTML === 90) {
        counterInterval = setInterval(() => {
            timeNumber.innerHTML = +timeNumber.innerHTML - 89
            if (+timeNumber.innerHTML <= 0) {
                clearInterval(counterInterval);
                timeNumber.innerHTML = "Your time is up! Try again!"
                secs.textContent = secs.textContent.slice(0, -1);
                listOfImgs.style.pointerEvents = "none";
            }
        }, 1000)
    }
}

// RESTART TIMER FUNCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function matchImgs(event) {
    startTimer();

    if (event.target.nodeName === "IMG") {
        clickedImg = event.target;
    } else if (clickedImg.nodeName !== "IMG" || clickedImg === firstImg || clickedImg.style.opacity == 1) {
        return;
    }

    if (!firstImg) {
        getFirstImg();
        firstImg.style.opacity = 1;
        console.log("firstImg");
    } else if (!secondImg && firstImg != null) {
        getSecondImg();
        secondImg.style.opacity = 1;
        console.log("secondImg");
        if (firstImg.src !== secondImg.src || firstImg.dataset.value === secondImg.dataset.value) {
            setTimeout(() => {
                firstImg.style.opacity = 0;
                secondImg.style.opacity = 0;
                resetSelection();
            }, 300);
        } else if (firstImg.src === secondImg.src) {
            matchImgs = true;
            firstImg.style.pointerEvents = "none";
            secondImg.style.pointerEvents = "none";
            saveSelection();
            console.log("its a match");
        }
    }
}

function restartGame(event) {
    event.preventDefault();
    for (let i = 0; i < gamePics.length; i++) {
        gamePics[i].style.pointerEvents = "auto";
        gamePics[i].style.opacity = 0;
    }
    resetSelection();
}

resetBtn.addEventListener("click", restartGame);
listOfImgs.addEventListener("click", matchImgs);