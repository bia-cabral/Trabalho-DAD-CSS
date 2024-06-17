// Selecionando cada checkbox individualmente pelo ID
const btnBlack = document.getElementById('cbx-46-black');
const btnYellow = document.getElementById('cbx-46-yellow');
const btnOrange = document.getElementById('cbx-46-orange');
const btnPink = document.getElementById('cbx-46-pink');
const btnRed = document.getElementById('cbx-46-red');
const modal = document.querySelector("#dialog-mensagem")
const bntVoltar = document.querySelector("#btn-voltar")
const modo = localStorage.getItem("modoJogo")

function persistencia(){
    const listaFasesCompletas = JSON.parse(localStorage.getItem("fasesConcluidas"))
    if(!listaFasesCompletas.includes("qautro")){
        listaFasesCompletas.push("quatro")
  
        localStorage.setItem("fasesConcluidas", JSON.stringify(listaFasesCompletas))
  }
  }
// Função para exibir alerta e desmarcar checkbox após 5 segundos
function showAlertAndUncheck(message, checkbox) {
    window.alert(message);
    setTimeout(() => {
        checkbox.checked = false;
    }, 500);
}

// Adicionando event listeners para cada checkbox
btnBlack.addEventListener('change', function() {
    if (this.checked) {
        showAlertAndUncheck("Resposta incorreta :(, tente novamente", this);
    }
});

btnYellow.addEventListener('change', function() {
    if (this.checked) {
        showAlertAndUncheck("Resposta incorreta :(, tente novamente", this);
    }
});

btnOrange.addEventListener('change', function() {
    if (this.checked) {
        showAlertAndUncheck("Resposta incorreta :(, tente novamente", this);
    }
});

btnPink.addEventListener('change', function() {
    if (this.checked) { 
        persistencia()
        modal.showModal()
        voltarMapa.addEventListener("click",()=>{
            if(modo == "historia"){
                window.location.href = "../../Mapas/MapaHistoria/mapaHistoria.html"
            }else{
                window.location.href = "../../Mapas/MapaExplorar/mapaExplorar.html"
            }
        })
    }
});

btnRed.addEventListener('change', function() {
    if (this.checked) {
        showAlertAndUncheck("Resposta incorreta :(, tente novamente", this);
    }
});
