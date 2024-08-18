    // funcao é uma ação que executa um processo baseado na sentença de código
    // função define um bloco{} na qual tem todas as sentenças de codigos que serão executadas quando voce executar
    // função recebe dados
    // função tem que ter todos os passos, como uma receita
    // função é um bloco de códigos nomeado
    // função recebe parametros de entradas (ingredientes)


// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 3, 4, 5)
imprimirSoma()

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma('artur'))
console.log(soma())