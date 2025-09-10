const dados = require("../data/games_data.js");

const ASC = "crescente";
const DESC = "decrescente";

const ordenarJogosPorAno = (ordem) => {
  const listaDeJogos = dados.jogos.slice();
  if (ordem === ASC) {
    return (listaDeJogos.sort(
      (a, b) => a.anoLancamento - b.anoLancamento
    ));
  } else if (ordem === DESC) {
    return (listaDeJogos.sort(
      (a, b) => b.anoLancamento - a.anoLancamento
    ));
  } else {
    return `Ordem não informada corretamente.`;
  }
};

console.log(ordenarJogosPorAno(DESC));
