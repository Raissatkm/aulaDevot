function buscarDados(){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let sucesso = Math.random() > 0.3; // 70% de chance de sucesso

            if (sucesso) {
                resolve({
                    sucesso: true, dados: "Usuário encontrado" 
                 });
            } else {
                reject({sucesso: false, erro: "Falha na requisição" });
            }
        }, 2000);
    });
}

buscarDados()
.then(resposta => console.log(resposta))
.catch(erro => console.log(erro));