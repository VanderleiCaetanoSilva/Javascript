function cumprimento() {
    if (navigator.cookieEnabled) {
        username = readCookie("irock_username");
    }    
    if (username) {
        alert("Olá " + username + " senti sua falta !!");
    }
    else {
        alert('Olá, eu sou sua pet rock.');
    }
}

function clicar() {
    if (username) {
        alert("Eu gosto de atenção " + username + ". Obrigada !!")
    }
    else {
        username = prompt("Qual é o seu nome ?", "Digite o seu nome aqui.");
        if (username) {
            alert("Que bom conhecer você, " + username + ".");
            if (navigator.cookieEnabled) {
                writeCookie("irock_username", username, 5 * 365);
            }
            else {
                alert("Lamento, o navegador não suporta cookie. Eu não vou me lembrar de você !!!");
            }
        }
    }
    document.querySelector("img#rockimg").src = "imagens/rock_happy.png";
    setTimeout("document.querySelector('img#rockimg').src = 'imagens/rock.png';", 5 * 60 * 1000);
}

function redimensiona() {
    document.querySelector("img#rockimg").style.height = (document.body.clientHeight - 100) * 0.9;
    
}