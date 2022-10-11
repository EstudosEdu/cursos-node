## Anotações
### Data do estudo: 12/07/2022

## Detalhes Importantes
- Estamos utilizando as seguintes versões das seguintes tecnologias:
    - Node.js -> 18.5.0

### sobre package.json
- Para experimentarmos o melhor do ```node.js``` e do ```js```, antes de tudo vamos utilizar o **ESMODULES** (import e export), e para isso iremos em package.json e abaixo de main, vamos colocar a seguinte linha ```"type": "module"```

## IMPORTANTE
O .pipe das node.js streams é uma forma antiga de se escrever dado que para capturar um erro é quase inviavel e muito verboso

<details open>
    <summary>Exemplo de codigo com .pipe</summary>
    <a href="https://github.com/EstudosEdu/cursos-node/blob/master/streams_node/exemplos_streams/exemplo_02/src/index.js">Nesse repositorio</a>
</details>

---
### **Utilizando pipeline e promisify**
A forma mais indicada para utilizar é o ``pipeline``, e para utilizarmos o mesmo de forma assincrona podemos utilizar o ``promisify`` (transforma oque quisermos em promissy)



<details>
    <summary>Sobre o pipeline</summary>

- Diferente do pipe, o pipeline é mais fácil de tratar errors e mais dificil de causar os famosos "memory links".

- Utiliza-lo de maneira assincrona trás grandez beneficios, principalmente dentro de ambientes como apis e etc...

- **Um exemplo prático utilizando promisify com pipeline pode ser encontrado <a href="https://github.com/EstudosEdu/cursos-node/blob/master/streams_node/exemplos_streams/exemplo_01/src/server.js">nesse repositorio</a>**
</details>