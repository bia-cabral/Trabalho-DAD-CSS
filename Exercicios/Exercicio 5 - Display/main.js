let personagens = document.getElementById('personagens');
const validar = document.getElementsByClassName('btn')[0];
const cardPerigo = document.getElementById('container-desafio')
const modo = localStorage.getItem("modoJogo")

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
        alert('Parabéns, você passou!')
    }
    else if (cardPerigo.style.backgroundColor == 'rgba(255, 0, 0, 0.56)') {
        alert('A princesa foi capturada!')
        if(modo == "historia"){
            window.location.href = "../../Mapas/MapaHistoria/mapaHistoria.html"
        }else{
            window.location.href = "../../Mapas/MapaExplorar/mapaExplorar.html"
        }
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
    const listaFasesCompletas = JSON.parse(localStorage.getItem("fasesConcluidas"))
    if(!listaFasesCompletas.includes("tres")){
        listaFasesCompletas.push("tres")

        localStorage.setItem("fasesConcluidas", JSON.stringify(listaFasesCompletas))
    }
}