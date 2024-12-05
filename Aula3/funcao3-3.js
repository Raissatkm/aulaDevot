/*1. Escreva uma função chamada `calcularIMC` que receba dois parâmetros: peso (kg) e altura (m). A função deve calcular e retornar o IMC usando a fórmula:
    
    ```
    IMC = peso / (altura * altura)
    ```
    
    Exiba o resultado no console. */

function calcularIMC(){
    let peso= 75;
    let altura = 1.65;
    let IMC = peso / (altura * altura);
    console.log(IMC);

    }
calcularIMC()
