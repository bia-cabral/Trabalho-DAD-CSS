const botaoValidar = document.getElementById("btnValidar");


botaoValidar.addEventListener("click", function() {

  const classeIsabella = document.getElementsByClassName("Isabella");

  // Font Style
  // Acesse o input pelo seu ID
  const fontstyleInput = document.getElementById("font-style");
  // Pegue o valor do input
  const fontstyleInputValue = fontstyleInput.value;
  if(fontstyleInputValue == "font-style"){
    for (var i = 0; i < classeIsabella.length; i++) {
      classeIsabella[i].style.fontStyle = "italic";
    }    
  }

  // color
  // Acesse o input pelo seu ID
  const colorInput = document.getElementById("color");
  // Pegue o valor do input
  const colorInputValue = colorInput.value;
  if(colorInputValue == "color"){
    for (var i = 0; i < classeIsabella.length; i++) {
      classeIsabella[i].style.color = "#DA417C";
    }    
  }
  
  // Font Size
  // Acesse o input pelo seu ID
  const fontsizeInput = document.getElementById("font-size");
  // Pegue o valor do input
  const fontsizeInputValue = fontsizeInput.value;
  if(fontsizeInputValue == "font-size"){
    for (var i = 0; i < classeIsabella.length; i++) {
      classeIsabella[i].style.fontSize = "25px";
    }    
  }
 // font-family
  // Acesse o input pelo seu ID
  const fontfamilyInput = document.getElementById("font-size");
  // Pegue o valor do input
  const fontfamilyValue = fontfamilyInput.value;
  if(fontfamilyInput == "font-family"){
    for (var i = 0; i < classeIsabella.length; i++) {
      classeIsabella[i].style.fontFamily = "'Verdana', sans-serif";
    }    
  }


})