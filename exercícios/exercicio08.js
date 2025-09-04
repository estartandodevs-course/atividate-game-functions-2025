const dados = require("../data/data.js");

const calcularMediaMetacritic = () => {
  const soma = dados.jogos.reduce((total, jogo) => {
    return total + jogo.nota;
  }, 0);
  return (soma / dados.jogos.length).toFixed(2);
};

console.log(calcularMediaMetacritic());
