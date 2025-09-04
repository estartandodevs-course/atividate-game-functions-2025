const dados = require("../data/games_data");

function formatarListaDeJogos() {
    return dados.jogos.map((jogo) => `${jogo.titulo} (${jogo.anoLancamento})`);
}

const listaFormatada = formatarListaDeJogos();
console.log(listaFormatada);