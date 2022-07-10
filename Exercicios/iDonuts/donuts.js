function verificaNome() {
    let nome = document.querySelector("input#nome").value;
    if (nome == "") {
        alert("Por Favor preencha o nome !!");
    }
}
function calculaPedido() {

    const TAXA = 10;
    const PRECOUNITARIO = 5;

    let qtdDonutSemConfeito = Number(document.querySelector("input#donutSemConfeito").value);
    let qtdDonutComConfeito = Number(document.querySelector("input#donutComConfeito").value);
    
    let subTotal = (qtdDonutComConfeito + qtdDonutSemConfeito) * PRECOUNITARIO;
    let vlrTaxa = subTotal * (TAXA/100);
    let vlrTotal = subTotal + vlrTaxa; 

    let textoSub = document.querySelector("div#subtotal")
    let textoTax = document.querySelector("div#taxa")
    let textoTot = document.querySelector("div#total")
    let textoHdr = document.querySelector("h2#txthdr")

    textoHdr.innerHTML = `Todos os Donuts a ${PRECOUNITARIO} reais cada confeitados ou não !!`  
    textoSub.innerHTML = `Subtotal: R$ ${subTotal}`;
    textoTax.innerHTML = `Taxa: R$ ${vlrTaxa}`;
    textoTot.innerHTML = `Total: R$ ${vlrTotal}`;
}
function colocarPedido() {
    let nome = document.querySelector("input#nome").value;
    let tempo = document.querySelector("input#tempoRetirada").value;
    let textoSub = document.querySelector("div#subtotal")
    let textoTax = document.querySelector("div#taxa")
    let textoTot = document.querySelector("div#total")

    alert(`Sr(a) ${nome}, seu pedido foi incluido e podera ser retirado em ${tempo} minutos !!`);

    document.querySelector("input#nome").value = "";
    document.querySelector("input#tempoRetirada").value = "";
    document.querySelector("input#donutSemConfeito").value = "";
    document.querySelector("input#donutComConfeito").value = "";
    textoSub.innerHTML = `Subtotal: R$ 0`;
    textoTax.innerHTML = `Taxa: R$ 0`;
    textoTot.innerHTML = `Total: R$ 0`;

}

