const botao1 = document.querySelector("#um")
const botao2 = document.querySelector("#dois")
const botao3 = document.querySelector("#tres")
const botao4 = document.querySelector("#quatro")
const botao5 = document.querySelector("#cinco")
const botao6 = document.querySelector("#seis")
const botao7 = document.querySelector("#sete")

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
    const botao = divBotaoAlterar.children[0]
    botao.textContent = "🏆"
    botao.classList.remove("learn-more")
    botao.classList.add("fase-concluida")
});

botao1.addEventListener("click", ()=>{
    if(botao1.textContent.includes("🏆")){
        window.alert("Fase já concluida")
    }else{
        window.location.href = "../../Exercicios/Exercicio 1 - Fontes/fontes.html"
    }
})

botao2.addEventListener("click", ()=>{
    if(botao2.textContent.includes("🏆")){
        window.alert("Fase já concluida")
    }else if(fasesConcluidas.includes("um")){
        window.location.href = "../../Exercicios/Exercício 2 - Seletor de cores/vestirPrincesa.html"
    }else{
        window.alert("Faça a fase anterior")
    }
})

botao3.addEventListener("click", ()=>{
    if(botao3.textContent.includes("🏆")){
        window.alert("Fase já concluida")
    }else if(fasesConcluidas.includes("dois")){
        window.location.href = "../../Exercicios/Exercicio 3 - Box Model/boxModel.html"
    }else{
        window.alert("Faça a fase anterior")
    }
})

botao4.addEventListener("click", ()=>{
    if(botao4.textContent.includes("🏆")){
        window.alert("Fase já concluida")
    }else if(fasesConcluidas.includes("um,dois,tres")){
        window.location.href = "../../Exercicios/Exercicio 4 - Especificidade/especificidade.html"
    }else{
        window.alert("Faça a fase anterior")
    }
})

botao5.addEventListener("click", ()=>{
    if(botao5.textContent.includes("🏆")){
        window.alert("Fase já concluida")
    }else if(fasesConcluidas.includes("um,dois,tres,quatro")){
        window.location.href = "../../Exercicios/Exercicio 5 - Display/display.html"
    }else{
        window.alert("Faça a fase anterior")
    }
})

botao6.addEventListener("click", ()=>{
    if(botao6.textContent.includes("🏆")){
        window.alert("Fase já concluida")
    }else if(fasesConcluidas.includes("um,dois,tres,quatro,cinco")){
        window.location.href = "../../Exercicios/Exercicio 6 - Position/position.html"
    }else{
        window.alert("Faça a fase anterior")
    }
})

botao7.addEventListener("click", ()=>{
    if(botao7.textContent.includes("🏆")){
        window.alert("Fase já concluida")
    }else if(fasesConcluidas.includes("um,dois,tres,quatro,seis")){
        window.location.href = "../../Exercicios/Exercicio 7 - Quiz Final/quizFinal.html"
    }else{
        window.alert("Faça a fase anterior")
    }
})
