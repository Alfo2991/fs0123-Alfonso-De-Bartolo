const output = document.querySelector(".output");
const risultato = document.querySelector(".risultato");
const keys = document.querySelectorAll(".button")

keys.forEach(key{
    key.addEventListener(calcola)
});

function calcola() {
    let buttontext = this.innerText;
    if (buttontext === "C") {
        output.innerText = "";
        risultato.innerText = "0"
    }

    if (buttontext === "=") {
        LO VEDIAMO DOPO
    }
    else {
        output.textContent += buttontext;
        return;
    }
}

