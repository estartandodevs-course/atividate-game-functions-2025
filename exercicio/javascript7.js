const dados = require("../data/games_data");
// console.log(dados.jogos);

// Listar Jogos com Nota e Título
function listarJogosComNota()
{
    return dados.jogos.map(jogo => ({titulo: jogo.titulo, nota: jogo.nota}));
}
console.log(listarJogosComNota());