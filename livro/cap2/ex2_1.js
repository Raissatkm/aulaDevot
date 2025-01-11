function mostrarOla(){
    var nome = document.getElementById("nome").value;
    document.getElementById("Resposta").innerHTML = "Olá " + nome;
}
var mostrar = document.getElementById("mostrar");
mostrar.onclick = mostrarOla;