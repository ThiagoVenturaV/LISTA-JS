//Dado o array const nomes = ["Ana", "Carlos", "João", "Marina"], crie uma função que receba o array e utilize forEach para exibir todos os nomes com a frase:
// "Olá, [nome]!"

const nomes = ["Ana", "Carlos", "João", "Marya","Thiago"];

function cumprimentarNomes(array) {
    array.forEach((nome) => {
        console.log(`Olá, ${nome}!`);
    });
}

cumprimentarNomes(nomes);