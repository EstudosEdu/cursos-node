const fs = require('fs');
const Zlib = require('zlib');

fs.createReadStream('./teste/sla.txt')
    .pipe(Zlib.createGzip())
    .on('error', console.error)
    .pipe(fs.createWriteStream('./teste/newFile.zip'))
    .on('error', console.error)