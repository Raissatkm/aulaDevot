/*
Crie uma classe ContaBancaria com os atributos saldo e titular. 
Adicione métodos para depositar, sacar e ver saldo. O saldo nunca pode ficar negativo.
const minhaConta = new ContaBancaria("João", 500);minhaConta.sacar(600); 
// Deve impedir o saqueconsole.log(minhaConta.verSaldo()); // 500*/

class ContaBancaria {
    _titular; // Campo protegido    
#saldo; // Campo privado

constructor(nome, saldoInicial) {
    this._titular = titular;        
    this.#saldo = saldoInicial;    
}

setNome(nome) {
    this._titular = titular;
}

getNome() {
    return this._titular;
}

getSaldo() {
    return this.#saldo;    
}

getSaldo() {
    return this.#saldo;    
}

depositar(valor) {
    this.#saldo += valor;    
}

sacar(valor) {
    if (valor > this.#saldo) {
        console.log("Saldo insuficiente!");            
        return;        
    }
    this.#saldo -= valor;    
}

}
const conta = new ContaBancaria("Maria", 1000);
conta.depositar(500);
conta.sacar(300);
console.log(conta.getSaldo()); // 1200