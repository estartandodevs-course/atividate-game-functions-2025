const dados = require("../data/games_data");

function encontrarJogoPorTitulo(titulo) {
  if (encontrarJogoPorTitulo === null) {
    return undefined;
  }
  return dados.jogos.find((dados) => dados.titulo === titulo);
}

function filtrarJogosPorGenero(idGenero) {
  return dados.jogos.filter((jogos) => jogos.idsGeneros.includes(idGenero));
}

function filtrarJogosMultiplayer() {
  return dados.jogos
    .filter((jogo) => jogo.eMultiplayer === true)
    .map((jogo) => jogo.titulo);
}

function jogoDisponivelParaPC(titulo) {
  const jogo = dados.jogos.find((jogo) => jogo.titulo === titulo);
  return jogo ? jogo.plataformas.includes("PC") : false;
}

function obterTitulosDeJogos() {
  return dados.jogos.map((jogos) => jogos.titulo);
}

function formatarListaDeJogos() {
  return dados.jogos.map((jogo) => ` ${jogo.titulo},  (${jogo.anoLancamento})`);
}

function listarJogosComNota() {
  return dados.jogos.map((jogo) => ` ${jogo.titulo},  nota: (${jogo.nota})`);
}

function calcularMediaMetacritic() {
  const total = dados.jogos.reduce((soma, jogo) => soma + jogo.nota, 0);
  const media = total / dados.jogos.length;
  return media;
}

function contarJogosPorEstudio() {
  return dados.estudios.reduce((contador, estudio) => {
    contador[estudio.nome] = estudio.jogosFamosos.length;
    return contador;
  }, {});
}

function ordenarJogosPorAno(ordem) {
  return dados.jogos.slice().sort((a, b) => {
    if (ordem === "ASC") {
      return a.anoLancamento - b.anoLancamento;
    } else if (ordem === "DESC") {
      return b.anoLancamento - a.anoLancamento;
    } else {
      throw new error("Por favor digite 'ASC' ou 'DESC'! ");
    }
  });
}
/*
console.log(
  ordenarJogosPorAno("ASC").map((mod) => `${mod.titulo} (${mod.anoLancamento})`)
);
*/

function ordenarJogosPorNota() {
  return dados.jogos.slice().sort((a, b) => {
    return b.nota - a.nota;
  });
}
/*
console.log(ordenarJogosPorNota().map((mod) => `${mod.titulo} (${mod.nota})`));
*/

function exibirPlataformas() {
  return dados.jogos.forEach((jogo) => {
    console.log(
      `O jogo ${jogo.titulo} está disponível para: ${jogo.plataformas}`
    );
  });
}

console.log(exibirPlataformas());
