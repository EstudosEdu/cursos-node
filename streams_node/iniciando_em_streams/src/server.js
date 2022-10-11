import http from 'http';
import { Readable, Writable } from 'stream';
import  { randomUUID } from 'crypto';

//função geradora, para saber mais sobre a mesma estude sobre GENERETORS em Node.js
const sla = [];

function * run (){
    for(let i = 0; i <= 99; i++){
        const data = {
            id: randomUUID(),
            name: `EduJr${i}`
        }
        yield data;
    }
}

async function handler(req, res){
    // readable é a nossa fonte de dados (a grosso modo), a mesma precisa da função read dentro que é informada que acabaram os dados quando damos um this.push(null);
    const readable =  new Readable({
        read(){
            //recebe os dados da função geradora e manda para o nosso readable
            for(const data of run()){
                console.log('enviando =>', data);
                this.push(JSON.stringify(data) + '\n');
            }
            //para informar que os dados acabaram:
            // this.push(null);
            this.push(null);
        }
    });

    /*
        Essa parte pode ser confusa ou até que facil, depende do nivel de entendimento...
        
        Oque é um pipe?
            Basicamente pipe vem da ideia de pipeline que é basicamente nosso cano, ou 
            seja nele vai ser passado todos os dados da Readable.
        
        Mais adiante, pra ser mais expecifico na parte de client, vamos ver o uso do 
        Transform dentro do pipe. Acho que vc já deve ter entendido mas se não entendeu, 
        pelo nosso pipe vai ser passado dados e nosso Transform irá tratalos, modificalos,...
    */
    readable
        .pipe(res);
}

http.createServer(handler)
    .listen(3000)
    .on('listening', () => console.log('server running at 3000'));