const dados = require("../data/games_data");
// console.log(dados.jogos);

// 14. Adicionar um Novo Jogo no Início da Lista



function adicionarNovoJogo(jogo)
{
    return dados.jogos.unshift(jogo);
}

const novoJogo = {
    id: "a1b2c3d4-e5f6-7890-abcd-1234567890ef",
    titulo: "Hollow Knight",
    anoLancamento: 2017,
    plataformas: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    nota: 95, 
    eMultiplayer: false, 
    idsGeneros: ["2d-platformer", "metroidvania"]
};

adicionarNovoJogo(novoJogo);
console.log(dados.jogos);