function confirmar() {
    var numero = document.querySelector("input#numero").value
    var texto = document.querySelector("div#texto1")
    var selecao = document.querySelector("select#selecao")
    var tabuada = Number(numero)
    var passagem = 0
    var conta = 0

    if (numero == "") {
        window.alert("Favor Preencher o valor inicial !!!") }
    else {
        texto.innerHTML = `<strong>Tabuada do ${tabuada}</strong> <br>`
        selecao.innerHTML = ""
        for (passagem = 1; passagem <= 10; passagem++) {
            conta = tabuada * passagem
            let resolucao = document.createElement("option")   //  cria atributo
            resolucao.text = `${tabuada} x ${passagem} = ${conta}`    
            resolucao.value = `res${passagem}`         
            selecao.appendChild(resolucao)                       // coloca imagem na tela
        }
    }
}