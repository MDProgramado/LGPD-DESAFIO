const button = document.getElementById("enviar"); 
const checkboxTermo = document.getElementById("termoDeUso");



function blockButton() {
  
        button.disabled = !checkboxTermo.checked;

}

function colorButton() {

    if(!button.disabled) {

        button.style.backgroundColor = '#1351d8';
    }
    else {
         button.style.backgroundColor = '#a8a8a8'
        
    }
}

checkboxTermo.addEventListener("change",  () => {
    blockButton();
    colorButton();
});