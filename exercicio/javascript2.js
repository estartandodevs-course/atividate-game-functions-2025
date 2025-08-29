const dados = require("../data/games_data");
// console.log(dados.jogos);

// 2. Listar Jogos de um Gênero Específico

function filtrarJogosPorGenero(idGenero)
{
    return dados.jogos.filter(jogo => jogo.idsGeneros.includes(idGenero));
}
console.log(filtrarJogosPorGenero("0938aa23-f153-4937-9f88-4858b24d6bce"));
