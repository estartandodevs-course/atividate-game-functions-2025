const dados = require("../data/games_data");
// console.log(dados.jogos);


// 12. Exibir Plataformas de Cada Jogo
function exibirPlataformas()
{
    return dados.jogos.forEach(jogo =>
    {
        console.log(`O jogo ${jogo.titulo} está disponivel para: ${jogo.plataformas}`)
        console.log() 
    })
}
exibirPlataformas();