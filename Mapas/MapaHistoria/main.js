const fasesConcluidas = JSON.parse(localStorage.getItem("fasesConcluidas"))
const modal = document.querySelector("#dialog-mensagem")
const bntVoltar = document.querySelector("#btn-voltar")
const btnExplorar = document.querySelector("#btn-explorar")
const btnHistoria = document.querySelector("#btn-historia")

bntVoltar.addEventListener("click", ()=>{
    window.location.href = "../../index.html"
})

btnExplorar.addEventListener("click", ()=>{
    window.location.href = "../../Mapas/MapaExplorar/mapaExplorar.html"
})

btnHistoria.addEventListener("click", ()=>{
    localStorage.setItem("fasesConcluidas", JSON.stringify([]))
    window.location.href = "../../Mapas/MapaHistoria/mapaHistoria.html"
})

if(fasesConcluidas.length > 6){
    setTimeout(()=>{
        modal.showModal()
    }, 1000)
}

fasesConcluidas.forEach(idFase => {
    const divBotaoAlterar = document.querySelector(`#${idFase}`)
    const ancora = divBotaoAlterar.children[0]
    const botao = divBotaoAlterar.children[0].children[0]
    divBotaoAlterar.replaceChildren(ancora, botao)
    botao.textContent = "🏆"
    botao.classList.remove("learn-more")
    botao.classList.add("fase-concluida")
});

