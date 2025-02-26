function contagemRegressiva(numero){
    console.log(numero)
    if (numero === 0) return numero;
     contagemRegressiva(numero - 1)
    }

    contagemRegressiva(5)