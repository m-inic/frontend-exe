const listOfImgs = document.getElementById("game-holder");

let firstImg = undefined;
let secondImg = undefined;

function matchImgs(event) {
    let clickedImg = '';

    if(event.target.nodeName === "IMG") {
        clickedImg = event.target;
    } else {
        return;
    }
    
    if(firstImg === undefined) {
        firstImg = clickedImg;
        firstImg.style.opacity = 1;
        console.log(firstImg)
        console.log(secondImg)
    } else if(secondImg === undefined && firstImg != undefined) {
        secondImg = clickedImg;
        secondImg.style.opacity = 1;
        console.log(firstImg)
        console.log(secondImg)
    }

    // DA OSTANU AKO SU ISTI ELEMENTI, DA SE GASE AKO NISU

}

listOfImgs.addEventListener("click", matchImgs);