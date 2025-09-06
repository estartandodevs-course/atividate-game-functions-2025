const dados = require("../data/games_data");

function filtrarJogosMultiplayer() {
  return dados.jogos.filter((jogo) => jogo.eMultiplayer === true);
}

const jogosMultiplayer = filtrarJogosMultiplayer();

if (jogosMultiplayer.length === 0) {
  console.log("Nenhum jogo multiplayer encontrado");
} else {
  console.log(jogosMultiplayer);
}