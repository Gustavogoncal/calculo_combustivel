let inputIdaVolta = document.getElementById("idaVolta")
let inputLitrosCombus = document.getElementById("litrosCombus")
let inputKmL = document.getElementById("kmL")

let resultado = document.getElementById("res")

function calcular(){
    console.log("Calculando...")

    let idaVolta = parseFloat(inputIdaVolta.value)
    let litrosCombus = parseFloat(inputLitrosCombus.value)
    let kmL = parseFloat(inputKmL.value)

    let calculo = (idaVolta / kmL) * litrosCombus

    resultado.innerHTML = (calculo).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
    
}

function mascara(i, t){

    var v = i.value

    if(isNaN(v[v.length-1])){
        i.value = v.substring(0,v.length-1)
        return
    }

    if(t == "km"){
        i.setAttribute("maxlength", 4)
    }

    if(t == "valor"){
        i.setAttribute("maxlength", 2)
    }

    if(t == "kmLitros"){
        i.setAttribute("maxlength", 2)
    }
}