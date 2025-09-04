const dados = require('../data/data.js');

const formatarListaDeJogos = () => {
  const jogos = dados.jogos.map((jogo) => `${jogo.titulo} (${jogo.anoLancamento})`);
  return jogos;
};

console.log(formatarListaDeJogos());
