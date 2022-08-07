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

    textoHdr.innerHTML = `Todos os Donuts a ${PRECOUNITARIO.toFixed(2)} reais cada confeitados ou não !!`  
    textoSub.innerHTML = `Subtotal: R$ ${subTotal.toFixed(2)}`;
    textoTax.innerHTML = `Taxa: R$ ${vlrTaxa.toFixed(2)}`;
    textoTot.innerHTML = `Total: R$ ${vlrTotal.toFixed(2)}`;
}
function colocarPedido() {
    let nome = document.querySelector("input#nome").value;
    let tempo = document.querySelector("input#tempoRetirada").value;
    let textoSub = document.querySelector("div#subtotal")
    let textoTax = document.querySelector("div#taxa")
    let textoTot = document.querySelector("div#total")

    alert(`Sr(a) ${nome}, seu pedido foi incluido e podera ser retirado em ${tempo} minutos !!`);

    document.querySelector("input#nome").value = null;
    document.querySelector("input#tempoRetirada").value = null;
    document.querySelector("input#donutSemConfeito").value = 0.00;
    document.querySelector("input#donutComConfeito").value = 0.00;
    textoSub.innerHTML = `Subtotal: R$ 0.00`;
    textoTax.innerHTML = `Taxa: R$ 0.00`;
    textoTot.innerHTML = `Total: R$ 0.00`;

}

