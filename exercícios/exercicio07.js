const dados = require('../data/data.js');

const listarJogosComNota = () => {
  const listaDeJogos = dados.jogos.map((jogo) =>
  ({titulo: jogo.titulo, nota: jogo.nota}));
  return listaDeJogos;
};

console.log(listarJogosComNota());