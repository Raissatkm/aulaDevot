class Animal {
    constructor(name){
        this.name = name;
    }
    fazerSom(){
        console.log("O animal faz um som");
    }
}
class Cachorro extends Animal {
    constructor(name, raca){
        super(name);
        this.raca = raca;
    }

}
const dog1 = new Animal("Rex");
console.log(dog1.name)
dog1.fazerSom()

const dog2 = new Cachorro("Bela", "Poodle");
console.log(dog2.name)
console.log(dog2.raca)
console.log(dog2.fazerSom())
