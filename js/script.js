// Função para mostrar/ocultar o pop-up de contato
document.getElementById("contactButton").addEventListener("click", function() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = (overlay.style.display === "flex") ? "none" : "flex"; // Alterna a exibição
});

// Função para fechar o pop-up ao clicar no botão "Fechar"
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none"; // Oculta o overlay
});

// Fechar o pop-up ao clicar fora dele
document.getElementById("overlay").addEventListener("click", function(event) {
    if (event.target === this) {
        this.style.display = "none"; // Oculta o overlay
    }
});

// Função para exibir o campo de texto quando "Outro" for selecionado em Banco de Dados
function mostrarCampoOutro() {
    const outroBanco = document.getElementById('outro');
    const outroBancoContainer = document.getElementById('outroBancoContainer');

    outroBancoContainer.style.display = outroBanco.checked ? 'block' : 'none'; // Exibe/oculta o container
    if (!outroBanco.checked) {
        document.getElementById('outroBanco').value = ''; // Limpa o campo se desmarcado
    }
}

// Adiciona o evento de mudança para esconder o campo se outra opção for selecionada
const radiosBanco = document.querySelectorAll('input[name="banco"]');
radiosBanco.forEach(radio => {
    radio.addEventListener('change', mostrarCampoOutro);
});

// Função para exibir o campo de texto quando "Outro" for selecionado em Linguagens Preferidas
function mostrarCampoLinguagemOutro() {
    const linguagemOutro = document.getElementById('linguagemOutro');
    const outroLinguagemContainer = document.getElementById('outroLinguagemContainer');

    outroLinguagemContainer.style.display = linguagemOutro.checked ? 'block' : 'none'; // Exibe/oculta o container
    if (!linguagemOutro.checked) {
        document.getElementById('outroLinguagem').value = ''; // Limpa o campo se desmarcado
    }
}

// Adiciona o evento de mudança para esconder o campo se outra opção for selecionada
const checkboxesLinguagem = document.querySelectorAll('input[name="linguagens"]');
checkboxesLinguagem.forEach(checkbox => {
    checkbox.addEventListener('change', mostrarCampoLinguagemOutro);
});