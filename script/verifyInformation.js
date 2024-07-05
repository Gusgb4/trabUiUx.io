function showAddress(){
    const name = document.getElementById("name")
    const state = document.getElementById("state") 
    const city =  document.getElementById("city")
    const district =  document.getElementById("district")
    const street =  document.getElementById("street")
    const n = document.getElementById("n")

    if(name.value != false && state.value != false && city.value != false && district.value != false && street.value != false && n.value != false){
        document.getElementById("p-cep").innerHTML = document.getElementById("cep").value
        document.getElementById("p-price").innerHTML = "R$ 13,09"
        document.getElementById("body-address").style.display = "none"
        document.getElementById("address").style.border = "2px solid green"
        document.getElementById("address").style.color = "green"
        document.querySelector("#arrow-address").setAttribute("src", "imgs/check.svg")
        document.getElementById("arrow-address").style.transform = "rotate(0deg)"
    } else{
            
        // NAME - Validação do Campo
        if(name.value != true){
            name.style.border = "1px solid var(--alert-color)"      
        }
        if(name.value != false){
            name.style.border = "1px solid var(--color-01)" 
        }

        // STATE - Validação do Campo    
        if(state.value != true){
            state.style.border = "1px solid var(--alert-color)"      
        }
        if(state.value != false){
            state.style.border = "1px solid var(--color-01)"   
        }

        // CITY - Validação do Campo 
        if(city.value != true){
            city.style.border = "1px solid var(--alert-color)"      
        }
        if(city.value != false){
            city.style.border = "1px solid var(--color-01)"   
        }

        // DISTRICT - Validação do Campo 
        if(district.value != true){
            district.style.border = "1px solid var(--alert-color)"      
        }
        if(district.value != false){
            district.style.border = "1px solid var(--color-01)"
        }
        
        // STREET - Validação do Campo 
        if(street.value != true){
            street.style.border = "1px solid var(--alert-color)"      
        }
        if(street.value != false){
            street.style.border = "1px solid var(--color-01)"
        }
        
        // NUMBER - Validação do Campo 
        if(n.value != true){
            n.style.border = "1px solid var(--alert-color)"      
        }
        if(n.value != false){
            n.style.border = "1px solid var(--color-01)"
        }   
    }

}

function showPayment(){
        const debitBox = document.getElementById("debit-box")
        const creditBox = document.getElementById("credit-box")
        const pixBox = document.getElementById("pix-box")
        const boletoBox = document.getElementById("boleto-box")

        if(debitBox.style.display != "none"){
            const cardFullname = document.getElementById("card-name-debit")
            const cardNumber = document.getElementById("card-number-debit")
            const cardDate = document.getElementById("card-date-debit")
            const cardCode = document.getElementById("card-code-debit")

            if(cardFullname.value != false && cardNumber.value != false && cardDate.value != false && cardCode.value != false){
                document.getElementById("body-pay").style.display = "none"
                document.getElementById("payment").style.border = "2px solid green"
                document.getElementById("payment").style.color = "green"
                document.querySelector("#arrow-pay").setAttribute("src", "imgs/check.svg")
                document.getElementById("arrow-pay").style.transform = "rotate(0deg)" 
                document.getElementById("p-item").innerHTML = "R$699,90"
                document.getElementById("p-payment").innerHTML = "débito"
                document.getElementById("p-total").innerHTML = "R$713,08"                            
            } else{
                // FULLNAME - Validação do Campo
                if(cardFullname.value != true){
                    cardFullname.style.border = "1px solid var(--alert-color)"      
                }
                if(cardFullname.value != false){
                    cardFullname.style.border = "1px solid var(--color-01)" 
                }
        
                // NUMBER - Validação do Campo    
                if(cardNumber.value != true){
                    cardNumber.style.border = "1px solid var(--alert-color)"      
                }
                if(cardNumber.value != false){
                    cardNumber.style.border = "1px solid var(--color-01)"   
                }
        
                // DATE - Validação do Campo 
                if(cardDate.value != true){
                    cardDate.style.border = "1px solid var(--alert-color)"      
                }
                if(cardDate.value != false){
                    cardDate.style.border = "1px solid var(--color-01)"   
                }
        
                // CODE - Validação do Campo 
                if(cardCode.value != true){
                    cardCode.style.border = "1px solid var(--alert-color)"      
                }
                if(cardCode.value != false){
                    cardCode.style.border = "1px solid var(--color-01)"
                }
            }
        }

        if(creditBox.style.display != "none"){
            const cardFullname = document.getElementById("card-name-credit")
            const cardNumber = document.getElementById("card-number-credit")
            const cardDate = document.getElementById("card-date-credit")
            const cardCode = document.getElementById("card-code-credit")

            if(cardFullname.value != false && cardNumber.value != false && cardDate.value != false && cardCode.value != false){
                document.getElementById("body-pay").style.display = "none"
                document.getElementById("payment").style.border = "2px solid green"
                document.getElementById("payment").style.color = "green"
                document.querySelector("#arrow-pay").setAttribute("src", "imgs/check.svg")
                document.getElementById("arrow-pay").style.transform = "rotate(0deg)"
                document.getElementById("p-item").innerHTML = "R$699,90"
                document.getElementById("p-payment").innerHTML = "credito"
                document.getElementById("p-total").innerHTML = "R$713,08"                                
            } else{

                // FULLNAME - Validação do Campo
                if(cardFullname.value != true){
                    cardFullname.style.border = "1px solid var(--alert-color)"      
                }
                if(cardFullname.value != false){
                    cardFullname.style.border = "1px solid var(--color-01)" 
                }
        
                // NUMBER - Validação do Campo    
                if(cardNumber.value != true){
                    cardNumber.style.border = "1px solid var(--alert-color)"      
                }
                if(cardNumber.value != false){
                    cardNumber.style.border = "1px solid var(--color-01)"   
                }
        
                // DATE - Validação do Campo 
                if(cardDate.value != true){
                    cardDate.style.border = "1px solid var(--alert-color)"      
                }
                if(cardDate.value != false){
                    cardDate.style.border = "1px solid var(--color-01)"   
                }
        
                // CODE - Validação do Campo 
                if(cardCode.value != true){
                    cardCode.style.border = "1px solid var(--alert-color)"      
                }
                if(cardCode.value != false){
                    cardCode.style.border = "1px solid var(--color-01)"
                }
            }
        }
}

function validation(){
   const pCEP = document.getElementById("p-cep").textContent
   const pPrice = document.getElementById("p-price").textContent
   const pItem = document.getElementById("p-item").textContent
   const pPayment = document.getElementById("p-payment").textContent
   const pTotal = document.getElementById("p-total").textContent
   if(pCEP != "---" && pPrice != "---" && pItem != "---" && pPayment != "---" && pTotal != "---"){
        open("../compraconcluida.html")
   }
}