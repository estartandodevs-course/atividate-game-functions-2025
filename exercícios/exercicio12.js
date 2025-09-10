const dados = require('../data/games_data.js');

const exibirPlataformas = () => {
  dados.jogos.forEach((jogo) => {
    console.log(`O jogo ${jogo.titulo} está disponivel para: ${jogo.plataformas.join(',')}.`);
  });
};

exibirPlataformas();
