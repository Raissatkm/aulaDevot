/*Crie uma factory function criarUsuario() que retorne um objeto com métodos para atualizar email
 e ver detalhes do usuário. Use closures para armazenar o email de forma privada.
const usuario = criarUsuario("Carlos", "carlos@email.com");usuario.atualizarEmail("novo@email.com");
console.log(usuario.verEmail()); // "novo@email.com" */

function criarUsuario(nome, email){
    let _email = "email";
    return {
        atualizarEmail(novoEmail){
            _email = novoEmail;

        },
        verEmail(){
            return _email;

    }, 
    apresentar(){
        return(`Esse é meu novo ${this.email}`);

    }}
}

const usuario = criarUsuario("Carlos", "carlos@email.com");
usuario.atualizarEmail("novo@email.com");
console.log(usuario.verEmail()); // "novo@email.com" */
