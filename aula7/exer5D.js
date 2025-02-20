/*Crie uma classe Animal com um método fazerSom().
 Em seguida, crie uma classe Cachorro que herda de Animal e sobrescreve fazerSom() para retornar "Au Au!". */

 class Animal{
    fazerSom(){
        return "O animal faz som"

    }

 }

 class Cachorro extends Animal{
    fazerSom(){
        return "Au Au!"
    }
 }

 const animal = new Animal()
 console.log(animal.fazerSom())
 const dog = new Cachorro("Rex");
 console.log(dog.fazerSom());