let resposta = document.getElementById('resposta')
let v1 = []

function armazena() {
    v1.push(Number(document.getElementById('v1').value))
    resposta.innerHTML = v1 
}

function calcula() {
    let vs = 0

    for (i = 0; i < v1.length; i++) {
        vs += v1[i]
    }
    resposta.innerHTML = 'A soma dos vetores é igual a: ' + vs
}