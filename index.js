let inputIdaVolta = document.getElementById("idaVolta")
let inputLitrosCombus = document.getElementById("litrosCombus")
let inputKmL = document.getElementById("kmL")

let resultado = document.getElementById("res")

function calcular(){
    console.log("Calculando...")

    let idaVolta = inputIdaVolta.value
    let litrosCombus = inputLitrosCombus.value
    let kmL = inputKmL.value

    let calculo = (idaVolta / kmL) * litrosCombus

    resultado.innerHTML = (calculo).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
    
}