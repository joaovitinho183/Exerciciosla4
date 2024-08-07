let vetor = [1, 2, 3, 4, 5]
let resposta = document.getElementById('resposta')
let v = []

function calcula() {
    for (i = 0; i < vetor.length; i++){
        v[i] = vetor[i] * 3
    }
    resposta.innerHTML = v
}
