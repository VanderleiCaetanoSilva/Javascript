var hora = new Date().getHours()
        var texto = window.document.querySelector("div#texto")
        var imagem = window.document.querySelector("img#imagem")

        texto.innerHTML = `Agora são <strong>${hora}</strong> horas`
        
        if (hora < 12) {
           fundo.style.background = "rgb(217, 175, 117)"
           imagem.src = "imagens/manha.jpg"
        } else if (hora < 18) { 
                  fundo.style.background = "rgb(143, 98, 35)"
                  imagem.src = "imagens/dia.jpg"
               }     
               else {
                  fundo.style.background = "rgb(76, 49, 11)"
                  imagem.src = "imagens/noite.jpg"
               }
