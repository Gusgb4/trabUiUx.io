function Forgot(){

    const email = document.getElementById("e-mail")
    const alertEmail = document.getElementById("alert-email")
     
    // Validação do campo e-mail

    if(email.value != true){
        email.style.border = "1px solid var(--alert-color)"
        alertEmail.innerHTML = "Campo vazio"       
    }

    if(email.value != false){
        email.style.border = "1px solid var(--color-01)"
        alertEmail.innerHTML = ""      
    }
        // Validação do campo de e-mail divergente
   
    if(email.value != "teste@gmail.com" && email.value != false){
        email.style.border = "1px solid var(--alert-color)"
        alertEmail.innerHTML="E-mail Incorreto"
    
        // Mudança de pagina caso e-mail esteja correto
  
    }
    if(email.value == "teste@gmail.com" && email.value != false){
        email.style.border = "1px solid var(--alert-color)"
        window.location.href = "EmailReceive.html";
    }

}
