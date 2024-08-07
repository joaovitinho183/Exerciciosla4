let vetor = [1, 2, 3, 4, 5]
let resposta1 = document.getElementById('resposta1')
let v = []

function calcula() {
    let num = Number(document.getElementById('num').value)

    for (i = 0; i < vetor.length; i++) {
        v[i] = vetor[i] + num
    }
    resposta1.innerHTML = "resposta é igual a: " + v
}
