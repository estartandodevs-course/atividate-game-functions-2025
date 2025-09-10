const dados = require("../data/games_data.js");

const nomeDoGenero = "RPG"
const generoInfo = dados.generos.find((genero) => genero.nome === nomeDoGenero);

const gerarRelatorioDeGenero = (idGenero) => {

  const jogosDoGenero = dados.jogos.filter((jogo) => {
    return jogo.idsGeneros.includes(idGenero);
  });

  const somaDasNotas = jogosDoGenero.reduce((total, jogo) => {
    return total + jogo.nota;
  }, 0);
  const mediaDasNotas = (somaDasNotas / jogosDoGenero.length).toFixed(2);

  const jogoMelhorAvalidado = jogosDoGenero.reduce((melhor, jogo) => {
    return jogo.nota > melhor.nota ? jogo : melhor;
  }, jogosDoGenero[0]);

  const jogoMaisAntigo = jogosDoGenero.reduce((maisAntigo, jogo) => {
  return maisAntigo.anoLancamento < jogo.anoLancamento ? maisAntigo : jogo;
}, jogosDoGenero[0]);

  return {
    genero: generoInfo.nome,
    quantidadeDeJogos: jogosDoGenero.length,
    mediaDeNota: mediaDasNotas,
    jogoMaisBemAvalidado: jogoMelhorAvalidado.titulo,
    jogoMaisAntigo: jogoMaisAntigo.titulo,
  };
};

console.log(gerarRelatorioDeGenero(generoInfo.id));
