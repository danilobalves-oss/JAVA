const divs = document.querySelectorAll(".caixa");

// 1. Selecionar todos com querySelectorAll e trocar a cor
divs.forEach((div) => {
    div.style.color = "#1e3a8a";
});

// 2. Adicionar classe em todos: usar forEach para adicionar ativo em p e div
const elementosParaAtivar = document.querySelectorAll("p, .secundario");
elementosParaAtivar.forEach((elemento) => {
    elemento.classList.add("ativo");
});

// 3. Clique em todos: ao clicar, mostrar mensagem no console
divs.forEach((div) => {
    div.addEventListener("click", () => {
        console.log("clicou");
    });
});

