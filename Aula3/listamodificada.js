function processarArray(){
    const listaModificada = [2, 3, 6]
    for (let elemento  of lista ){
        listaModificada.push(fun(elemento))
    }
    return listaModificada;
}

function dobrar(num){
    return num * 2
}
console.log(processarArray([1, 2, 3], dobrar))