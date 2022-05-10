# Seja muito bem vindo meu querido(a)

### Esse projeto foi feito em função de aprendizagem, veja abaixo anotações e informações sobre ele.
----
#### TECNOLOGIAS UTILIZADAS
	- Node.js


----
### ANOTAÇÔES

#### Hoje vamos aprender sobre algumas coisas simples porém muito uteis do node.js
	
	- veja abaixo 2 comandos interessantes para utilizar em app's CLI.:
	
	[ x ]  Process.stdout.write("")<br>
	- O codigo acima faz com que possamos mostrar algo no console.

	[ x ] Process.stdin.on('data', (data) => {})
	- essa função recebe como primeiro algumento oq ele vai observar no caso a entrada de dados "data", depois irá executar uma arrow function onde passamos esses dados recebidos
<br>

Veja o exemplo de codigo abaixo:
```js
		process.stdout.write("Escreva algo: \n" )
		process.stdin.on("data", (data) => {
			console.log('meu texto: ', data.toString());
			process.exit(); // faz para a execução do processo.
		});
		OUTPUT => meu texto: my text
		
	```
