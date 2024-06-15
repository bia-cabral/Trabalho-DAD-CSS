const princesa = document.querySelector("#princesa")
const pedra = document.querySelector(".container-pedras") 
const valorTopInput = document.querySelector("#valorTop")
const valorBackgroundColorInput = document.querySelector("#valorBackgroundColor")
const valorLeftInput = document.querySelector("#valorLeft")
const valorZindexInput = document.querySelector("#valorZindex")
const textoPedras = document.querySelector("#textoPedras")
const modal = document.querySelector("#dialog-mensagem")
const bntVoltar = document.querySelector("#btn-voltar")

let valorTop = ""
let valorBackgroundColor = ""
let valorZindex = ""
let valorLeft = ""
let atravessou = 0

valorTopInput.addEventListener("keyup", (e)=>{
    valorTop = valorTopInput.value.toLowerCase().trim()
    let srcPedra = pedra.children[0].outerHTML.substring(5, 28)
    
    if(srcPedra.includes("pedra")){
        if(valorTop >= 280 && valorTop <= 300){
            princesa.style.top = `${valorTop}px`
            setTimeout(() => {
                window.alert("Cuidado, obstáculo a frente! Use o background-color para aumentar a sua aurea, quebrando o obstaculo!")
            }, 1000)
        }else if(valorTop > 300){
            window.alert("Valor muito alto")
        }else if(valorTop < 0){
            window.alert("Valor muito baixo")
        }else{
            princesa.style.top = `${valorTop}px`
        }
        mudaPedra()
    }else{
        if(valorTop > 780){
            window.alert("Valor muito alto")
        }else if (valorTop >= 740 && valorTop < 780){
            princesa.style.top = `${valorTop}px`
            setTimeout(() => {
                window.alert("Você conseguiu chegar na parte mais rasa do rio!")
            }, 1000)
        }else{
            princesa.style.top = `${valorTop}px`
        }
    }

    if(atravessou == 1){
        window.alert("entrou")
        if((valorTop >= 0 && valorTop <= 200) && (valorTop >= 460 && valorLeft <= 500)){
            persistencia()
            princesa.style.top = "18px"
            princesa.style.left = "490px"
            setTimeout(() => {
                modal.showModal()
                bntVoltar.addEventListener("click", ()=>{
                    window.location.href = "../../Mapas/MapaExplorar/mapaExplorar.html"
                })
            }, 1500)
        }
    }
})

function mudaPedra(){
    if(valorBackgroundColor == "blue" && (valorTop >= 280 && valorTop <= 300)){
        const pedras = document.querySelectorAll(".pedra")

        pedras.forEach(pedra =>{
            console.log(pedra.innerHTML)
            pedra.setAttribute("src", "../../assets/Pedra Quebrada.png")
            textoPedras.textContent = "Após quebrar as pedras, você deve passar por cima delas. E quando você estiver na parte mais rasa do rio, você deve atravessar ele"
        })
        setTimeout(() => {
            window.alert("Ufa, agora que as pedras estão quebradas, você pode descer com a princesa!")
        }, 1000)
    }
}



valorBackgroundColorInput.addEventListener("keyup", ()=>{
    valorBackgroundColor = valorBackgroundColorInput.value.toLowerCase().trim()
    if(valorBackgroundColor == "blue"){
        princesa.style.backgroundColor = valorBackgroundColor
    }else{
        princesa.style.backgroundColor = ''
    }
    mudaPedra()
})

valorLeftInput.addEventListener("keyup", ()=>{
    valorLeft = valorLeftInput.value.toLowerCase().trim()

    if(atravessou == 0){
        if((valorLeft >= 140 && valorLeft <= 160) && (valorTop >= 740 && valorTop < 780) && valorZindex == ""){
            princesa.style.left = `${valorLeft}px`
            setTimeout(() =>{
                window.alert("Oh não, caso a princesa tente atravessar o rio ela irá se afogar, altere o z-index para ela levitar por cima do rio")
            }, 1000)
        }else if ((valorTop >= 740 && valorTop < 780) && valorZindex != ""){
            if(valorLeft >= 460){
                 princesa.style.left = `${valorLeft}px`
                 atravessou = 1
                 setTimeout(()=>{
                    window.alert("Parabéns, você conseguiu atravessar a princesa. Agora é so chegar no castelo")
                 }, 1000)
                princesa.style.left = `${valorLeft}px`
            }
        }else if ((valorLeft >= 140 && valorLeft <= 160) && !(valorTop >= 760 && valorTop < 860) && valorZindex == ""){
            window.alert("Você ainda não chegou na parte mais rasa do rio")
        }else if(valorLeft > 160 ){
            window.alert("Valor muito alto para a travessia!")
        }else{
            princesa.style.left = `${valorLeft}px`
        }
    } else if (atravessou == 1){
        if(valorLeft > 500 ){
            window.alert("Valor muito alto!")
        }else{
            princesa.style.left = `${valorLeft}px`
        }
    }

})  

valorZindexInput.addEventListener("keyup", ()=>{
    valorZindex = valorZindexInput.value.toLowerCase().trim()

    if(valorZindex >= 2){
        princesa.style.zIndex = valorZindex
        window.alert("A princesa está pronta para a travessia!!!")
    }else{
        window.alert("A princesa irá se afogar!!!")
    }
})

function persistencia(){
    const listaFasesCompletas = carregarFasesCompletas()
    listaFasesCompletas.push("um")

    localStorage.setItem("fasesCompletas", JSON.stringify(listaFasesCompletas))
}
