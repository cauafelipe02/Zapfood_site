// index.js - Avaliações Restaurante

document.addEventListener('DOMContentLoaded', () => {
    const avaliacoes = document.querySelectorAll('.avaliacao');
  
    avaliacoes.forEach(avaliacao => {
      avaliacao.addEventListener('click', () => {
        alert(`Comentário de ${avaliacao.querySelector('h2').textContent}`);
      });
    });
  });  