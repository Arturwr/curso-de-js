// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando um função arrow em uma variável
const soma = (a, b) => {
    return (a + b)
}

console.log(soma(2, 3))

// Retorno implícito
const subtração = (a, b) => a - b
console.log(subtração(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Artur s2')