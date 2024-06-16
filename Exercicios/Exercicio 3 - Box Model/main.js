const princess = document.getElementById('imgprincesa');
const inputLeft = document.getElementById('inputleft');
const btValidar = document.getElementById("btValidar")
const modalMensagem = document.getElementById("dialog-mensagem")
const voltarMapa = document.getElementById("btn-voltar")

inputLeft.addEventListener("keyup",()=>{
    let inputToptValor = document.getElementById('inputtop').value
    let inputLeftValor = document.getElementById('inputleft').value
    if(inputLeftValor < 0){
        window.alert("Insira valores maiores que 0")
    }
    else{
        if(inputLeftValor < 840){
            princess.setAttribute("style","margin-top:"+inputToptValor+"px;margin-left:"+inputLeftValor+"px")
        }
        else{
            window.alert("Insira valores menores")
        }
}

  
})
const inputTop = document.getElementById('inputtop');

inputTop.addEventListener("keyup",()=>{
    let inputTopValor = document.getElementById('inputtop').value
    let inputLeftValor = document.getElementById('inputleft').value
    if(inputTopValor < 0){
        window.alert("Insira valores maiores que 0")
    }
    else{
        if(inputTopValor < 620){
            princess.setAttribute("style","margin-top:"+inputTopValor+"px;margin-left:"+inputLeftValor+"px")
        }
        else{
            window.alert("Insira valores menores")
        }
}
})


btValidar.addEventListener("click", () => {
    let inputLeftGet = parseInt(window.getComputedStyle(princess).marginLeft)
    let inputTopGet = parseInt(window.getComputedStyle(princess).marginTop)
    if(inputLeftGet == 800 && inputTopGet == 550){
        persistencia()
        modalMensagem.showModal()
        voltarMapa.addEventListener("click",()=>{
            window.location.href = "../../Mapas/MapaExplorar/mapaExplorar.html"
        })
    }
})


const listaFasesCompletas = JSON.parse(localStorage.getItem("fasesConcluidas"))
    if(!listaFasesCompletas.includes("tres")){
        listaFasesCompletas.push("tres")

        localStorage.setItem("fasesConcluidas", JSON.stringify(listaFasesCompletas))
    }

