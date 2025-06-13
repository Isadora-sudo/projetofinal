// validacaoFaleConosco.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formulario-contato');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const mensagem = document.getElementById('mensagem');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;

        // Resetar erros
        document.querySelectorAll('.erro').forEach(el => el.textContent = '');
        document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('error'));

        // Validação Nome (não vazio)
        if (nome.value.trim() === '') {
            document.getElementById('nome-error').textContent = 'Por favor, preencha seu nome.';
            nome.classList.add('error');
            isValid = false;
        }

        // Validação Email (formato válido)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            document.getElementById('email-error').textContent = 'Digite um e-mail válido.';
            email.classList.add('error');
            isValid = false;
        }

        // Validação Telefone (formato brasileiro)
        const telRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
        if (!telRegex.test(telefone.value.trim())) {
            document.getElementById('telefone-error').textContent = 'Informe um telefone válido (ex: (63) 99136-3790).';
            telefone.classList.add('error');
            isValid = false;
        }

        // Validação Mensagem (mínimo 5 caracteres)
        if (mensagem.value.trim().length < 5) {
            document.getElementById('mensagem-error').textContent = 'Por favor, escreva sua mensagem (mínimo 5 caracteres).';
            mensagem.classList.add('error');
            isValid = false;
        }

        // Se tudo estiver válido, envia o formulário
        if (isValid) {
            alert('✨ Mensagem enviada com sucesso! ✨');
            form.reset(); // Limpa o formulário
        }
    });
});
