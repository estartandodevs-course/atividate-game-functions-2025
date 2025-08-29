const dados = require("../data/games_data");
// console.log(dados.jogos);

// 6. Formatar Lista de Jogos para Exibição

function formaterListaDeJogos()
{
    return dados.jogos.map(jogo => `${jogo.titulo} (${jogo.anoLancamento})`);
}
console.log(formaterListaDeJogos());