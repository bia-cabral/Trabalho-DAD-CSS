let personagens = document.getElementById('personagens');
const validar = document.getElementsByClassName('btn')[0];
const cardPerigo = document.getElementById('container-desafio')
const modalMensagem = document.getElementById("dialog-mensagem")
const voltarMapa = document.getElementById("btn-voltar")

perigo()

function addAtributos() {
    const display = document.getElementById('tipo-display').value;
    const just = document.getElementById('tipo-justify').value;
    
    personagens.style.display = display;
    personagens.style.justifyContent = just;

    perigo()
}

function perigo() {
    const tiposJustPerigo = ['baseline', 'center', 'end', 'flex-end', 'flex-start', 'left', 'right', 'safe']
    const tiposJustMedio = ['space-around', 'space-evenly']
    if (tiposJustPerigo.indexOf(personagens.style.justifyContent) > -1) {
        cardPerigo.style.backgroundColor = '#ff00008f'
    }
    else if (tiposJustMedio.indexOf(personagens.style.justifyContent) > -1) {
        cardPerigo.style.backgroundColor = '#ff000039' 
    }
    else {
        cardPerigo.style.backgroundColor = '#ff000000'
    }
}

function mensagem() {

    console.log(cardPerigo.style.backgroundColor);

    if (personagens.style.display == 'flex' && personagens.style.justifyContent == 'space-between') {
        modalMensagem.showModal()
        voltarMapa.addEventListener("click",()=>{
        window.location.href = "http://127.0.0.1:5501/Trabalho-Git/Trabalho-DAD-CSS/Mapas/MapaHistoria/mapaHistoria.html"})
    }
    else if (cardPerigo.style.backgroundColor == 'rgba(255, 0, 0, 0.56)') {
        alert('A princesa foi capturada!')
        window.location.href = 'http://127.0.0.1:5501/Trabalho-Git/Trabalho-DAD-CSS/Mapas/MapaHistoria/mapaHistoria.html'
    }
}

validar.addEventListener('click', () => {
    addAtributos();

    setTimeout(() => {
        persistencia()
        mensagem()
    }, 500)
    
});


function persistencia(){
    let listaFasesCompletas = JSON.parse(localStorage.getItem("fasesConcluidas"))

    if (!listaFasesCompletas) {
        listaFasesCompletas = [];
    }

    if(!listaFasesCompletas.includes("cinco")){
        listaFasesCompletas.push("cinco")

        localStorage.setItem("fasesConcluidas", JSON.stringify(listaFasesCompletas))
    }
}