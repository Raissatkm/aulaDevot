/*5. Análise de Usuários
Crie uma função chamada cadastroUsuarios que receba uma lista de objetos representando usuários (com nome, idade e cidade) e retorne:
- O usuário mais velho.
- O usuário mais jovem.
- A quantidade de pessoas de uma mesma cidade.
Exemplo de Código:*/



function analiseDeUsuarios(usuarios, cidadeAlvo){
  let usuarioMaisVelho = usuarios.reduce((maisVelho, usuario) =>
  usuario.idade > maisVelho.idade ? usuario: maisVelho, usuarios[0]);

  let usuarioMaisJovem = usuarios.reduce((maisJovem, usuario) =>
  usuario.idade < maisJovem.idade ? usuario: maisJovem, usuarios[0]);

  let quantidadeDePessoas = usuarios.filter(usuario => usuario.cidade === cidadeAlvo).length;


  return{
    usuarioMaisVelho,
    usuarioMaisJovem,
    quantidadeDePessoas,
  }
}

const usuarios = [
  { nome: "Ana", idade: 25, cidade: "São Paulo" },
  { nome: "João", idade: 30, cidade: "Rio de Janeiro" },  
  { nome: "Maria", idade: 20, cidade: "São Paulo" },
];
console.log(analiseDeUsuarios(usuarios, "São Paulo"));