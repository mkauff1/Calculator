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

function enterClick() {
    alert("You clicked me");
}

function loaded() {
    var enterBtn = document.getElementById("enter-btn");
    enterBtn.addEventListener("click", enterClick);
}

window.addEventListener("load", loaded);