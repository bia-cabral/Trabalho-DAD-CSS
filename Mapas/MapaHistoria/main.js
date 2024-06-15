const fasesConcluidas = JSON.parse(localStorage.getItem("fasesConcluidas"))


fasesConcluidas.forEach(idFase => {
    const divBotaoAlterar = document.querySelector(`#${idFase}`)
    const ancora = divBotaoAlterar.children[0]
    const botao = divBotaoAlterar.children[0].children[0]
    divBotaoAlterar.replaceChildren(ancora, botao)
    botao.textContent = "🏆"
    botao.classList.remove("learn-more")
    botao.classList.add("fase-concluida")
    
    
        
});

// #F7EFBA