const princess = document.getElementById('imgprincesa');
const inputLeft = document.getElementById('position');
const modalMensagem = document.getElementById("dialog-mensagem")
const voltarMapa = document.getElementById("btn-voltar")
let valorespossiveis = ["static", "relative", "absolute", "fixed", "sticky", "initial", "inherit"]


let position = document.getElementById('position')

position.addEventListener("keyup",()=>{
    let positiontexto = position.value
    if(valorespossiveis.includes(positiontexto)){
        if(positiontexto=== "relative"){
            princess.setAttribute("style","top:360px" + ";left:950px " + ";width: 200px; position:fixed;")
        }
        else{
            princess.setAttribute("style","position:"+positiontexto+";width: 200px;")
        }
    }
})


btValidar.addEventListener("click", () => {
    let positiontexto = position.value
    if(valorespossiveis.includes(positiontexto)){
        if(positiontexto === "relative"){
            persistencia()
            modalMensagem.showModal()
            voltarMapa.addEventListener("click",()=>{
                window.location.href = "../../Mapas/MapaExplorar/mapaExplorar.html"
            })
        }
        else{
            window.alert("Tente novamente! Lembre-se que a filha deve estar proxima da mãe")
        }
    }
    else{
        window.alert("Insira um valor presente na lista de valores possiveis.")
    }
})


function persistencia(){
    const listaFasesCompletas = JSON.parse(localStorage.getItem("fasesConcluidas"))
    if(!listaFasesCompletas.includes("seis")){
        listaFasesCompletas.push("seis")

        localStorage.setItem("fasesConcluidas", JSON.stringify(listaFasesCompletas))
    }
}