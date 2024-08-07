let resposta = document.getElementById('resposta')
let v1 = []
let v2 = []

function armazena() {
    v1.push(Number(document.getElementById('v1').value))
    v2.push(Number(document.getElementById('v2').value))
    resposta.innerHTML = v1 + " e " + v2
}

function calcula() {
    let vs = []


    for (i = 0; i < v1.length; i++) {
        vs[i] = v1[i] - v2[i]
    }
    resposta.innerHTML = 'A soma dos vetores é igual a: ' + vs
}