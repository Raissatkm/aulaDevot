/*Do…while

- **Objetivo:** Use `do...while` para executar um código pelo menos uma vez.
    1. Crie um programa que solicita ao usuário digitar um número entre 1 e 10. Continue pedindo enquanto o número não estiver no intervalo. (Use `prompt` se for no navegador ou simule entradas no Node.js).*/

let contador = 1;
do {
  prompt(`digite um número entre 1 e 10 ${contador}. Pressione Ok para continuar`)
  contador++;
} while (contador <= 10);
  