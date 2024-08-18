// novo recurso ES1025

const pessoa = {
    nome: 'Artur',
    Idade: 4,
    endereço: {
        rua: 'aslala',
        numero: 123,
    }
}

const { nome, Idade } = pessoa
console.log(nome, Idade)

const { nome: n, Idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorado = 'alalaal' } = pessoa
console.log(sobrenome, bemHumorado)

const { endereço: {rua, numero, cep } } = pessoa
console.log(rua, numero, cep)

// const { conta: {a, num} } = pessoa
// console.log(ag, num)