class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    apresentar(){
        return `Meu carro é um ${this.modelo} da marca ${this.marca} produzido no ano  ${this.ano}.`
    }
}

const carro1 = new Carro("Toyota", "corola", 2018);
console.log(carro1.apresentar());