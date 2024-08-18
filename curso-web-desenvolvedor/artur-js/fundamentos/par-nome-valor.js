// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaa' // contexto léxico 2
    return saudacao
}

// Objetos sao um grupo de par nome/valor
const Cliente = {
    Nome: 'Pedro',
    Idade: 32,
    peso: 90,
    endereco: {
        rua: 'lalalalal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)