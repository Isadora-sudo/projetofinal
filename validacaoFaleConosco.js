document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('meuFormulario');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const mensagem = document.getElementById('mensagem');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let valid = true;

        // Resetar erros
        document.querySelectorAll('.erro').forEach(el => el.textContent = '');
        document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('error'));

        // Validação Nome
        if(nome.value.trim() === '') {
            document.getElementById('nome-error').textContent = 'Por favor, preencha seu nome.';
            nome.classList.add('error');
            valid = false;
        }

        // Validação Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email.value.trim())) {
            document.getElementById('email-error').textContent = 'Digite um e-mail válido.';
            email.classList.add('error');
            valid = false;
        }

        // Validação Telefone
        const telRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
        if(!telRegex.test(telefone.value.trim())) {
            document.getElementById('telefone-error').textContent = 'Informe um telefone válido (ex: (63) 99136-3790).';
            telefone.classList.add('error');
            valid = false;
        }

        // Validação Mensagem
        if(mensagem.value.trim().length < 5) {
            document.getElementById('mensagem-error').textContent = 'Por favor, escreva sua mensagem.';
            mensagem.classList.add('error');
            valid = false;
        }

        // Se tudo estiver válido
        if(valid) {
            alert('✨ Mensagem enviada com sucesso! ✨\n\nNome: ' + nome.value + 
                  '\nE-mail: ' + email.value + 
                  '\nTelefone: ' + telefone.value + 
                  '\nMensagem: ' + mensagem.value);
            form.reset();
        }
    });
});
