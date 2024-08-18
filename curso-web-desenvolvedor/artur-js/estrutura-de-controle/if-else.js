const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else { // else ira ser usado se if for falso
        console.log('Reprovado!')
    }
}

imprimirResultado(6)
imprimirResultado(8)
imprimirResultado('aaaa')