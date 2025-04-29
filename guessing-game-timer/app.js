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
const picPathName = [
    "crunchyCat.jpg", "cryingCat.jpg", "grinchMatcha.jpg", "heavyCat.jpg",
    "icedMatcha.jpg", "lavandMatcha.jpg", "mangoMatcha.jpg", "matchaChia.jpg",
    "sleeperCat.jpg", "sorryCat.jpg", "strawberryMatcha.jpg", "tough-life-of-a-street-cat-v0-32m4rxvp44sa1.jpg"
]

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

    if (+timeNumber.innerHTML === 45) {
        counterInterval = setInterval(() => {
            timeNumber.innerHTML = +timeNumber.innerHTML - 45;
            if (+timeNumber.innerHTML <= 0) {
                clearInterval(counterInterval);
                timeNumber.innerHTML = "Your time is up! Try again!";
                listOfImgs.style.pointerEvents = "none";
                timerStarted = false;
            }
        }, 1000)
    }
    timeNumber.innerHTML = 45;
}

// TREBA DA NAPRAVIM PREV I CUR I DA UPOREDJUJEM, I TREBA KAD ISTEKNE VREME DA NE MOZE DA SE KLIKCE

function randomizePlacement() {
    let imgPool = []
    picPathName.forEach(name => {
        imgPool.push(name);
        imgPool.push(name);
    });

    imgPool.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 24; i++) {
        gamePics[i].src = `pics/game/${imgPool[i]}`
        gamePics[i].style.opacity = 0;
        gamePics[i].style.pointerEvents = "auto";
        console.log(gamePics[i]);
    }
}

function matchImgs(event) {
    if (timeNumber.innerHTML === "Your time is up! Try again!") {
        return
    };
    
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

        if (matchCount === gamePics.length) {
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

    listOfImgs.style.pointerEvents = "auto";
    resetSelection();
    timeNumber.innerHTML = 45;
    timerStarted = false;
    randomizePlacement();
}

resetBtn.addEventListener("click", restartGame);
listOfImgs.addEventListener("click", matchImgs);
