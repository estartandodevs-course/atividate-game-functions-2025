const dados = require('../data/games_data.js');

let listaDeJogos = [...dados.jogos];

const adicionarNovoJogo = (jogo) => {
  listaDeJogos.unshift(jogo);
  return listaDeJogos;
}

const idAcao = dados.generos.find((genero) => genero.nome === "Ação").id;
const idAventura = dados.generos.find((genero) => genero.nome === "Aventura").id;

console.log(adicionarNovoJogo(
  {
    id: "cr131-um-1d-qu3-n1ngu3m-v41-3n73nd3r",
    titulo: "Pique Pega",
    anoLancamento: "Na epoca da minha avó já existia",
    idGeneros: [idAcao, idAventura],
    plataformas: ["Ruas", "Praças"],
    nota: 100,
    eMultiplayer: true,
  },
  ));