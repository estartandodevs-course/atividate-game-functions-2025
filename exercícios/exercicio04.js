const dados = require('../data/data.js');

const jogoDisponivelParaPC = (titulo) => {
  const jogo = dados.jogos.find((jogo) => jogo.titulo === titulo)
  if (jogo.plataformas.includes("PC")) {
    return true;
  } else {
    return false;
  }
};

console.log(jogoDisponivelParaPC("Super Mario Odyssey"));