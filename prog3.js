let vetor = [1, 2, 3, 4, 5]
let resposta = document.getElementById('resposta')
let resposta1 = document.getElementById('resposta1')
let v = []

function calcula() {
    resposta.innerHTML = vetor

    for (i = 0; i < vetor.length; i++) {
        v[i] = vetor[i] + 7
    }
    resposta1.innerHTML = "resposta é igual a: " + v
}
