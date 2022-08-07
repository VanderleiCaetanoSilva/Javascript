function mudacena(decisao) {
    let mensagem = document.querySelector("p#mensagem");
    let imagem = document.querySelector("img#cena");
    let decisao1 = document.querySelector("input#decisao1");
    let decisao2 = document.querySelector("input#decisao2");    

    if (decisao1.value == "Iniciar") {
        mensagem.innerHTML = "Sua jornada começa em uma bifurcação na estrada. <br> Selecione um dos lados.";
        imagem.src = "imagens/scene1.png";
        decisao1.value = "esquerda";
        decisao2.value = "direita";
        cenaatual = 1;
    }
    else {
        if (cenaatual == 1 & decisao == 1) {
            mensagem.innerHTML = "Chegamos a casinha da floresta. <br> O que fazemos ?";
            imagem.src = "imagens/scene2.png";
            decisao1.value = "desviar";
            decisao2.value = "bater";
            cenaatual = 2;  
        }
        else { 
            if (cenaatual == 1 & decisao == 2) {
                mensagem.innerHTML = "Chegamos a ponte com vista para o rio. <br> O que fazemos ?";
                imagem.src = "imagens/scene3.png";
                decisao1.value = "atravessar a ponte";
                decisao2.value = "contemplar o rio";
                cenaatual = 3;  
            }
            else {
                if (cenaatual == 2 & decisao == 1) {
                    mensagem.innerHTML = "A Bruxa esta na janela. <br> O que fazemos ?";
                    imagem.src = "imagens/scene4.png";
                    decisao1.value = "esguerar-se";
                    decisao2.value = "acenar";
                    cenaatual = 4;  
                }
                else {
                    if (cenaatual == 2 & decisao == 2) {
                        mensagem.innerHTML = "Você foi comido pela Bruxa !!!!";
                        imagem.src = "imagens/scene5.png";
                        decisao1.value = "Fim";
                        decisao2.value = "Fim";
                        cenaatual = 5;
                    }
                    else {
                        if (cenaatual == 3 & decisao == 1) {
                            mensagem.innerHTML = "Você foi comido por um Ogro !!!!";
                            imagem.src = "imagens/scene6.png";
                            decisao1.value = "Fim";
                            decisao2.value = "Fim";
                            cenaatual = 6;
                        }
                        else {
                            if (cenaatual == 3 & decisao == 2) {
                                mensagem.innerHTML = "Tem um Ogro na ponte !!!  <br> O que fazemos ?";
                                imagem.src = "imagens/scene7.png";
                                decisao1.value = "Dizer olá para o Ogro";
                                decisao2.value = "Pular no rio";
                                cenaatual = 7;
                            }
                            else {
                                if (cenaatual == 4 & decisao == 1) {
                                    mensagem.innerHTML = "Continua !!!  <br> O que fazemos ?";
                                    imagem.src = "imagens/scene8.png";
                                    decisao1.value = "?";
                                    decisao2.value = "?";
                                    cenaatual = 8;
                                }
                                else {
                                    if (cenaatual == 4 & decisao == 2) {
                                        mensagem.innerHTML = "Você foi comido pela Bruxa !!!!";
                                        imagem.src = "imagens/scene5.png";
                                        decisao1.value = "Fim";
                                        decisao2.value = "Fim";
                                        cenaatual = 5;
                                    }
                                    else {
                                        if (cenaatual == 5 || cenaatual == 6) {
                                            mensagem.innerHTML = "Quem sabe da proxima vez <br> Com mais sorte !!!!";
                                            imagem.src = "imagens/scene0.png";
                                            decisao1.value = "Iniciar";
                                            decisao2.value = "Iniciar";
                                            cenaatual = 0;
                                        }
                                        else {
                                            if (cenaatual == 7 & decisao == 1) {
                                                mensagem.innerHTML = "Você foi comido por um Ogro !!!!";
                                                imagem.src = "imagens/scene6.png";
                                                decisao1.value = "Fim";
                                                decisao2.value = "Fim";
                                                cenaatual = 6;
                                            }
                                            else {
                                                if (cenaatual == 7 & decisao == 2) {
                                                    mensagem.innerHTML = "Continua !!!!";
                                                    imagem.src = "imagens/scene9.png";
                                                    decisao1.value = "?";
                                                    decisao2.value = "?";
                                                    cenaatual = 9;
                                                }    
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }      
                }
            }
        }
    }    
}