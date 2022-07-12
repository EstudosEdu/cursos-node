//--------------------treino-----------------
const { appendFileSync } = require('fs');
const os = require('os')

function levantaDados(){
    const currentDatasPc = {
        Memoria_Total: os.totalmem(),
        Memoria_Disponivel: os.freemem(),
    }

    let differenceDatas = (currentDatasPc.Memoria_Total - currentDatasPc.Memoria_Disponivel);
    
    return{
        ...currentDatasPc,
        differenceDatas: differenceDatas
    }
}

function trataDados(dados){
    const {Memoria_Total, Memoria_Disponivel, differenceDatas} = dados;
    const dadosTratados = {
        Memoria_Total: convertToGB(Memoria_Total),
        Memoria_Disponivel: convertToGB(Memoria_Disponivel),
        differenceDatas: convertToGB(differenceDatas)
    }
    return dadosTratados;
}

function convertToGB(byte){
    return ((byte / (1024 * 1024)).toFixed(2));
}

function gravaLog(dados){
    try{
        appendFileSync(`${__dirname}/logs_teste/log.txt`, `\n${JSON.stringify({time: new Date(), data: dados})}`, 'utf-8');
        return true;
    }catch(e){
        return e;
    }
}

setInterval(() => {
    const pegaDados = levantaDados();
    const trataAllDados = trataDados(pegaDados);
    console.log(gravaLog(trataAllDados));
}, 1000 * 1); // 1000 * 1 = 1s