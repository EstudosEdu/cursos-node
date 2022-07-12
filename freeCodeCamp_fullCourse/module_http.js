const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.end('Bem Vindo a Home!');
    }
    else if(req.url == '/sobre'){
        res.end('Bem vindo a pagina Sobre!');
    }
    else{
        res.end('Not Found!');
    }
})

server.listen(3333, () => console.log('servidor on in: localhost:3333'));