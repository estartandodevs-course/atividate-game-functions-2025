const dados = require("../data/games_data");
// console.log(dados.jogos);

// 8. Calcular a Média das Notas Metacritic

function calcularMediaMetacritic()
{
    const total = dados.jogos.reduce((acc, jogo) => acc + jogo.nota, 0);
    const media = total / dados.jogos.length;
    return media;
}
console.log(calcularMediaMetacritic());