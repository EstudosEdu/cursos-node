//Iremos ver sobre eventos em node.js
const events = require('events');
const util = require('util');

const myEmitter = new events.EventEmitter(); // vai ser onde meus eventos seram ouvidos e emitidos.

myEmitter.on('on', (user) => { // ouvirá um determinado evento, caso ele sejá emitido será executado algo.
    console.log(`User ${user} is Online!`);
});

myEmitter.once('on', (user) => { // diferente do .on o .once ouvira apenas uma vez, sendo assim todo evento emitido mais que uma unica vez o once irá executar apenas na primeira
    console.log(`User ${user} is Online!`);
})

myEmitter.emit('on', 'EduJr');// emite um novo evento