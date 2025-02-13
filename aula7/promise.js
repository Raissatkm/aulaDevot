function buscarDados() {
    return new Promise((resolve, reject) => {
        console.log("Buscando dados...");

        setTimeout(() => {
            let sucesso = Math.random() > 0.3; // 70% de chance de sucesso

            if (sucesso) {
                resolve({
                    sucesso: true, dados: "Usuário encontrado" 
                 });
            } else {
                reject("Erro ao buscar os dados.");
            }
        }, 2000);
    });
}

// Consumindo a Promise
buscarDados()
    .then((dados) => console.log("Dados recebidos:", dados))
    .catch((erro) => console.log("Erro:", erro));

/*- `Math.random() > 0.3`: Criamos um comportamento aleatório, onde **70% das vezes a Promise é resolvida e 30% é rejeitada**.
- O `setTimeout()` simula um atraso, como se os dados viessem de uma API real.
- O `.then()` exibe os dados se a Promise for resolvida.
- O `.catch()` captura e exibe o erro, se a Promise for rejeitada. */

async function obterDados(){
    try{
        let dados = await buscarDados();
        console.log("Dados obtidos", dados);
    } catch (erro){
        console.log("Erro ao obter os dados:", erro);
    }
}

obterDados();

/*- `await` faz com que a execução aguarde a `Promise` ser resolvida antes de continuar.
- `try/catch` lida com erros, funcionando como o `.then()` e `.catch()`.

---

## Resumo

- `Promise` é útil para operações assíncronas (requisições, leitura de arquivos, banco de dados).
- `resolve` retorna o sucesso, enquanto `reject` retorna o erro.
- `then().catch()` pode ser usado para consumir a `Promise`.
- `async/await` simplifica o uso das `Promises`, tornando o código mais claro.*/