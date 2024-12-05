function criarSaudacao(){
    return () => `${saudacao},${nome}`
}

let ola = criarSaudacao =("Olá")
let hi = criarSaudacao= ("")

console.log(criarSaudacao("RAISSA"));