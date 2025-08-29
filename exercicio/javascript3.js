const dados = require("../data/games_data");
// console.log(dados.jogos);

// 3. Listar Jogos Multiplayer

function filtrarJogosMultiplayer()
{
    return dados.jogos.filter(jogo => jogo.eMultiplayer === true);
}

console.log(filtrarJogosMultiplayer());