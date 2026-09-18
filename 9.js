//Crie uma função que receba um número n e utilize um laço while para somar os n primeiros números inteiros (1 + 2 + 3 + ... + n). Retorne o resultado da soma.

function somaNumeros(n) {
    let soma = 0;
    let i = 1;
    while (i <= n) {
        soma += i;
        i++;
    }
    return soma;
}

console.log(somaNumeros(5));