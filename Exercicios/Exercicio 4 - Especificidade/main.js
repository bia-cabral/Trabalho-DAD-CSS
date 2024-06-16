// Selecionando cada checkbox individualmente pelo ID
const btnBlack = document.getElementById('cbx-46-black');
const btnyellow = document.getElementById('cbx-46-yellow');
const btnorange = document.getElementById('cbx-46-orange');
const btnpink = document.getElementById('cbx-46-pink');
const btnred = document.getElementById('cbx-46-red');

// Adicionando event listeners para cada checkbox
btnBlack.addEventListener('change', function() {
    if (this.checked) {
        // Ação a ser executada quando checkbox1 é marcado
        console.log("Checkbox 1 marcado");
        // Executar função específica, por exemplo:
        // handleCheckbox1();
    } else {
        // Ação a ser executada quando checkbox1 é desmarcado
        console.log("Checkbox 1 desmarcado");
    }
});

btnyellow.addEventListener('change', function() {
    if (this.checked) {
        // Ação a ser executada quando checkbox2 é marcado
        console.log("Checkbox 2 marcado");
        // Executar função específica, por exemplo:
        // handleCheckbox2();
    } else {
        // Ação a ser executada quando checkbox2 é desmarcado
        console.log("Checkbox 2 desmarcado");
    }
});

btnorange.addEventListener('change', function() {
    if (this.checked) {
        // Ação a ser executada quando checkbox3 é marcado
        console.log("Checkbox 3 marcado");
        // Executar função específica, por exemplo:
        // handleCheckbox3();
    } else {
        // Ação a ser executada quando checkbox3 é desmarcado
        console.log("Checkbox 3 desmarcado");
    }
});

btnpink.addEventListener('change', function() {
    if (this.checked) {
        // Ação a ser executada quando checkbox4 é marcado
        console.log("Checkbox 4 marcado");
        // Executar função específica, por exemplo:
        // handleCheckbox4();
    } else {
        // Ação a ser executada quando checkbox4 é desmarcado
        console.log("Checkbox 4 desmarcado");
    }
});

btnred.addEventListener('change', function() {
    if (this.checked) {
        // Ação a ser executada quando checkbox5 é marcado
        console.log("Checkbox 5 marcado");
        // Executar função específica, por exemplo:
        // handleCheckbox5();
    } else {
        // Ação a ser executada quando checkbox5 é desmarcado
        console.log("Checkbox 5 desmarcado");
    }
});
