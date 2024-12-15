// Função não está recebendo parametro
function criarSaudacao(){
    return () => `${saudacao},${nome}` // ERRO vc está tentando usar 
    // variavel sem ter declarado (saudacao e nome)
}

let ola = criarSaudacao =("Olá")
let hi = criarSaudacao= ("")

// Quando vc chama a função criarSaudacao vc está passando um parametro
console.log(criarSaudacao("RAISSA"));