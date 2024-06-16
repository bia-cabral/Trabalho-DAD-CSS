const fasesConcluidas = localStorage.getItem("fasesConcluidas")
if(fasesConcluidas.length == 0 || fasesConcluidas == null){
    localStorage.setItem("fasesConcluidas", JSON.stringify([]))
}

