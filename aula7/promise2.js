const minhaPromise = new Promise((resolve, reject) =>{
    let sucesso = true;

    setTimeout(()=> {
        if(sucesso){
            resolve("Operação concluida com sucesso!");      
        }else{
            reject("Operação falhou!");

    }
}, 2000);
});
minhaPromise.then((resultado) => console.log("Sucesso:", resultado))
.catch((erro) => console.log("Erro:", erro));

/***Explicação:**

- O construtor `new Promise()` recebe uma **função callback** com dois argumentos:
    - `resolve(value)`: chamado quando a operação assíncrona é bem-sucedida.
    - `reject(error)`: chamado quando há erro na operação.
- Dentro da `Promise`, podemos realizar qualquer operação assíncrona (exemplo: leitura de arquivos, requisições HTTP, operações em banco de dados).
- O `.then()` é executado se a `Promise` for resolvida (`resolve` chamado).
- O `.catch()` é executado se a `Promise` for rejeitada (`reject` chamado). */