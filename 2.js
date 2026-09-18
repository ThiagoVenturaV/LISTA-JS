//Crie um programa que peça ao usuário para digitar a palavra "javascript". Enquanto ele digitar errado, o programa deve continuar pedindo (utilize do...while). Ao acertar, exiba "Você acertou!".
let tentativa;

do {
    tentativa = prompt("Qual a linguagem de programação mais utilizada?");
} while (tentativa !== "javascript");
alert("Você acertou!");