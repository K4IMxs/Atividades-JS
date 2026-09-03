//==================================================================
//                          Atividade 1
//==================================================================

function verificarIdade() {
    const idadeInput = document.getElementById("idade");
    const resultado = document.getElementById("ResultadoIdade");

    const idade = Number(idadeInput.value);

    if (idadeInput.value === "") {
        resultado.textContent = "Digite uma idade.";
    } else if (idade >= 18) {
        resultado.textContent = "Maior de Idade";
    } else {
        resultado.textContent = "Menor de Idade";
    }
}

//==================================================================
//                          Atividade 2
//==================================================================

function verificarNumero() {
    const numeroInput = document.getElementById("numero");
    const resultado = document.getElementById("ResultadoNumero");

    const numero = Number(numeroInput.value);

    if (numeroInput.value === "") {
        resultado.textContent = "Digite um número.";
    } else if (numero > 0) {
        resultado.textContent = "O número é positivo.";
    } else if (numero < 0) {
        resultado.textContent = "O número é negativo.";
    } else {
        resultado.textContent = "O número é igual a zero.";
    }
}

//==================================================================
//                          Atividade 3
//==================================================================

function verificarNota() {
    const notaInput = document.getElementById("nota");
    const resultado = document.getElementById("ResultadoNota");

    const nota = Number(notaInput.value);

    if (notaInput.value === "") {
        resultado.textContent = "Digite uma nota.";
    } else if (nota >= 7) {
        resultado.textContent = "Aprovado";
    } else if (nota >= 5) {
        resultado.textContent = "Recuperação";
    } else {
        resultado.textContent = "Reprovado";
    }
}

//==================================================================
//                          Atividade 4
//==================================================================

function verificarPrioridade() {
    const prioridade = document.getElementById("prioridade").value;
    const resultado = document.getElementById("resultadoPrioridade");

    switch (prioridade.toLowerCase()) {
        case "urgente":
            resultado.textContent = "Atenção Redobrada!";
            break;

        case "alta":
            resultado.textContent = "Prioridade Alta.";
            break;

        case "média":
            resultado.textContent = "Prioridade média.";
            break;

        case "baixa":
            resultado.textContent = "Prioridade baixa.";
            break;

        default:
            resultado.textContent = "Prioridade desconhecida.";
    }
}

//==================================================================
//                          Atividade 5
//==================================================================

function verificarTarefa() {
    const prioridade = document.getElementById("prioridadeSelection").value;
    const resultadoTarefa = document.getElementById("resultadoTarefa");
    const atrasada = document.getElementById("atrasada").checked;

    if (prioridade === "selecionar") {
        resultadoTarefa.textContent = "A prioridade é desconhecida.";
    } else if (
        prioridade === "urgente" ||
        (prioridade === "alta" && atrasada)
    ) {
        resultadoTarefa.textContent = "Precisa de atenção agora!";
    } else {
        resultadoTarefa.textContent = "Pode aguardar.";
    }
}

//==================================================================
//                          Atividade 6
//==================================================================

function verificarUsuario() {
    const usuario = document.getElementById("usuarioInput").value;
    const senha = document.getElementById("senhaInput").value;

    if (usuario === "admin" && senha === "1234") {
        resultadoUsuario.textContent = "Login realizado com sucesso";
    } else if (usuario === "admin" && senha !== "1234") {
        resultadoUsuario.textContent = "Senha incorreta.";
    } else { (usuario !== "admin" && senha === "1234")
        resultadoUsuario.textContent = "Usuario não encontrado";
    }
}

//==================================================================
//                          Atividade 7
//==================================================================

function verificarTernario() {
    const idade = Number(document.getElementById("ternarioIdade").value)
    const situacao = idade >= 18 ? "Maior de idade" : "Menor de idade";

    document.getElementById("resultadoTernario").textContent = situacao;
}

//==================================================================
//                          Atividade 8
//==================================================================

function verificarDesconto() {
    // variáveis gerais
    const valorCompra = Number(document.getElementById("valorCompra").value);
    const clientVip = document.getElementById("clientVip").checked;

    // variável para o desconto
    let desconto = 0;

    // verifica o desconto da compra
    if (valorCompra > 500) {
        desconto = 0.20;
    } else if (valorCompra >= 200 && valorCompra <= 500) {
        desconto = 0.10;
    } else {
        desconto = 0;
    }

    // adiciona 5% caso seja VIP
    if (clientVip) {
        desconto += 0.05;
    }

    // calcula os valores
    const valorDesconto = valorCompra * desconto;
    const valorFinal = valorCompra - valorDesconto;

    // mostra o resultado
    document.getElementById("resultadoDesconto").textContent =
        `Valor da compra: R$ ${valorCompra.toFixed(2)}
        Desconto: R$ ${valorDesconto.toFixed(2)}
        Valor final: R$ ${valorFinal.toFixed(2)}`;
}

//==================================================================
//                          Atividade 9
//==================================================================

function verificarTarefa() {

    const validação = document.getElementById("validaçãoTarefa");
    const tarefa = {
            titulo: "Estudar JavaScript",
            concluida: false
        };

    if (validação.checked) {
        marcarComoConcluida(tarefa);
    } else {
        document.getElementById("resultadoValidaçãoTarefa").textContent =
            "A tarefa ainda não foi concluída.";
    }

    function marcarComoConcluida(tarefa) {

        if (!tarefa) {
        document.getElementById("resultadoValidaçãoTarefa").textContent =
            "Nenhuma tarefa foi informada!";
        return;
    }

    if (tarefa.concluida) {
        document.getElementById("resultadoValidaçãoTarefa").textContent =
            "Esta tarefa já foi concluída.";
        statusTarefa.textContent = "Concluída";
        return;
    }

    tarefa.concluida = true;

    statusTarefa.textContent = "Concluída";

    document.getElementById("resultadoValidaçãoTarefa").textContent =
        "Tarefa concluída com sucesso!";
    }
}

//==================================================================
//                          Atividade 10
//==================================================================

function processarAtendimento() {
    const opcao = Number(document.getElementById("opcaoAtendimento").value);
    const clienteVip = document.getElementById("clienteVipAtendimento").checked;
    const resultado = document.getElementById("resultadoAtendimento");

    switch (opcao) {
        case 1:
            resultado.innerText = "Consultando seu pedido...";
            break;
        case 2:
            resultado.innerText = "Solicitação de cancelamento registrada.";
            break;
        case 3:
            if (clienteVip) {
                resultado.innerText = "Cliente VIP: atendimento prioritário.";
            } else {
                resultado.innerText = "Você será encaminhado para um atendente.";
            }
            break;
        case 4:
            resultado.innerText = "Atendimento encerrado com sucesso.";
            break;
        default:
            resultado.innerText = "Opção inválida.";
            break;
    }
}

//==================================================================
//                          Desafio Extra
//==================================================================

function verificarGerenciamentoTarefa(prioridade, atrasada, concluida) {
    const opcao = Number(document.getElementById("desafioPrioridade").value);
    const Atrasado = document.getElementById("desafioAtrasada").checked;
    const Concluido = document.getElementById("desafioConcluida").checked;
    const resultado = document.getElementById("resultadoDesafioExtra");
}
