const dados = require('../data/games_data.js');

  const listaDeJogos = [...dados.jogos];

const removerJogoPorTitulo = (titulo) => {
  const index = listaDeJogos.findIndex((jogo) => jogo.titulo === titulo);
  const jogoRemovido = listaDeJogos.splice(index, 1);
  return jogoRemovido;
}


console.log('Jogo removido:');
console.log(removerJogoPorTitulo("EA Sports FC 24"));
console.log('|---------------------------------------------------------|');
console.log('Lista Atualizada:');
console.log(listaDeJogos);
