// let num1 = document.getElementById("1");
// let num2 = document.getElementById("2");
// let num3 = document.getElementById("3");
// let num4 = document.getElementById("4");
// let num5 = document.getElementById("5");
// let num6 = document.getElementById("6");
// let num7 = document.getElementById("7");
// let num8 = document.getElementById("8");
// let num9 = document.getElementById("9");
// let num0 = document.getElementById("0")

// let currNum;
// let nextNum;
// let result;

// let outputEl = document.getElementById("output-box");
// let clearBtn = document.getElementById("clear");

// let dot = document.getElementById("dot");
// let plus = document.getElementById("plus");
// let minus = document.getElementById("minus");
// let divide = document.getElementById("divide");
// let multiply = document.getElementById("multiply");
// let equals = document.getElementById("equals");

// let numbers = [
//     +num1.innerHTML, +num2.innerHTML, +num3.innerHTML,
//     +num4.innerHTML, +num5.innerHTML, +num6.innerHTML,
//     +num7.innerHTML, +num8.innerHTML, +num9.innerHTML,
//     num0.innerHTML
// ];

// function addDot() {
//     if (outputEl.innerHTML === "") {
//         outputEl.innerHTML = outputEl.innerHTML + num0.innerHTML;
//         return outputEl.innerHTML = outputEl.innerHTML + dot.innerHTML;
//     } else if (!outputEl.innerHTML.includes(".")) {
//         return outputEl.innerHTML = outputEl.innerHTML + dot.innerHTML;
//     }
// }

// function addNum1() {
//     if (outputEl.innerHTML.includes("0")) {
//         addDot()
//         return outputEl.innerHTML = outputEl.innerHTML + numbers[0];
//     } else if (outputEl.innerHTML.includes(0 + ".")) {
//         return outputEl.innerHTML = numbers[0] + dot.innerHTML;
//     }
//     outputEl.innerHTML = outputEl.innerHTML + numbers[0];
// }

// function addNum2() {
//     if (outputEl.innerHTML.includes("0")) {
//         addDot()
//         return outputEl.innerHTML = outputEl.innerHTML + numbers[1];
//     }
//     outputEl.innerHTML = outputEl.innerHTML + numbers[1];
// }

// function addNum3() {
//     if (outputEl.innerHTML.includes("0")) {
//         addDot()
//         return outputEl.innerHTML = outputEl.innerHTML + numbers[2];
//     }
//     outputEl.innerHTML = outputEl.innerHTML + numbers[2];
// }

// function addNum4() {
//     if (outputEl.innerHTML.includes("0")) {
//         addDot()
//         return outputEl.innerHTML = outputEl.innerHTML + numbers[3];
//     }
//     outputEl.innerHTML = outputEl.innerHTML + numbers[3];
// }

// function addNum5() {
//     if (outputEl.innerHTML.includes("0")) {
//         addDot()
//         return outputEl.innerHTML = outputEl.innerHTML + numbers[4];
//     }
//     outputEl.innerHTML = outputEl.innerHTML + numbers[4];
// }

// function addNum6() {
//     if (outputEl.innerHTML.includes("0")) {
//         addDot()
//         return outputEl.innerHTML = outputEl.innerHTML + numbers[5];
//     }
//     outputEl.innerHTML = outputEl.innerHTML + numbers[5];
// }

// function addNum7() {
//     if (outputEl.innerHTML.includes("0")) {
//         addDot()
//         return outputEl.innerHTML = outputEl.innerHTML + numbers[6];
//     }
//     outputEl.innerHTML = outputEl.innerHTML + numbers[6];
// }

// function addNum8() {
//     if (outputEl.innerHTML.includes("0")) {
//         addDot()
//         return outputEl.innerHTML = outputEl.innerHTML + numbers[7];
//     }
//     outputEl.innerHTML = outputEl.innerHTML + numbers[7];
// }

// function addNum9() {
//     if (outputEl.innerHTML.includes("0")) {
//         addDot()
//         return outputEl.innerHTML = outputEl.innerHTML + numbers[8];
//     }
//     outputEl.innerHTML = outputEl.innerHTML + numbers[8];
// }

// function addNum0() {
//     if (outputEl.innerHTML === "") {
//         return outputEl.innerHTML = outputEl.innerHTML + numbers[9];
//     } else if (outputEl.innerHTML === "0") {
//         return addDot();
//     } else {
//         return outputEl.innerHTML = outputEl.innerHTML + numbers[9];
//     }
// }

// function clearOutput() {
//     outputEl.innerHTML = "";
//     currNum = "";
//     nextNum = "";
// }

// function plusOperation() {
//     currNum = outputEl.innerHTML;
//     if(!outputEl.innerHTML.includes("+")) {
//         outputEl.innerHTML = currNum + "+";
//     } else {
//         return;
//     }
// }

// function minusOperation() {
//     currNum = outputEl.innerHTML;
//     if(!outputEl.innerHTML.includes("-")) {
//         outputEl.innerHTML = currNum + "-";
//     } else {
//         return;
//     }
// }

// function divideOperation() {
//     currNum = outputEl.innerHTML;
//     if(!outputEl.innerHTML.includes("/")) {
//         outputEl.innerHTML = currNum + "/";
//     } else {
//         return;
//     }
// }

// function multiplyOperation() {
//     currNum = outputEl.innerHTML;
//     if(!outputEl.innerHTML.includes("*")) {
//         outputEl.innerHTML = currNum + "*";
//     } else {
//         return;
//     }
// }

// function calculate() {
//     if(outputEl.innerHTML.includes("+")) {
//         nextNum = outputEl.innerHTML[2];
//         console.log(nextNum)
//         result = +currNum + +nextNum;
//         console.log(result)
//         return outputEl.innerHTML = result;
//     } else if(outputEl.innerHTML.includes("-")) {
//         nextNum = outputEl.innerHTML[2];
//         console.log(nextNum)
//         result = +currNum - +nextNum;
//         return outputEl.innerHTML = result;
//     } else if(outputEl.innerHTML.includes("*")) {
//         nextNum = outputEl.innerHTML[2];
//         result = +currNum * +nextNum;
//         return outputEl.innerHTML = result;
//     } else if(outputEl.innerHTML.includes("/")) {
//         nextNum = outputEl.innerHTML[2];
//         result = +currNum / +nextNum;
//         return outputEl.innerHTML = result;
//     }
// }

// num1.addEventListener("click", addNum1);
// num2.addEventListener("click", addNum2);
// num3.addEventListener("click", addNum3);
// num4.addEventListener("click", addNum4);
// num5.addEventListener("click", addNum5);
// num6.addEventListener("click", addNum6);
// num7.addEventListener("click", addNum7);
// num8.addEventListener("click", addNum8);
// num9.addEventListener("click", addNum9);
// num0.addEventListener("click", addNum0);
// dot.addEventListener("click", addDot);
// clearBtn.addEventListener("click", clearOutput);
// plus.addEventListener("click", plusOperation);
// minus.addEventListener("click", minusOperation);
// divide.addEventListener("click", divideOperation);
// multiply.addEventListener("click", multiplyOperation);
// equals.addEventListener("click", calculate);
// SLEDECI KORAK - LOGIKA MATEMATICKIH OPERACIJA

// samo currNum mi se sacuva, a nextNum ne mogu da dobijem, ne racuna decimalne brojeve, ne mogu da stavim
// tacku posle +-*/, samo currNum sa currNum se samo racuna 
//

const display = document.getElementById("output-box");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}