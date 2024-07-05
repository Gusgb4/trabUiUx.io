const user = {
    userEmail: "visitante@email.com",
    userPassword: "senha1234"

}

function logInUser(user){
    const email = document.getElementById("input-email")
    const password = document.getElementById("input-password")

    const alertEmail = document.getElementById("alert-email")
    const alertPassword = document.getElementById("alert-password")

    // E-MAIL - Validação do Campo    
    if(!email.value){
        email.style.border = "1px solid var(--alert-color)"
        alertEmail.innerHTML = "Campo vázio."       
    }
    if(email.value){ 
        if(email.value != user.userEmail){
            email.style.border = "1px solid var(--alert-color)"
            alertEmail.innerHTML = "Usuario não encontrado. Digite um usúario valido."
            alert("foi")
        } 
        if(email.value == user.userEmail){
            email.style.border = "1px solid var(--color-01)"
            alertEmail.innerHTML = ""  
            if(password.value != user.userPassword){
                password.style.border = "1px solid var(--alert-color)"
                alertPassword.innerHTML = "Senha incorreta." 
            }
        }
    }
    
    // PASSWORD - Validação do Campo 
    if(!password.value){
        password.style.border = "1px solid var(--alert-color)"
        alertPassword.innerHTML = "Campo vázio"       
    }
    if(password.value){
        password.style.border = "1px solid var(--color-01)"
        alertPassword.innerHTML = ""      
    }

}

function rememberPassword(){
    alert(`email: ${user.userEmail}\nsenha: ${user.userPassword}`)
}