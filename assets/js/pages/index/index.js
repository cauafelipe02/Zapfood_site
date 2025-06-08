document.addEventListener('DOMContentLoaded', function () {
    // Código para o menu de cadastro
    const cadastrarBtn = document.getElementById('cadastrarBtn');
    const cadastroOpcoes = document.getElementById('cadastroOpcoes');
    let hideTimeout;

    if (cadastrarBtn && cadastroOpcoes) {
        cadastrarBtn.addEventListener('click', function (event) {
            event.preventDefault();

            const isVisible = cadastroOpcoes.style.display === 'block';

            // Toggle visibilidade
            cadastroOpcoes.style.display = isVisible ? 'none' : 'block';

            // Se abriu, inicia o timer de esconder
            if (!isVisible) {
                clearTimeout(hideTimeout);
                hideTimeout = setTimeout(() => {
                    cadastroOpcoes.style.display = 'none';
                }, 5000); // 5 segundos
            }
        });

        // Fecha ao clicar fora
        document.addEventListener('click', function (event) {
            const isClickInside = cadastrarBtn.contains(event.target) || cadastroOpcoes.contains(event.target);

            if (!isClickInside) {
                cadastroOpcoes.style.display = 'none';
                clearTimeout(hideTimeout);
            }
        });
        
        // Fecha ao rolar a página
        window.addEventListener('scroll', function () {
        if (cadastroOpcoes.style.display === 'block') {
            cadastroOpcoes.style.display = 'none';
            clearTimeout(hideTimeout);
    }
});
    }

    // Código para a rolagem ao clicar no botão de pedido
    const botaoPedido = document.querySelector('.botao-pedido');
    const secaoPratos = document.querySelector('.sessao:nth-child(1)');

    if (botaoPedido && secaoPratos) {
        botaoPedido.addEventListener('click', function (event) {
            event.preventDefault();
            secaoPratos.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Código para a rolagem ao clicar em "Sobre nós"
    const btnSobreNos = document.getElementById('btnSobrenos');
    const footer = document.querySelector('footer');

    if (btnSobreNos && footer) {
        btnSobreNos.addEventListener('click', function (event) {
            event.preventDefault();
            footer.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Código para mostrar a navbar com fundo ao scrollar para cima
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop < lastScrollTop) {
            // Rolou para cima
            header.style.transform = 'translateY(0)';
            header.style.backgroundColor = 'rgba(0, 25, 49, 0.92)';
        } else {
            // Rolou para baixo
            header.style.transform = 'translateY(-100%)';
            header.style.backgroundColor = 'transparent';
        }
        lastScrollTop = scrollTop;
    });
});