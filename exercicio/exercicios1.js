const dados = require("../data/games_data");
// console.log(dados.jogos);

// 1. Encontrar Jogo por Título


function encontrarJogoPorTitulo(titulo)
{
    return dados.jogos.find(jogos =>  jogos.titulo === titulo);
}
const jogo = encontrarJogoPorTitulo("The Legend of Zelda: Breath of the Wild");
if(jogo === undefined)
{
    console.log("Jogo não encontrado");
}
else
{
    console.log(jogo);
}
