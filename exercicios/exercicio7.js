const dados = require("../data/games_data");

function listarJogosComNota() {
    return dados.jogos.map((jogo) => ({ titulo: jogo.titulo, nota: jogo.nota }));
}

const jogosComNota = listarJogosComNota();
console.log(jogosComNota);