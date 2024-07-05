function searchCEP(){
    const cep = document.getElementById("cep").value
    const state = document.getElementById("state")
    const city = document.getElementById("city")
    const district = document.getElementById("district")
    const street = document.getElementById("street")

    switch(cep){
        case `89226320`:
            state.value = "Santa Catarina"
            city.value = "Joinville"
            district.value = "Aventureiro"
            street.value = "Valdemar Medeiros"
        break;
    }
}