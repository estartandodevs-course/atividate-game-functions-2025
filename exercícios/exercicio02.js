const dados = require("../data/games_data.js");

const nomeDoGenero = "RPG";
const genero = dados.generos.find((genero) => genero.nome === nomeDoGenero);

if (!genero) {
  console.log(`Gênero ${nomeDoGenero} não encontrado`);
} else {
  const filtrarJogosPorGenero = (idDoGenero) => {
    return dados.jogos.filter((jogo) => jogo.idsGeneros.includes(idDoGenero));
  };
  console.log(`Lista de resultados a busca por ${nomeDoGenero}`);
  console.log(filtrarJogosPorGenero(genero.id));
}
