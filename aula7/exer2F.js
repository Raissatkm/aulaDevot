/*Crie uma factory function chamada criarUsuario que recebe um nome e um email
 e retorna um objeto com esses dados e um método apresentar(). */
 function criarUsuario(nome, email){
    return {
        nome,
        email,
    apresentar() {
        return `olá meu nome é ${this.nome} e o meu email é ${this.email}`

    }
 }
 }
 const usuario1 = criarUsuario("Alice", "alice@email.com");
 console.log(usuario1.apresentar());