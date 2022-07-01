function confirmar() {
    var data = new Date()
    var hoje = data.getFullYear()
    
    var ano_nasc = document.querySelector("input#ano")
    var texto = document.querySelector("div#texto1")
    var imagem = document.querySelector("img#imagem")
    var fundo = document.querySelector("body#fundo")
    var sexo = document.getElementsByName("sexo") 

    if (ano_nasc.value == 0 || ano_nasc.value > hoje) {
        window.alert("Favor Preencher os dados !!!") }
    else { 
        var genero = ""
        var idade = Number(hoje) - Number(ano_nasc.value)

        if (sexo[0].checked) {
           genero = 'homem'
        }    
        else {
           genero = 'mulher' 
        }

        switch (genero) {
            case 'homem':
                if (idade < 18) {
                // Criança homem
                    texto.innerHTML = `Detectamos um <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
                    fundo.style.background = "rgb(61, 109, 170)"
                    imagem.src = "imagens/manha.jpg"
                } else if (idade < 60) { 
                       // adulto homem
                           texto.innerHTML = `Detectamos um <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
                           fundo.style.background = "rgb(61, 109, 170)"
                           imagem.src = "imagens/dia.jpg"
                       }     
                       else {
                        // idoso homem
                           texto.innerHTML = `Detectamos um <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
                           fundo.style.background = "rgb(61, 109, 170)"
                           imagem.src = "imagens/noite.jpg"
                       }
            break
            case 'mulher':
                if (idade < 18) {
                // Criança mulher
                    texto.innerHTML = `Detectamos uma <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
                    fundo.style.background = "rgb(226, 163, 231)"
                    imagem.src = "imagens/manha.jpg"
                } else if (idade < 60) { 
                       // adulto mulher
                           texto.innerHTML = `Detectamos uma <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
                           fundo.style.background = "rgb(226, 163, 231)"
                           imagem.src = "imagens/dia.jpg"
                       }     
                       else {
                         // idoso mulher
                           texto.innerHTML = `Detectamos uma <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
                           fundo.style.background = "rgb(226, 163, 231)"
                           imagem.src = "imagens/noite.jpg"
                       }
            break                
        }
    }
}