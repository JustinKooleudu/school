function plus() {
    var field1 = document.getElementById('num1').Value;
    var field2 = document.getElementById('num2').value;

    var result = parseFloat(field1) + parseFloat(field2);

    if (!isNaN(result))

    {
        document.getElementById("TextChange").textContent= "Het antwoord is: " + result;

        document.getElementById("TextChange").style.color = "rgb(0, 0, 0)";
    }
}
function minus() {
    var field1 = document.getElementById('num1').value;
    var field2 = document.getElementById('num2').value;

    var result = parseFloat(field1) - parseFloat(field2);

    if (!isNaN(result))

    {
        document.getElementById("TextChange").textContent= "Het antwoord is: " + result;

        document.getElementById("TextChange").style.color = "rgb(0, 0, 0)";
    }
}
function multiply() {
    var field1 = document.getElementById('num1').value;
    var field2 = document.getElementById('num2').value;

    var result = parseFloat(field1) * parseFloat(field2);

    if (!isNaN(result))

    {
        document.getElementById("TextChange").textContent= "Het antwoord is: " + result;

        document.getElementById("TextChange").style.color = "rgb(0, 0, 0)";
    }
}
function divide() {
    var field1 = document.getElementById('num1').value;
    var field2 = document.getElementById('num2').value;

    var result = parseFloat(field1) / parseFloat(field2);

    if (!isNaN(result))

    {
        document.getElementById("TextChange").textContent= "Het antwoord is: " + result;

        document.getElementById("TextChange").style.color = "rgb(0, 0, 0)";
    }
}

function Plus() {
    var field1 = document.getElementById('num1').value;
    var field2 = document.getElementById('num2').value;
 
    var result = parseFloat(field1) + parseFloat(field2);
    if (!isNaN(result))
 
    {
        document.getElementById("TextChange").textContent= "Het antwoord is: " + result;
        document.getElementById("TextChange").style.color = "rgb(0, 0, 0)";
    }
}
 
function Minus() {
    var field1 = document.getElementById('num1').value;
    var field2 = document.getElementById('num2').value;
 
    var result = parseFloat(field1) - parseFloat(field2);
    if (!isNaN(result))
 
    {
        document.getElementById("TextChange").textContent= "Het antwoord is: " + result;
        document.getElementById("TextChange").style.color = "rgb(0, 0, 0)";
    }
}

function Multiply() {
    var field1 = document.getElementById('num1').value;
    var field2 = document.getElementById('num2').value;
 
    if ((field1<=0)) {
        document.getElementById("TextChange").textContent= "Het Nummer1 is te laag ";
        document.getElementById("TextChange").style.color = "red";
    }
    else {
    if ((field2<=0)) {
        document.getElementById("TextChange").textContent= "Het Nummer2 is te laag ";
        document.getElementById("TextChange").style.color = "red";
    }
    else {
    var result = parseFloat(field1) * parseFloat(field2);
    if (!isNaN(result))
 
    {
        document.getElementById("TextChange").textContent= "Het antwoord is: " + result;
        document.getElementById("TextChange").style.color = "rgb(0, 0, 0)";
    }
}
}
}

function Divide() {
    var field1 = document.getElementById('num1').value;
    var field2 = document.getElementById('num2').value;
 
    if ((field1<=0)) {
        document.getElementById("TextChange").textContent= "Het Nummer1 is te laag ";
        document.getElementById("TextChange").style.color = "red";
 
    }
    else {
    if ((field2<=0)) {
        document.getElementById("TextChange").textContent= "Het Nummer2 is te laag ";
        document.getElementById("TextChange").style.color = "red";
    }
    else {
    var result = parseFloat(field1) / parseFloat(field2);
    if (!isNaN(result))
 
    {
        document.getElementById("TextChange").textContent= "Het antwoord is: " + result;
        document.getElementById("TextChange").style.color = "rgb(0, 0, 0)";
    }
}
}
}
 
function Round() {
    var RoundNumber = document.getElementById("TextChange").textContent;
    var RoundedNumber = RoundNumber.slice(17, 35);
 
    document.getElementById("TextChange").innerHTML = "Het antwoord is: " +  Math.round(RoundedNumber);
 
}