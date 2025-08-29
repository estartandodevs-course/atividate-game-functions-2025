// IDs para Gêneros
const idRpg = "0938aa23-f153-4937-9f88-4858b24d6bce";
const idAcao = "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae";
const idAventura = "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5";
const idEstrategia = "78460a91-f4da-4dea-a469-86fd2b8ccc84";
const idPuzzle = "89be95b3-47e4-4c5b-b687-1fabf2afa274";
const idEsportes = "baa6e93a-f295-44e7-8f70-2bcdc6f6948d";
const idSimulacao = "e8481c1d-42ea-4610-8e11-1752cfc05a46";

// IDs para Estúdios
const idSquareEnix = "9e7d4524-363c-416a-8759-8aa7e50c0992";
const idNintendo = "fdb2543b-5662-46a7-badc-93d960fdc0a8";
const idRockstar = "0e7b460e-acf4-4e17-bcb3-ee472265db83";

//exportação
module.exports = {
  // Lista de Gêneros de Jogos
  generos: [
    { id: idRpg, nome: "RPG" },
    { id: idAcao, nome: "Ação" },
    { id: idAventura, nome: "Aventura" },
    { id: idEstrategia, nome: "Estratégia" },
    { id: idPuzzle, nome: "Puzzle" },
    { id: idEsportes, nome: "Esportes" },
    { id: idSimulacao, nome: "Simulação" },
  ],

  // Lista de Estúdios de Desenvolvimento
  estudios: [
    {
      id: idSquareEnix,
      nome: "Square Enix",
      pais: "Japão",
      jogosFamosos: [
        "c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1",
        "b0dc644a-5335-489b-8a2c-4e086c7819a2",
      ],
    },
    {
      id: idNintendo,
      nome: "Nintendo EPD",
      pais: "Japão",
      jogosFamosos: [
        "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
        "01422318-ca2d-46b8-b66c-3e9e188244ed",
      ],
    },
    {
      id: idRockstar,
      nome: "Rockstar Games",
      pais: "EUA",
      jogosFamosos: ["56d43ba3-a5a7-40f6-8dd7-cbb05082383f"],
    },
    {
      id: "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
      nome: "CD Projekt Red",
      pais: "Polônia",
      jogosFamosos: ["c1f50212-35a6-4ecd-8223-f835538526c2"],
    },
  ],

  // Lista de Jogos
  jogos: [
    {
      id: "c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1",
      titulo: "Final Fantasy VII Remake",
      anoLancamento: 2020,
      idsGeneros: [idRpg, idAcao],
      plataformas: ["PlayStation 4", "PlayStation 5", "PC"],
      nota: 87,
      eMultiplayer: false,
    },
    {
      id: "b0dc644a-5335-489b-8a2c-4e086c7819a2",
      titulo: "Chrono Trigger",
      anoLancamento: 1995,
      idsGeneros: [idRpg],
      plataformas: ["SNES", "PlayStation", "Nintendo DS", "PC", "Mobile"],
      nota: 92,
      eMultiplayer: false,
    },
    {
      id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
      titulo: "The Legend of Zelda: Breath of the Wild",
      anoLancamento: 2017,
      idsGeneros: [idAcao, idAventura],
      plataformas: ["Nintendo Switch", "Wii U"],
      nota: 97,
      eMultiplayer: false,
    },
    {
      id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
      titulo: "Super Mario Odyssey",
      anoLancamento: 2017,
      idsGeneros: [idAventura],
      plataformas: ["Nintendo Switch"],
      nota: 97,
      eMultiplayer: true,
    },
    {
      id: "56d43ba3-a5a7-40f6-8dd7-cbb05082383f",
      titulo: "Red Dead Redemption 2",
      anoLancamento: 2018,
      idsGeneros: [idAcao, idAventura],
      plataformas: ["PlayStation 4", "Xbox One", "PC"],
      nota: 97,
      eMultiplayer: true,
    },
    {
      id: "c1f50212-35a6-4ecd-8223-f835538526c2",
      titulo: "The Witcher 3: Wild Hunt",
      anoLancamento: 2015,
      idsGeneros: [idRpg, idAcao, idAventura],
      plataformas: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
      nota: 93,
      eMultiplayer: false,
    },
    {
      id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
      titulo: "StarCraft II",
      anoLancamento: 2010,
      idsGeneros: [idEstrategia],
      plataformas: ["PC"],
      nota: 93,
      eMultiplayer: true,
    },
    {
      id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
      titulo: "Portal 2",
      anoLancamento: 2011,
      idsGeneros: [idPuzzle],
      plataformas: ["PC", "PlayStation 3", "Xbox 360"],
      nota: 95,
      eMultiplayer: true,
    },
    {
      id: "169f3a96-1bc7-4b95-a245-208e3e46c768",
      titulo: "EA Sports FC 24",
      anoLancamento: 2023,
      idsGeneros: [idEsportes, idSimulacao],
      plataformas: [
        "PC",
        "PlayStation 5",
        "Xbox Series X/S",
        "Nintendo Switch",
      ],
      nota: 75,
      eMultiplayer: true,
    },
    {
      id: "c9f70212-45a6-4ecd-8223-f835538527d3",
      titulo: "The Sims 4",
      anoLancamento: 2014,
      idsGeneros: [idSimulacao],
      plataformas: ["PC", "PlayStation 4", "Xbox One"],
      nota: 70,
      eMultiplayer: false,
    },
  ],
};
