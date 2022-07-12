/* ---------------- MODULO OS -------------------
const os = require('os')

const dadosPc = {
    Memoria_Total: os.totalmem(),
    Memoria_Disponivel: os.freemem(),
    Infos_CPU: os.cpus(),
    Infos_Gerais: os.userInfo()
}

console.log(dadosPc);
*/

//---------------- MODULO PATH -------------------
// const path = require('path');
// console.log(path.join('/content_test', 'sub_test', 'test.txt'));

//---------------- MODULO FS -------------------
/*
const { readFileSync, writeFileSync } = require('fs');

const text_myFile = readFileSync(`${__dirname}/content_test/sub_test/test.txt`, 'utf-8');
console.log('text my file:', text_myFile);

writeFileSync(`${__dirname}/content_test/sub_test/result_read_myFile`, `Resultado do que foi lido no arquivo :${text_myFile}`);
*/


const { readFile, writeFile, appendFile } = require('fs');

readFile(`${__dirname}/content_test/sub_test/test.txt`, 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }

    const res = result;

    //sobreescreve o arquivo
    /*
    writeFile(`${__dirname}/content_test/sub_test/result_read_myFile.txt`, `Resultado do que foi lido no arquivo :${res}`, (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    })
    */

    //não sobreescreve o arquivo, apenas adiciona oq foi mandado
    appendFile(`${__dirname}/content_test/sub_test/result_read_myFile.txt`, `\nNovo Resultado do que foi lido no arquivo :${res}`, (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    })

})


/*
    Caso queira fazer um sistema de log onde vc precisa apenas colocar dados sem 
    sobreescrever pode utilizar o appendFileSync ou appendFile 
*/