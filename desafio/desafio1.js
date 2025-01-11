//Crie um programa que encontra o maior número em um array usando um loop.

let maior = 0
let MeuArray= [0, 1, 2, 3, 4, 5, 6, 7];
for(let i = 0; i < MeuArray.length; i++){
    if(MeuArray[i] > maior){
        maior = MeuArray[i];
    }
}

console.log(maior);