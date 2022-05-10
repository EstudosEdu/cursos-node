process.stdout.write("Escreva algo: \n" )
process.stdin.on("data", (data) => {
    console.log('meu texto: ', data.toString());
    process.exit(); // faz para a execução do processo.
});