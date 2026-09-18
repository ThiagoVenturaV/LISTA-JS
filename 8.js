//Crie uma função chamada ehPrimo(numero) que verifique se um número é primo. A função deve retornar true ou false.

function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    if (numero <= 3) {
        return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

console.log(ehPrimo(7));  // true
console.log(ehPrimo(55)); // false