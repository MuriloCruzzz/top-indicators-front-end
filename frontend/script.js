const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Validação simples de preenchimento (opcional)
const form = document.querySelector('.formLogin');

form.addEventListener('submit', (event) => {
  if (usernameInput.value === '' || passwordInput.value === '') {
    alert('Por favor, preencha todos os campos!');
    event.preventDefault(); // Evita o envio do formulário
  }
});

const voltarButton = document.getElementById('voltar');

voltarButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});