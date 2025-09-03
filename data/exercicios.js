const dados = require("../data/games_data");

function encontrarJogoPorTitulo(titulo) {
  if (encontrarJogoPorTitulo === null) {
    return undefined;
  }
  return dados.jogos.find((dados) => dados.titulo === titulo);
}

console.log(encontrarJogoPorTitulo("Chrono Trigger"));

function filtrarJogosPorGenero(idGenero) {
  return dados.jogos.filter((jogos) => jogos.idsGeneros.includes(idGenero));
}

console.log(filtrarJogosPorGenero("0938aa23-f153-4937-9f88-4858b24d6bce"));

function filtrarJogosMultiplayer() {
  return dados.jogos
    .filter((jogo) => jogo.eMultiplayer === true)
    .map((jogo) => jogo.titulo);
}

console.log(filtrarJogosMultiplayer());

function jogoDisponivelParaPC(titulo) {
  const jogo = dados.jogos.find((jogo) => jogo.titulo === titulo);
  return jogo ? jogo.plataformas.includes("PC") : false;
}

console.log(jogoDisponivelParaPC("Portal 2"));
