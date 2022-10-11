const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');
const { promisify } = require('util');

const promisedPipeline = promisify(pipeline);

async function run () {
    await promisedPipeline(
        fs.createReadStream('./teste/sla.txt'),
        zlib.createGzip(),
        fs.createWriteStream('./teste/sla.zip')
    );
    console.log('Terminou!');
}

run().catch(console.error); // caso de qualquer erro dentro da função run() será mostrado no console.