const dados = require("../data/games_data");

function adicionarNovoJogo(jogo) {
    const novoTamanho = dados.jogos.unshift(jogo);
    return novoTamanho;
}

const idAcao = dados.generos.find((genero) => genero.nome === "Ação").id;
const idRpg = dados.generos.find((genero) => genero.nome === "RPG").id;

const novoJogo = {
      id: "c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1",
      titulo: "Final Fantasy VII Remake",
      anoLancamento: 2020,
      idsGeneros: [idRpg, idAcao],
      plataformas: ["PlayStation 4", "PlayStation 5", "PC"],
      nota: 87,
      eMultiplayer: false,
    };

const tamanhoArray = adicionarNovoJogo(novoJogo);
console.log(`Novo tamanho do array de jogos: ${tamanhoArray}`);
console.log(dados.jogos[0]); 