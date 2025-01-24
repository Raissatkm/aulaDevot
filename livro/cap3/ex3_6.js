function calcularNotas(){
    var inSaque = document.getElementById("inSaque");
    var outNotasCem = document.getElementById("outNotasCem");
    var outNotasCinquenta = document.getElementById("outNotasCinquenta");
    var outNotasDez = document.getElementById("outNotasDez");


    outNotasCem.textContent = "";
    outNotasCinquenta.textContent ="";
    outNotasDez.textContent = "";

    var saque = Number(inSaque.value);

    if(saque === 0 || isNaN(saque)){
        alert("Informe o valor de saque corretamente");
        inSaque.focus();
        return;
    }
    if(saque % 10 != 0){
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100) ");
        inSaque.focus();
        return;
    }
    var notasCem = Math.floor(saque /  100);
    var restos = saque % 100;
    var notasCinquenta = Math.floor(saque / 50);
    restos = saque % 50;
    var notasDez = Math.floor(saque / 10);
    restos = saque % 10;

    if(notasCem){
        outNotasCem.textContent = "Notas de R$ 100: " + notasCem;
    }
    if(notasCinquenta){
        outNotasCinquenta.textContent = "Notas de R$ 50: " + notasCinquenta;
    }
    if(notasDez){
        outNotasDez.textContent = "Notas de R$ 10: " + notasDez
    }

}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularNotas);