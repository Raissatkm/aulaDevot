const numeros = [1, 2, 3, 4, ];

function maiorNumero(numeros){
    if( numeros.length ===1)
        return numeros[0];

    const primeiroNumero = numeros[0]
    let maior = numeros[0];
    for(const numero of numeros){
        if(numero > maior )
            maior = numero;
        else
            maior = maior
    }
    }

