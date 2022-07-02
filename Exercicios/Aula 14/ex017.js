function confirmar() {
    var inicio = Number(document.querySelector("input#inicio").value)
    var fim = Number(document.querySelector("input#fim").value)
    var passo = Number(document.querySelector("input#passo").value)
    var texto = document.querySelector("div#texto1")

    var passagem = 0

    if (inicio == 0) {
        window.alert("Favor Preencher o valor inicial !!!") }
    else {
        if (fim == 0) {
            window.alert("Favor Preencher o valor Final !!!")
        }
        else {
            if (inicio >= fim) {
                window.alert("Valor Inicial deve ser menor que o Valor Final !!!")
            }
            else {
                if (passo == 0) {
                    window.alert("Passo não pode ser igual a 0 !!!")
                }
                else {   
                    texto.innerHTML = "&#x1F3C1" 
                    for (passagem = inicio; passagem <= fim; passagem += passo) {
                        texto.innerHTML += `&nbsp <strong>${passagem}</strong> &nbsp &#x1F386`
                    }
                    texto.innerHTML += "&#x1F3C1"
                }    
            }
        }
    }
          
}