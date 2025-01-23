function calcularPreco(){
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");

    var quilo = Number(inQuilo.value);
    var consumo = Number(inConsumo.value);
    var valor = (quilo / 10000) * consumo;
    outValor.textContent= "Valor a pagar R$: " + valor.toFixed(2);

}
// cria referência ao elemento btCalcular
var btCalcular = document.getElementById("btCalcular");
// registra um evento associado ao botão, para carregar uma função
btCalcular.addEventListener("click", calcularPreco);