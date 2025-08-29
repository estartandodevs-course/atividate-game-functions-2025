const dados = require("../data/games_data");
// console.log(dados.jogos);

// 13. Encontrar o Índice e Remover um Jogo

function removerJogoPorTitulo(titulo)
{
    const indice = dados.jogos.findIndex(jogo => jogo.titulo === titulo);
    if(indice === -1)
    {
        console.log("Jogo não encontrado.");
    }
    else
    {
        dados.jogos.splice(indice, 1);
        return dados.jogos;
    }
}
console.log(removerJogoPorTitulo("The Sims 4"));
