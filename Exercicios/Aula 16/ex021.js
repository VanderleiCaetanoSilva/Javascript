var texto = document.querySelector("div#texto1")
var lista = []

function incluir() {
    let numero = window.document.querySelector("input#numero")
    let selecao = document.querySelector("select#selecao")
 
    if (numero.value == "") {
        window.alert("Favor Preencher com números !!!") 
    }
    else {
         if (numero.value < 1 || numero.value > 100) {
            window.alert("Número deve estar entre 1 e 100 !!!")
        }
        else {
            if (duplicidade(numero.value) == true) {
                window.alert("Número já foi incluido, esta em duplicidade !!!")         
            }
            else {
                lista.push(numero.value)
                let resolucao = document.createElement("option")  // cria atributo
                resolucao.text = `Valor ${numero.value} adicionado`    
                resolucao.value = `res${lista.length}`
                selecao.appendChild(resolucao)                    // coloca imagem na tela
            }
        }
    }
    texto.innerHTML = ""
    numero.value = ""
    numero.focus()
}

function analisar() {
    if (lista.length == 0) {
        window.alert("Favor Preencher com números !!!") 
    }
    else {
        lista.sort()

        texto.innerHTML = `Ao todo temos <strong>${lista.length}</strong> números na lista. </br>`
        texto.innerHTML += `O <strong>maior</strong> valor informado foi <strong>${lista[Number(lista.length-1)]}</strong> </br>`
        texto.innerHTML += `O <strong>menor</strong> valor informado foi <strong>${lista[0]}</strong> </br>`
        let res = 0
        for (let c in lista) {
            res += Number(lista[c]) 
        }
        texto.innerHTML += `A <strong>soma</strong> dos valores é <strong>${res}</strong> </br>`
        texto.innerHTML += `A <strong>média</strong> dos valores é <strong>${res/Number(lista.length)}</strong> </br>`
    }
}

function duplicidade(n) {
    if (lista.indexOf(n) == -1) {
        return false
    }
    else {
        return true
    } 
}