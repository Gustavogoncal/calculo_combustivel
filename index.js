let inputIdaVolta = document.getElementById("idaVolta")
let inputLitrosCombus = document.getElementById("litrosCombus")
let inputKmL = document.getElementById("kmL")

let resultado = document.getElementById("res")
let erro = document.getElementById("erro")

document.getElementById("calcForm").addEventListener("submit", function (e) {
    e.preventDefault()
    calcular()
})

function parseNumeroBR(valor) {
    if (!valor) return NaN
    return parseFloat(valor.replace(",", "."))
}

function calcular() {
    let idaVolta = parseNumeroBR(inputIdaVolta.value)
    let litrosCombus = parseNumeroBR(inputLitrosCombus.value)
    let kmL = parseNumeroBR(inputKmL.value)

    let campos = [
        { input: inputIdaVolta, valor: idaVolta },
        { input: inputLitrosCombus, valor: litrosCombus },
        { input: inputKmL, valor: kmL },
    ]

    let algumInvalido = false
    campos.forEach(function (campo) {
        let invalido = !campo.valor || campo.valor <= 0
        campo.input.classList.toggle("campo-invalido", invalido)
        if (invalido) algumInvalido = true
    })

    if (algumInvalido) {
        erro.textContent = "Preencha todos os campos com valores maiores que zero."
        resultado.textContent = "R$ 0,00"
        return
    }

    erro.textContent = ""

    let calculo = (idaVolta / kmL) * litrosCombus

    resultado.textContent = calculo.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
}

// Mantém apenas números inteiros (ex.: total de km)
function mascaraKm(input) {
    input.classList.remove("campo-invalido")
    let digitos = input.value.replace(/\D/g, "").slice(0, 5)
    input.value = digitos
}

// Formata como número decimal com vírgula, preenchendo da direita para a esquerda (ex.: preço, km/L)
function mascaraDecimal(input) {
    input.classList.remove("campo-invalido")
    let digitos = input.value.replace(/\D/g, "").slice(0, 6)

    if (digitos === "") {
        input.value = ""
        return
    }

    digitos = digitos.padStart(3, "0")
    let parteInteira = digitos.slice(0, -2).replace(/^0+(?=\d)/, "")
    let parteDecimal = digitos.slice(-2)

    input.value = parteInteira + "," + parteDecimal
}
