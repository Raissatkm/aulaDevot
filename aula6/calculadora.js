/*Crie uma função chamada calculadora que receba três parâmetros: dois números e uma operação (+, -, *, /). A função deve retornar o resultado da operação. */


function calculadora(num1, num2, operacao){
    if(operacao === "+"){
        return num1 + num2
    }
    else if(operacao === "-"){
        return num1 - num2
    }
    else
    if(operacao === "*"){
        return num1 * num2
    }
    else if(operacao === "/"){
        if(num2 !== 0){
            return num1 / num2

        }
    }


}
console.log(calculadora(10, 5, "/"))