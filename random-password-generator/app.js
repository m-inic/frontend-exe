let minOutput = document.getElementById("min_output");
let minRange = document.getElementById("min");
let maxOutput = document.getElementById("max_output");
let maxRange = document.getElementById("max");
const subBtn = document.getElementById("sub-btn");

function getMinRangeVal() {
    minOutput.textContent = minRange.value;
    return minOutput.textContent;
}

function getMaxRangeVal() {
    maxOutput.textContent = maxRange.value;
    return maxOutput.textContent;
}

function generateRandomLetterSequence(event) {
    event.preventDefault();

    const upperCaseBtn = document.getElementById("up");
    const numberBtn = document.getElementById("num");
    const symbolBtn = document.getElementById("symbol");

    let minRangeNum = getMinRangeVal();
    let maxRangeNum = getMaxRangeVal();

    const firstHeading = document.querySelector("#heading-div h1");

    let numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let lettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let capLettersArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let symbolsArray = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', ',', '.', '/', '<', '>', '?'];

    let stringLength = maxRangeNum - minRangeNum;

    let allTheChars = [...numArray, ...lettersArray, ...symbolsArray];
    let lettersAndNums = [...numArray, ...lettersArray];
    let symbolsAndLetters = [...lettersArray, ...symbolsArray];
    let capAndLetters = [...capLettersArray, ...lettersArray];
    let capAndNums = [...capLettersArray, ...numArray, ...lettersArray];
    let capAndSymbols = [...capLettersArray, ...symbolsArray, ...lettersArray];
    let capAll = [...capLettersArray, ...symbolsArray, ...numArray,...lettersArray]

    if (+minRangeNum === "0" || +maxRangeNum === "0") {
        alert("Choose a min and max range first!");
        return;
    } else if (+minRangeNum >= +maxRangeNum) {
        alert("Min must be lower than Max!");
    } else if (+minRangeNum < +maxRangeNum && !upperCaseBtn.checked && !numberBtn.checked && !symbolBtn.checked) { // REGULAR SCEN
        firstHeading.length = stringLength;
        let theSequence = "";
        for (let i = 0; i < stringLength; i++) {
            let singleResult = lettersArray.at(Math.floor(Math.random() * 26));
            theSequence += singleResult;
            console.log("samo slova");
        }
        firstHeading.textContent = theSequence;
    } else if (+minRangeNum < +maxRangeNum && upperCaseBtn.checked && !numberBtn.checked && !symbolBtn.checked) { // UPPERCASE SCEN
        firstHeading.length = stringLength;
        let theSequence = "";
        for (let i = 0; i < stringLength; i++) {
            let singleResult = capAndLetters.at(Math.floor(Math.random() * capAndLetters.length));
            theSequence += singleResult;
            console.log("samo slova UPPER");
        }
        firstHeading.textContent = theSequence;
    } else if (+minRangeNum < +maxRangeNum && numberBtn.checked && !symbolBtn.checked && !upperCaseBtn.checked) { // NUMBER SCEN
        firstHeading.length = stringLength;
        let theSequence = "";
        for (let i = 0; i < stringLength; i++) {
            let singleResult = lettersAndNums.at(Math.floor(Math.random() * lettersAndNums.length));
            theSequence += singleResult;
            console.log("samo slova i brojevi");
        }
        firstHeading.textContent = theSequence;
    } else if (+minRangeNum < +maxRangeNum && numberBtn.checked && upperCaseBtn.checked && !symbolBtn.checked) { // NUMBER UPPER SCEN
        firstHeading.length = stringLength;
        let theSequence = "";
        for (let i = 0; i < stringLength; i++) {
            let singleResult = capAndNums.at(Math.floor(Math.random() * capAndNums.length));
            theSequence += singleResult;
            console.log("slova brojevi UPPER");
        }
        firstHeading.textContent = theSequence;
    } else if (+minRangeNum < +maxRangeNum && symbolBtn.checked && !numberBtn.checked && !upperCaseBtn.checked) { // SYMBOL SCEN
        firstHeading.length = stringLength;
        let theSequence = "";
        for (let i = 0; i < stringLength; i++) {
            let singleResult = symbolsAndLetters.at(Math.floor(Math.random() * symbolsAndLetters.length));
            theSequence += singleResult;
            console.log("samo slova i simboli");
        }
        firstHeading.textContent = theSequence;
    } else if (+minRangeNum < +maxRangeNum && symbolBtn.checked && numberBtn.checked && !upperCaseBtn.checked) { // SYMBOL NUM SCEN
        firstHeading.length = stringLength;
        let theSequence = "";
        for (let i = 0; i < stringLength; i++) {
            let singleResult = allTheChars.at(Math.floor(Math.random() * allTheChars.length));
            theSequence += singleResult;
            console.log("slova brojevi simboli");
        }
        firstHeading.textContent = theSequence;
    } else if (+minRangeNum < +maxRangeNum && symbolBtn.checked && upperCaseBtn.checked && !numberBtn.checked) { // SYMBOL UPPER SCEN
        firstHeading.length = stringLength;
        let theSequence = "";
        for (let i = 0; i < stringLength; i++) {
            let singleResult = capAndSymbols.at(Math.floor(Math.random() * capAndSymbols.length));
            theSequence += singleResult;
            console.log("slova simboli UPPER");
        }
        firstHeading.textContent = theSequence;
    } else if (+minRangeNum < +maxRangeNum && symbolBtn.checked && upperCaseBtn.checked && numberBtn.checked) { // SVE
        firstHeading.length = stringLength;
        let theSequence = "";
        for (let i = 0; i < stringLength; i++) {
            let singleResult = capAll.at(Math.floor(Math.random() * capAll.length));
            theSequence += singleResult;
            console.log("slova simboli brojevi UPPER");
        }
        firstHeading.textContent = theSequence;
    }
}

maxRange.addEventListener("change", getMaxRangeVal);
minRange.addEventListener("change", getMinRangeVal);
subBtn.addEventListener("click", generateRandomLetterSequence);