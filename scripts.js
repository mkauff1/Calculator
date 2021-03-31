function getValidNumber(message) {
    while (true) {
        var rawInput = prompt(message);
        var parsedInput = parseFloat(rawInput);
        if (Number.isNaN(parsedInput)) {
            alert ("Bad Numbers"); 
        }
        else {
            return parsedInput;
        }
    }
}
//var a = getValidNumber("Input left side");
//var b = getValidNumber("Input right side");

//var c = Math.sqrt((a*a)+(b*b));
//alert("Hello " + c);

function PerformOp(operation) {
    firstValue = outputBox.innerHTML;
    outputBox.innerHTML = "0";
    operationPerf = operation;
}

function divideClick() {
    PerformOp("/");
}
function multiplyClick() {
    PerformOp("*");
}
function subtractClick() {
    PerformOp("-");
}
function additionClick() {
    PerformOp("+");
}
function sevenClick() {
    addToOutputBox("7");
}
function eightClick() {
    addToOutputBox("8");
}
function nineClick() {
    addToOutputBox("9");
}
function fourClick() {
    addToOutputBox("4");
}
function fiveClick() {
    addToOutputBox("5");
}
function sixClick() {
    addToOutputBox("6");
}
function oneClick() {
     addToOutputBox("1");
}
function twoClick() {
    addToOutputBox("2");
}
function threeClick() {
    addToOutputBox("3");
}
function clearClick() {
    PerformOp("");
}
function zeroClick() {
    addToOutputBox("0");
}
function periodClick() {
    addToOutputBox(".");
}
function enterClick() {
    var a = parseFloat(firstValue);
    var b = parseFloat(outputBox.innerHTML);
    var c = 0;

    switch (operationPerf) {
        case "+":
            c = a + b; 
            break;

        case "-":
            c = a - b;
            break;

        case "*":
            c = a * b;
            break;

        case "/":
            c = a / b;
            break;
    }

    outputBox.innerHTML = c.toString();
}

var outputBox;
var firstValue;
var operationPerf;


function addToOutputBox(number){
    
    if (outputBox.innerHTML === "0"){
        outputBox.innerHTML = number;
    }
    else {
        outputBox.innerHTML += number;
    }
}
function loaded() {
    outputBox = document.getElementById("output-box");
    document.getElementById("divide-btn").addEventListener("click", divideClick);
    document.getElementById("multiply-btn").addEventListener("click", multiplyClick);
    document.getElementById("subtract-btn").addEventListener("click", subtractClick);
    document.getElementById("addition-btn").addEventListener("click", additionClick);
    document.getElementById("seven-btn").addEventListener("click", sevenClick);
    document.getElementById("eight-btn").addEventListener("click", eightClick);
    document.getElementById("nine-btn").addEventListener("click", nineClick);
    document.getElementById("four-btn").addEventListener("click", fourClick);
    document.getElementById("five-btn").addEventListener("click", fiveClick);
    document.getElementById("six-btn").addEventListener("click", sixClick);
    document.getElementById("one-btn").addEventListener("click", oneClick);
    document.getElementById("two-btn").addEventListener("click", twoClick);
    document.getElementById("three-btn").addEventListener("click", threeClick);
    document.getElementById("clear-btn").addEventListener("click", clearClick);
    document.getElementById("zero-btn").addEventListener("click", zeroClick);
    document.getElementById("period-btn").addEventListener("click", periodClick);
    document.getElementById("enter-btn").addEventListener("click", enterClick);
}

window.addEventListener("load", loaded);