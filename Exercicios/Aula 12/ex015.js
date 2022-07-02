function confirmar() {
    var data = new Date()
    var hoje = data.getFullYear()
    
    var ano_nasc = document.querySelector("input#ano")
    var texto = document.querySelector("div#texto1")
    var imagem = document.querySelector("img#imagem")
    var fundo = document.querySelector("body#fundo")
    var sexo = document.getElementsByName("sexo") 

//    var img = document.createElement("img")   //  cria atributo
//    img.setAttribute("id","imagem")           //  seta id pro atributo 

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
                texto.innerHTML = `Detectamos um <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
                fundo.style.background = "rgb(61, 109, 170)"

                if (idade < 18) {
                //    Criança homem
                //    imagem.setAttribute("src","imagens/menino.png")
                    imagem.src = "imagens/menino.png"
                } else if (idade < 60) { 
                       // adulto homem
                       //    imagem.setAttribute("src","imagens/rapaz.png")
                       imagem.src = "imagens/rapaz.png"
                       }     
                       else {
                           // idoso homem
                           // imagem.setAttribute("src","imagens/senhor.png")
                           imagem.src = "imagens/senhor.png"
                       }
            break
            case 'mulher':
                texto.innerHTML = `Detectamos uma <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
                fundo.style.background = "rgb(226, 163, 231)"

                if (idade < 18) {
                    // Criança mulher
                    // imagem.setAttribute("src","imagens/menina.png")
                    imagem.src = "imagens/menina.png"
                } else if (idade < 60) { 
                       // adulto mulher
                       // imagem.setAttribute("src","imagens/adulta.png")
                       imagem.src = "imagens/adulta.png"
                       }     
                       else {
                           // idoso mulher
                           // imagem.setAttribute("src","imagens/senhora.png")
                           imagem.src = "imagens/senhora.png"
                       }
            break                
        }
//        texto.appendChild(imagem)   // coloca imagem na tela
    }
}