document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-restaurante");
    const mensagem = document.getElementById("mensagem");

    // Vetor para armazenar os restaurantes cadastrados
    const restaurantesCadastrados = [];
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const campos = {
            nome: document.getElementById("nome"),
            email: document.getElementById("email"),
            senha: document.getElementById("senha"),
            telefone: document.getElementById("telefone"),
            estado: document.getElementById("estado"),
            cnpj: document.getElementById("cnpj")
        };

        let camposValidos = true;

        // Limpar erros visuais
        for (const campo of Object.values(campos)) {
            campo.classList.remove("erro");
        }

        // Verificar campos vazios
        for (const campo of Object.values(campos)) {
            if (!campo.value.trim()) {
                campo.classList.add("erro");
                camposValidos = false;
            }
        }

        if (!camposValidos) {
            mostrarMensagem("Por favor, preencha todos os campos.", "erro");
            return;
        }

        // Validação básica do CNPJ
        const cnpjNumeros = campos.cnpj.value.replace(/\D/g, '');
        if (cnpjNumeros.legth !== 14) {
            campos.cnpj.classList.add("erro");
            mostrarMensagem("CNPJ inválido. Deve conter 14 dígitos numéricos,", "erro");
            return;
        }

        // Criar objeto com os dados do restaurante
        const restaurante = {
            nome: campos.nome.value.trim(),
            email: campos.email.value.trim(),
            senha: campos.senha.value.trim(),
            telefone: campos.telefone.value.trim(),
            estado: campos.estado.value.trim(),
            cnpj: cnpjNumeros
        };

        // Adicionar ao vetor
        restaurantesCadastrados.push(restaurante);

        // Mostrar no console
        console.log("Restaurante cadastrado: ", restaurante);
        console.log("Todos os restaurantes: ", restaurantesCadastrados)

        // Feedback para o usuário
        mostrarMensagem("Cadastro realizado com sucesso!", "sucesso");

        // Limpar formulário
        form.reset();
    });

    function mostrarMensagem(texto, tipo) {
        mensagem.textContent = texto;
        mensagem.className = tipo === "sucesso"
        ? "mensagem-sucesso"
        : "mensagem-erro";
    }
});