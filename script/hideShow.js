function hideShowAddress(){
    const button = document.getElementById("arrow-address")
    const bodyAddress = document.getElementById("body-address")

    if(bodyAddress.style.display === "none"){
        button.style.transform = "rotate(270deg)"
        bodyAddress.style.display = "block" 
    } else{ 
        button.style.transform = "rotate(90deg)"
        bodyAddress.style.display = "none"
    }
}

function hideShowPayment(){
    const button = document.getElementById("arrow-pay")
    const bodyPay = document.getElementById("body-pay")

    if(bodyPay.style.display === "none"){
        button.style.transform = "rotate(270deg)"
        bodyPay.style.display = "block" 
    } else{ 
        button.style.transform = "rotate(90deg)"
        bodyPay.style.display = "none"
    }
}