// validacaoFaleConosco.js - versão otimizada
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('meuFormulario');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            alert('✨ Mensagem enviada com sucesso! ✨');
            form.reset();
        }
    });

    function validarFormulario() {
        let isValid = true;
        resetarErros();

        // Validações (mantenha as que já tinha)
        if (!document.getElementById('nome').value.trim()) {
            mostrarErro('nome', 'Por favor, preencha seu nome.');
            isValid = false;
        }
        // ... (outras validações)

        return isValid;
    }

    function mostrarErro(campo, mensagem) {
        document.getElementById(`${campo}-error`).textContent = mensagem;
        document.getElementById(campo).classList.add('error');
    }

    function resetarErros() {
        document.querySelectorAll('.erro').forEach(el => el.textContent = '');
        document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    }
});
