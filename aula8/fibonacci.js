function fibonacci(pos){
    if(pos ===1) return 0;
    if(pos === 2) return 1;

    return fibonacci (pos -1) + fibonacci(pos -2)

}
console.log(fibonacci(1))