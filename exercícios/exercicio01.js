const dados = require("../data/games_data.js");

const encontrarJogoPorTitulo = (tituloDoJogo) => {
  return dados.jogos.find((game) => game.titulo === tituloDoJogo);
};

const nomeDoJogo = "Chrono Trigger";
console.log(`Iniciando busca pelo jogo ${nomeDoJogo}...`);
console.log(`Resultado da busca por ${nomeDoJogo}:`);

const jogoEncontrado = encontrarJogoPorTitulo(nomeDoJogo);

if (jogoEncontrado) {
  console.log(jogoEncontrado);
} else {
  console.log(`Jogo ${nomeDoJogo} não encontrado.`);
}

console.log("Busca finalizada");
