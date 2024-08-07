let vetor = [1, 2, 3, 4, 5]
let resposta = document.getElementById('resposta')
let v = []

function calcula() {
    let num = Number(document.getElementById('num').value)

    for (i = 0; i < vetor.length; i++) {
        v[i] = vetor[i] * num
    }
    resposta.innerHTML = v
}
