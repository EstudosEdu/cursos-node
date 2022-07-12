import axios from "axios";
import { Transform, Writable } from 'stream';


const url = 'http://localhost:3000';

async function consume(){
    const response = await axios({
        url,
        method: 'get',
        responseType: 'stream' /* diz ao axios que ele não precisa esperar todos os dados 
        chegarem para começar a passar para frente */
    })

    return response.data;
}

const stream = await consume();
stream
    /*
        Lembra doque disse lá no server.js? Bom agora vc poderá ver como é na pratica: 
    */
    .pipe(
        /*
            SOBRE TRANSFORM:
            O que é Transform?
                Bom a ideia do mesmo é como o proprio nome diz, ele transforma... porém 
                podemos ir muito mais além podendo fazer verificações, alterações, adicionar algo 
                e etc...

            Parametros do mesmo:
                O transform recebe três parametros, sendo eles: chunck, enc, cb
                    
                    Chunk -> é basicamente um dado ou seja um pedaço do dado inicial basicamente é o 
                    dado que está passando pelo pipe.

                    Enc -> é o tipo do dado.

                    Cb -> é o callback, basicamente utilizamos ele quando terminamos e vamos passar 
                    o dado para o proximo processo. 
        */
        new Transform({
            transform(chunk, enc, cb){
                const item = JSON.parse(chunk);
                const myNumber = /\d+/.exec(item.name)[0];
                let name = item.name;
                if(myNumber % 2 === 0) name = name.concat(' é par');
                else name = name.concat(' é impar');
                item.name = name;

                /*o primeiro parametro é null pois serve basicamente para informar algum erro,
                 já o segundo informa o sucesso (no caso o nosso item)*/
                cb(null, JSON.stringify(item));
            }
        })
    )
    .pipe(
        /*
            Assim como podemos utilizar o Transform dentro do pipe, podemos utilizar o Writable...
            SOBRE Writable
                Bom o writable basicamente é o final de todo o processo pelo qual o dado passa, 
                sendo ele a saida... facilmente podemos representa lo como a response da API, 
                pois a response representa o fim do processo e a resposta para o usuario. 
                O mesmo se aplica a writable.
        */
        new Writable({
            write(chunk, enc, cb){
                console.log('recebendo =>', chunk.toString());
                cb();
            }
        })
    )
