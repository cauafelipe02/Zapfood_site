document.addEventListener("DOMContentLoaded", () => {
    const botoesAtualizar = document.querySelectorAll(".atualizar");

    botoesAtualizar.forEach(botao => {
        botao.addEventListener("click", () => {
            const pedidoDiv = botao.closest(".pedido");

            const numeroPedido = pedidoDiv.querySelector("h2").textContent;
            const statusSelect = pedidoDiv.querySelector("select[name='status']");
            const entregadorInput = pedidoDiv.querySelector("input[name='entregador']");

            const novoStatus = statusSelect.value;
            const entregador = entregadorInput.value.trim();

            // Validação simples
            if (entregador === "") {
                alert("Por favor, digite o nome do entregador.");
                return;
            }

            // Simulação de atualização
            alert(`${numeroPedido} atualizado para "${novoStatus}" com entregador "${entregador}".`);
        });
    });
});