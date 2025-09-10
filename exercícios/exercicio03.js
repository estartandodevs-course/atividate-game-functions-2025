const dados = require("../data/games_data.js");

function filtrarJogosMultiplayer() {
  return dados.jogos.filter((jogo) => jogo.eMultiplayer === true);
};

console.log(filtrarJogosMultiplayer())
