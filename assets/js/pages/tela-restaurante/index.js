document.addEventListener("DOMContentLoaded", () => {
    // Dados simulados do restaurante
    const restaurante = {
        nome: "Zapfood Lanches"
    };

    // Dados simulados de pedidos
    const pedidos = [
        { cliente: "João", status: "Entregue", hora: "11:00" },
        { cliente: "Maria", status: "Pendente", hora: "11:05" },
        { cliente: "Lucas", status: "Pendente", hora: "11:15" },
        { cliente: "Ana", status: "Entregue", hora: "11:30" }
    ];

    // Atualizar nome do restaurante na navbar
    document.querySelector(".navbar-left h1").textContent = restaurante.nome;

    // Atualizar Cards
    function atualizarCards() {
        const totalPendentes = pedidos.filter(p => p.status === "Pendente").length;
        const totalEntregues = pedidos.filter(p => p.status === "Entregue").length;
        const mediaAvaliacao = 4.5;

        const cards = document.querySelectorAll(".card");
        cards[0].querySelector(".quantidade").textContent = totalPendentes;
        cards[1].querySelector(".quantidade").textContent = totalEntregues;
        cards[2].querySelector(".quantidade").textContent = `${mediaAvaliacao} ★`;
    }

    // Preencher tabela de últimos pedidos
    function atualizarTabela() {
        const tbody = document.querySelector(".recent-orders tbody");
        tbody.innerHTML = ""; // Limpa antes de preencher

        pedidos.forEach(pedido => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${pedido.cliente}</td>
                <td>${pedido.status}</td>
                <td>${pedido.hora}</td>
                <td><button class="btn-acao">Detalhes</button></td>
            `;
            tbody.appendChild(row);
        });
    }

    // Botão de abrir/fechar menu lateral
    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('ativo');
    });

    // Inicialização
    atualizarCards();
    atualizarTabela();
});