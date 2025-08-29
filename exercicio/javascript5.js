const dados = require("../data/games_data");
// console.log(dados.jogos);

// 5. Criar Lista de Títulos de Jogos
function obterTitulosDeJogos()
{
    return dados.jogos.map(jogo => jogo.titulo);
}

console.log(obterTitulosDeJogos());