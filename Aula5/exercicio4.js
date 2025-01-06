/*- **Objetivo:** Pratique a utilização de breakpoints.
1. No código abaixo, adicione breakpoints nas linhas apropriadas para verificar:
- O valor de `i` durante cada iteração.
- O valor acumulado na variável `soma`.*/

let soma = 0;
for (let i = 1; i <= 10; i++) {
  soma += i;
}
console.log("Soma final:", soma);