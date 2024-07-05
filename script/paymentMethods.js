const debitButton = document.getElementById("debit-btn")
const creditButton = document.getElementById("credit-btn")
const pixButton = document.getElementById("pix-btn")
const boletoButton = document.getElementById("boleto-btn")

const debitBox = document.getElementById("debit-box")
const creditBox = document.getElementById("credit-box")
const pixBox = document.getElementById("pix-box")
const boletoBox = document.getElementById("boleto-box")




function debit(){
    debitButton.style.borderBottom = "2px solid var(--color-01)"
    creditButton.style.borderBottom = "transparent"
    pixButton.style.borderBottom = "transparent"
    boletoButton.style.borderBottom = "transparent"

    debitBox.style.display = "block"
    creditBox.style.display = "none"
    pixBox.style.display = "none"
    boletoBox.style.display = "none"
}

function credit(){
    debitButton.style.borderBottom = "transparent"
    creditButton.style.borderBottom = "2px solid var(--color-01)"
    pixButton.style.borderBottom = "transparent"
    boletoButton.style.borderBottom = "transparent"

    debitBox.style.display = "none"
    creditBox.style.display = "block"
    pixBox.style.display = "none"
    boletoBox.style.display = "none"
}

function pix(){
    debitButton.style.borderBottom = "transparent"
    creditButton.style.borderBottom = "transparent"
    pixButton.style.borderBottom = "2px solid var(--color-01)"
    boletoButton.style.borderBottom = "transparent"

    debitBox.style.display = "none"
    creditBox.style.display = "none"
    pixBox.style.display = "block"
    boletoBox.style.display = "none"
}

function boleto(){
    debitButton.style.borderBottom = "transparent"
    creditButton.style.borderBottom = "transparent"
    pixButton.style.borderBottom = "transparent"
    boletoButton.style.borderBottom = "2px solid var(--color-01)"

    debitBox.style.display = "none"
    creditBox.style.display = "none"
    pixBox.style.display = "none"
    boletoBox.style.display = "block"
}