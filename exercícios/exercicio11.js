const dados = require('../data/games_data.js');

const ordenarJogosPorNota = () => {
  const listaDeJogos = dados.jogos.slice();
  return listaDeJogos.sort((a, b) => a.nota - b.nota);
};

console.log(ordenarJogosPorNota());