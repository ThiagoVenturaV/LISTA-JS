//Crie um script que pergunte um número ao usuário e exiba a tabuada de 1 a 10 utilizando um laço for.
let resposta = "";
const numero = parseInt(prompt("Digite um número para ver a tabuada:"));
    
for (let i = 1; i <= 10; i++) {
        resposta +=  `${numero} x ${i} = ${numero * i}\n`;
    }
alert(resposta);

