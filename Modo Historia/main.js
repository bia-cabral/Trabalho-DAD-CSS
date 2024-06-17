const fasesConcluidas = localStorage.getItem("fasesConcluidas")
const modo = localStorage.setItem("modoJogo", "historia")

if(fasesConcluidas == null){
    localStorage.setItem("fasesConcluidas", JSON.stringify([]))
}