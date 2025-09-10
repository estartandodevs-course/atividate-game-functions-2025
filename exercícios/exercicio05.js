const dados = require('../data/data.js');

const obterTitulosDeJogos = () => {
  const titulo = dados.jogos.map((jogo) => jogo.titulo);
  return titulo;
};

console.log(obterTitulosDeJogos());