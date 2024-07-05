function registerUser(){
    const name = document.getElementById("input-name")
    const email = document.getElementById("input-email")
    const password = document.getElementById("input-password")
    const confirm = document.getElementById("input-confirm")

    const alertName = document.getElementById("alert-name")
    const alertEmail = document.getElementById("alert-email")
    const alertPassword = document.getElementById("alert-password")
    const alertConfirm = document.getElementById("alert-confirm")

    // NAME - Validação do Campo
    if(name.value != true){
        name.style.border = "1px solid var(--alert-color)"
        alertName.innerHTML = "Campo vázio"       
    }
    if(name.value != false){
        name.style.border = "1px solid var(--color-01)"
        alertName.innerHTML = ""      
    }

    // E-MAIL - Validação do Campo    
    if(email.value != true){
        email.style.border = "1px solid var(--alert-color)"
        alertEmail.innerHTML = "Campo vázio"       
    }
    if(email.value != false){
        email.style.border = "1px solid var(--color-01)"
        alertEmail.innerHTML = ""      
    }

    // PASSWORD - Validação do Campo 
    if(password.value != true){
        password.style.border = "1px solid var(--alert-color)"
        alertPassword.innerHTML = "Campo vázio"       
    }
    if(password.value != false){
        password.style.border = "1px solid var(--color-01)"
        alertPassword.innerHTML = ""      
    }

    // CONFIRM PASSWORD - Validação do Campo 
    if(confirm.value != true){
        confirm.style.border = "1px solid var(--alert-color)"
        alertConfirm.innerHTML = "Campo vázio"       
    }
    if(confirm.value != false){
        confirm.style.border = "1px solid var(--color-01)"
        alertConfirm.innerHTML = ""      
    }
    
    // Validação para o minimo de carateres da senha
    if(password.value.length < 8 && password.value != false){
        password.style.border = "1px solid var(--alert-color)"
        alertPassword.innerHTML = "Use 8 caracteres ou mais para sua senha"
    }

    // Validação para confirmação de senha.
    if(confirm.value != password.value){
        confirm.style.border = "1px solid var(--alert-color)"
        alertConfirm.innerHTML = "As senhas não são iguais. Tente novamente."
    }
}