//Dado o array const numeros = [10, 20, 30, 40, 50], utilize forEach para somar todos os elementos e exibir o total no console.

const numeros = [10, 20, 30, 40, 50];
let total = 0;

numeros.forEach((numero) => {
    total += numero;
});

console.log("Total: " + total);