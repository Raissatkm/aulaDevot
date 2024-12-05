/*Escreva uma função chamada somaArray que receba um array de números como parâmetro e retorne a soma de todos os elementos. */

function somaArray(...numeros){
    console.log(numeros)
    let soma =0 
    for (let num of numeros){
        soma =+ num
    }
    return soma    

}
console.log(somaArray([1,2,3,4]));