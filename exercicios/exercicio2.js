const dados = require("../data/games_data");

function filtrarJogosPorGenero(idGenero) {
  return dados.jogos.filter((jogo) => jogo.idsGeneros.includes(idGenero));
}

const genero = "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae"; // Aventura

const jogos = filtrarJogosPorGenero(genero);
if (jogos.length === 0) {
  console.log("Nenhum jogo encontrado para esse gênero");
} else {
  console.log(jogos);
}