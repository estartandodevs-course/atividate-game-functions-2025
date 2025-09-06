const dados = require("../data/games_data");

function calcularMediaMetacritic() {
    const totalNotas = dados.jogos.reduce((soma, jogo) => soma + jogo.nota, 0);
    return totalNotas / dados.jogos.length;
}
const mediaMetacritic = calcularMediaMetacritic();
console.log(`Média das notas Metacritic: ${mediaMetacritic.toFixed(2)}`);