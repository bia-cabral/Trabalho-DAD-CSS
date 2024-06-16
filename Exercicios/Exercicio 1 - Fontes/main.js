const botaoValidar = document.getElementById("btnValidar");
const modal = document.querySelector("#dialog-mensagem")
const bntVoltar = document.querySelector("#btn-voltar")
function persistencia(){
  const listaFasesCompletas = JSON.parse(localStorage.getItem("fasesConcluidas"))
  if(!listaFasesCompletas.includes("dois")){
      listaFasesCompletas.push("dois")

      localStorage.setItem("fasesConcluidas", JSON.stringify(listaFasesCompletas))
    }
}

botaoValidar.addEventListener("click", function() {

  const classeIsabella = document.getElementsByClassName("Isabella");

  // Font Style
  const fontstyleInput = document.getElementById("font-style");
  const fontstyleInputValue = fontstyleInput.value;
  
  // Contador de acertos
  let contador = 0;
  
  if(fontstyleInputValue == "font-style"){
    for (let i = 0; i < classeIsabella.length; i++) {
      classeIsabella[i].style.fontStyle = "italic";
    }    
  } else {
    contador++;
  }

  // Color
  const colorInput = document.getElementById("color");
  const colorInputValue = colorInput.value;
  
  if(colorInputValue == "color"){
    for (let i = 0; i < classeIsabella.length; i++) {
      classeIsabella[i].style.color = "#DA417C";
    }    
  } else {
    contador++;
  }
  
  // Font Size
  const fontsizeInput = document.getElementById("font-size");
  const fontsizeInputValue = fontsizeInput.value;
  
  if(fontsizeInputValue == "font-size"){
    for (let i = 0; i < classeIsabella.length; i++) {
      classeIsabella[i].style.fontSize = "25px";
    }    
  } else {
    contador++;
  }
  
  // Font Family
  const fontfamilyInput = document.getElementById("font-family");
  const fontfamilyValue = fontfamilyInput.value;
  
  if(fontfamilyValue == "font-family"){
    for (let i = 0; i < classeIsabella.length; i++) {
      classeIsabella[i].style.fontFamily = "'Verdana', sans-serif";
    }    
  } else {
    contador++;
  }

  // Alertas com base no contador
  if(contador == 4){
    window.alert("Todos os campos estão errados.");
  } else if(contador == 3){
    window.alert("75% de erro, tente novamente");
  } else if(contador == 2){
    window.alert("50% de erro, tente novamente");
  } else if(contador == 1){
    window.alert("25% de erro, tente novamente");
  } else {  
    persistencia()
    modal.showModal()
    voltarMapa.addEventListener("click",()=>{
        window.location.href = "../../Mapas/MapaExplorar/mapaExplorar.html"
    })
  }

});

