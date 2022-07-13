import http from 'http';
import { pipeline, Readable, Transform, Writable } from 'stream';
import { promisify } from 'util';
import { randomUUID } from 'crypto';
import { createWriteStream } from 'fs'

async function handler(req, res){
    const pipelineAsync = promisify(pipeline);

    const readableStream = new Readable({
        read(){
            for(let i = 0; i < 1e4; i++){ //1e4 = 10000
                const newPerson = {
                    id: randomUUID(),
                    name: `EduJr_${i}`
                }
                const data = JSON.stringify(newPerson);
                this.push(data);
            } 
            this.push(null);
        }
    });

    const writableStream = new Writable({
        write(chunk, enc, cb){
            console.log('msg ', chunk.toString());
            cb();
        }
    });

    const transformStream = new Transform({
        transform(chunk, enc, cb){
            const data = JSON.parse(chunk);
            const result = `New person , ${data.id}, ${data.name.toUpperCase()}\n`;
            cb(null, result);
        }
    });

    await pipelineAsync(
        readableStream,
        transformStream,
        //salvando dados sobre demanda em um arquivo .txt
        createWriteStream('./log.txt'),
        //resposta para o usuario que fazer resquest na API
        // res
    )

}

http.createServer(handler)
    .listen(3030)
    .on('listening', () => console.log('server running at 3000'));