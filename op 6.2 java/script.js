function changecolor (){
    alert("het werkt");
    console.log("het werkt in de console");
}

function changetext (){
    document.getElementById("1"). textContent = "hallo";
}

function calculator() {
    let num = Number(prompt("give your first number"))
    let num2 = Number(prompt("give your second number"))
    let answer = num + num2;
    console.log(answer)
}

function multiplybyfive () {
    let num = Number(prompt("wich number needs to be multiplied?"))
    let answer = num * 5;
    console.log(answer)
    alert(answer)
}
function sectomin () {
    let num = Number(prompt("how many seconds need to be converted to minutes?"))
    let answer = num / 60;
    console.log(answer)
    alert(answer)
}