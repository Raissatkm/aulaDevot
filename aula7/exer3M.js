/*Crie uma classe Pessoa com propriedades nome e idade.
 Utilize um getter para obter a idade e um setter para impedir que a idade seja definida como um valor negativo. */


class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    getIdade(){
        return this.idade;
    }
    setIdade(idade){
        if(idade < 0){
            console.log("Idade não poder ser definida com um valor negativo.");
        }else{
            this.idade = idade;
        }
    }
}

const pessoa1 = new Pessoa("Lucas", 30);
pessoa1.setIdade(-5);
console.log(pessoa1.getIdade());
