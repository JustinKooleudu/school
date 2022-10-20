function budget() {
    let budget = 100
    let product = Number(prompt("het kost het product?"))
    if (budget > product) {
        alert("U heeft genoeg geld!")
    }
    else {
        alert("Helaas, te weinig geld")
    }
}