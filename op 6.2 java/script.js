function changecolor (){
    alert("het werkt");
    console.log("het werkt in de console");
}

function changetext (){
    document.getElementById("1"). textContent = "hallo";
}

function calculator(num, num2) {
    let text = prompt("ask your question")
    let answer = num + num2;
    console.log(answer)
}

function multiplybyfive (num) {
    let text = prompt("wich number needs to be multiplied?")
    let answer = num * 5;
    console.log(answer)
    alert(answer)
}
function sectomin (num) {
    let text = prompt("how many seconds need to be converted to minutes?")
    let answer = num / 60;
    console.log(answer)
    alert(answer)
}