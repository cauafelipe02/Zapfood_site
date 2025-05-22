document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.eye');
    btn.addEventListener('click', function () {
        let input = document.querySelector('#senha');
        if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', 'text');
            btn.innerHTML = '<i class="bi bi-eye-slash"></i>'; // Ícone de esconder
        } else {
            input.setAttribute('type', 'password');
            btn.innerHTML = '<i class="bi bi-eye"></i>'; // Ícone de mostrar
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const clienteCheckbox = document.getElementById('cliente');
    const restauranteCheckbox = document.getElementById('restaurante');
    const botaoEntrar = document.querySelector('.entrar');

    botaoEntrar.addEventListener('click', function (event) {
        event.preventDefault(); // Impede recarregamento se botão estiver em um <form>

        if (restauranteCheckbox.checked) {
            window.location.href = '../../../../tela-restaurante.html';
        } else if (clienteCheckbox.checked) {
            window.location.href = '../../../../tela-cliente.html';
        } else {
            alert('Por favor, selecione uma opção antes de continuar.');
        }
    });

    // Permitir apenas um checkbox selecionado por vez
    document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                document.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
                    if (cb !== checkbox) {
                        cb.checked = false;
                    }
                });
            }
        });
    });
});
