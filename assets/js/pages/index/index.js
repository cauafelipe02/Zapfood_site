document.addEventListener('DOMContentLoaded', function() {
    // Código para o menu de cadastro
    const cadastrarBtn = document.getElementById('cadastrarBtn');
    const cadastroOpcoes = document.getElementById('cadastroOpcoes');

    if (cadastrarBtn && cadastroOpcoes) {
        cadastrarBtn.addEventListener('click', function(event) {
            event.preventDefault();

            if (cadastroOpcoes.style.display === 'block') {
                cadastroOpcoes.style.display = 'none';
            } else {
                cadastroOpcoes.style.display = 'block';
            }
        });
    }

    // Código para a rolagem ao clicar no botão de pedido
    const botaoPedido = document.querySelector('.botao-pedido');
    const secaoPratos = document.querySelector('.sessao:nth-child(1)');

    if (botaoPedido && secaoPratos) {
        botaoPedido.addEventListener('click', function(event) {
            event.preventDefault();
            secaoPratos.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Código para a rolagem ao clicar em "Sobre nós"
    const btnSobreNos = document.getElementById('btnSobrenos');
    const footer = document.querySelector('footer');

    if (btnSobreNos && footer) {
        btnSobreNos.addEventListener('click', function(event) {
            event.preventDefault();
            footer.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Código para mostrar a navbar com fundo ao scrollar para cima
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop < lastScrollTop) {
            // Rolou para cima
            header.style.transform = 'translateY(0)';
            header.style.backgroundColor = 'rgba(0, 25, 49, 0.92)'; // Aplica a cor de fundo ao header
        } else {
            // Rolou para baixo
            header.style.transform = 'translateY(-100%)';
            header.style.backgroundColor = 'transparent'; // Remove a cor de fundo do header
        }
        lastScrollTop = scrollTop;
    });
});