var database = require("../database/config");

function buscarDadosTemporada(ano) {
    // Essa instrução faz o JOIN para trazer os dados do MJ e do Rival no mesmo objeto
    var instrucaoSql = `
        SELECT 
            t.ano,
            t.pontos_mj,
            t.assistencias_mj,
            t.rebotes_mj,
            t.aproveitamento_mj,
            r.nome AS rival_nome,
            r.pontos_rival,
            r.assistencias_rival,
            r.rebotes_rival,
            r.aproveitamento_rival
        FROM temporada AS t
        LEFT JOIN rival AS r ON r.fkTemporada = t.idTemporada
        WHERE t.ano = '${ano}';
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Caso queira listar todas as temporadas para preencher o select do HTML
function listarTemporadas() {
    var instrucaoSql = `SELECT ano FROM temporada;`;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarDadosTemporada,
    listarTemporadas
};





// function buscarUltimasMedidas(idAquario, limite_linhas) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         momento,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
//                     FROM medida
//                     WHERE fk_aquario = ${idAquario}
//                     ORDER BY id DESC LIMIT ${limite_linhas}`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// function buscarMedidasEmTempoReal(idAquario) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         FROM medida WHERE fk_aquario = ${idAquario} 
//                     ORDER BY id DESC LIMIT 1`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// module.exports = {
//     buscarUltimasMedidas,
//     buscarMedidasEmTempoReal
// }
