function verificarIdade() {
 
    const idade = Number(document.getElementById("idade").value);
 
    if (idade >= 18) {
        document.getElementById("ResultadoIdade").textContent = "Maior de Idade";
    } else {
        document.getElementById("ResultadoIdade").textContent = "Menor de Idade";
    }
 
}
 
 
function verificarNumero() {
 
    const numero = Number(document.getElementById("numero").value);
 
    if (numero > 0) {
        document.getElementById("ResultadoNumero").textContent = "O número é positivo.";
    } else if (numero < 0) {
        document.getElementById("ResultadoNumero").textContent = "O número é negativo.";
    } else {
        document.getElementById("ResultadoNumero").textContent = "O número é igual a zero.";
    }
 
}
 
 
function verificarNota() {
 
    const nota = Number(document.getElementById("nota").value);
 
    if (nota >= 7) {
        document.getElementById("ResultadoNota").textContent = "Aprovado";
    } else if (nota >= 5) {
        document.getElementById("ResultadoNota").textContent = "Recuperação";
    } else {
        document.getElementById("ResultadoNota").textContent = "Reprovado";
    }
 
}

function verificarPrioridade(){
    const prioridade = document.getElementById("prioridade").value;
    const resultado = document.getElementById("resultado");


switch(prioridade){
    case "urgente":
        resultado.textContent = "Atenção Redobrada!";
        break;
    case "alta":
        resultado.textContent = "Prioridade Alta.";
        break;
    case "media":
        resultado.textContent = "Prioridade média.";
        break;
    case "baixa":
        resultado.textContent = "Prioridade baixa.";
 
        break;
    default:
        resultado.textContent = "Prioridade desconhecida";
 }
};
 