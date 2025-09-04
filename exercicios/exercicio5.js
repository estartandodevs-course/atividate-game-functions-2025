
const dados = require("../data/games_data");

function obterTitulosDeJogos() {
    return dados.jogos.map((jogo) => jogo.titulo);
}

const titulos = obterTitulosDeJogos();
console.log(titulos);