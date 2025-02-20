class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`
    }
}

const pessoa1 = new Pessoa("João", 30);
console.log(pessoa1.apresentar());