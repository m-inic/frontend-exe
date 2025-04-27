const listOfImgs = document.getElementById("game-holder");
const resetBtn = document.getElementById("restart-btn");
let gamePics = document.querySelectorAll(".game-picture");
const timeNumber = document.getElementById("timer-count");
const secs = document.getElementById("secs");

let timerStarted = false;
let firstImg = null;
let secondImg = null;
let clickedImg = '';
let matchingImgs = false;
let counterInterval;
let matchCount = 0;

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
    if (timerStarted) return;
    timerStarted = true;

    if (+timeNumber.innerHTML === 30) {
        counterInterval = setInterval(() => {
            timeNumber.innerHTML = +timeNumber.innerHTML - 1
            if (+timeNumber.innerHTML <= 0) {
                clearInterval(counterInterval);
                timeNumber.innerHTML = "Your time is up! Try again!"
                secs.textContent = secs.textContent.slice(0, -1);
                listOfImgs.style.pointerEvents = "none";
            }
        }, 1000)
    }
}

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
            matchCount += 2;
            console.log("its a match");
        }
        
        if(matchCount === gamePics.length) {
            clearInterval(counterInterval)
            timeNumber.innerHTML = "Congratulations!!! You won! Try again maybe?";
            listOfImgs.style.pointerEvents = "none";
            matchCount = 0;
            resetSelection();
        }
    }
}

function restartGame(event) {
    event.preventDefault();
    clearInterval(counterInterval)
    for (let i = 0; i < gamePics.length; i++) {
        gamePics[i].style.pointerEvents = "auto";
        gamePics[i].style.opacity = 0;
    }
    resetSelection();
    timeNumber.innerHTML = 30;
    timerStarted = false;
}

resetBtn.addEventListener("click", restartGame);
listOfImgs.addEventListener("click", matchImgs);