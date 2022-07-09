function cumprimento () {
    var username = prompt("Qual seu nome ?","Digite seu nome aqui");

    if (username) {
        alert("Prazer em conhecer você " + username + " !!");
        document.querySelector("img#rockimg").src = "imagens/rock_happy.png";
    }
    else {
        alert("Digite seu nome !!");
    }
}