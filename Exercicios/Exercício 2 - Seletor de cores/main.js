const validar = document.getElementsByClassName('btn')[0]
const modalMensagem = document.getElementById("dialog-mensagem")
const voltarMapa = document.getElementById("btn-voltar")
const modo = localStorage.getItem("modoJogo")

const cores = ['amarelo', 'azul', 'ciano', 'verde', 'musgo', 'rosa bebe', 'salmao', 'limao', 'vermelho']
const valores = ['#FEE085', '#168FFF', '#73D8C6', '#72E948', '#ADC15D', '#F1C1EC', '#FF7676', '#79F9B4', '#E90A0A']

let descricaoTop = document.getElementsByClassName('descricao')[0]

const corTop = cores[Math.floor(Math.random() * cores.length)]
descricaoTop.innerHTML += corTop
const hexTop = valores[cores.indexOf(corTop)]

let descricaoSaia = document.getElementsByClassName('descricao')[1]

const corSaia = cores[Math.floor(Math.random() * cores.length)]
descricaoSaia.innerHTML += corSaia
const hexSaia = valores[cores.indexOf(corSaia)]

let topImg = document.getElementById('top-img')
topImg.setAttribute('src', '../../assets/top-'+corTop+'.png')

let saiaImg = document.getElementById('saia-img')
saiaImg.setAttribute('src', '../../assets/saia-'+corSaia+'.png')

// Função para converter um código hexadecimal para um objeto RGB
function hexToRgb(hex) {
    // Remove o caractere '#' se estiver presente
    hex = hex.replace(/^#/, '');

    // Verifica se o código é do tipo abreviado (#FFF)
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }

    // Converte o código hexadecimal para valores RGB
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
}

// Função para calcular a diferença entre dois códigos hexadecimais
function hexDifference(hex1, hex2) {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);

    // Calcula a diferença absoluta entre cada componente RGB
    const diffR = Math.abs(rgb1.r - rgb2.r);
    const diffG = Math.abs(rgb1.g - rgb2.g);
    const diffB = Math.abs(rgb1.b - rgb2.b);

    // Soma as diferenças para obter uma medida de "aproximação"
    const totalDifference = diffR + diffG + diffB;

    return totalDifference;
}

// Função para calcular nota do usuário
function calcularNota(nota1, nota2) {
    passouQuestao1 = nota1 <= 150 ? true : false
    console.log(passouQuestao1);
    passouQuestao2 = nota2 <= 150 ? true : false

    return passouQuestao1 && passouQuestao2
}

// Inicialização da atividade
validar.addEventListener('click', () => {

    const inputTop = "#" + document.getElementById('top-hex').value.trim()
    const inputSaia = "#" + document.getElementById('saia-hex').value.trim()

    try {
        if (!/^#[0-9A-F]{6}$/i.test(inputTop) || !/^#[0-9A-F]{6}$/i.test(inputSaia)) {
            throw new Error('Por favor, insira um código hexadecimal válido no formato #RRGGBB.');
        }

        const differenceTop = hexDifference(hexTop, inputTop.toUpperCase());
        const differenceSaia = hexDifference(hexSaia, inputSaia.toUpperCase());

        console.log(differenceTop + " " + differenceSaia);

        resultado = calcularNota(differenceTop, differenceSaia)
        if (resultado) {
            persistencia()
            modalMensagem.showModal()
            voltarMapa.addEventListener("click",()=>{
            if(modo == "historia"){
                window.location.href = "../../Mapas/MapaHistoria/mapaHistoria.html"
            }else{
                window.location.href = "../../Mapas/MapaExplorar/mapaExplorar.html"
            }
        })
        }
        else {
            alert('Tente novamente!')
        }
        
    } catch (error) {
        alert(error.message);
    }
})

function persistencia(){
    let listaFasesCompletas = JSON.parse(localStorage.getItem("fasesConcluidas"))

    if (!listaFasesCompletas) {
        listaFasesCompletas = [];
    }

    if(!listaFasesCompletas.includes("dois")){
        listaFasesCompletas.push("dois")

        localStorage.setItem("fasesConcluidas", JSON.stringify(listaFasesCompletas))
    }
}
