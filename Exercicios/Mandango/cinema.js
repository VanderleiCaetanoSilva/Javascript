let cadeiras = [
    [true, true, true, true, true, true], 
    [true, true, true, true, true, true], 
    [true, true, true, true, true, true], 
    [true, true, true, true, true, true], 
    [true, true, true, true, true, true], 
];

function randomiza() {
    for (var f = 0; f < 5; f++) {
        for (var c = 0; c < 6; c++) {
            sit = Math.floor(Math.random() * 2);
            if (sit == 0) {
                cadeiras[f][c] = false;
            }    
            else {
                cadeiras[f][c] = true;    
            }
        }
    }
    for (var f = 0; f < 5; f++) {
        for (var c = 0; c < 6; c++) {
            if (cadeiras[f][c] == false) {
                var fi = f+1;
                var ci = c+1;
                var xx = 'img#cadeira'+fi+ci; 
                document.querySelector(`${xx}`).src = "imagens/seat_unavail.png";
            }    
        }   
    }
}

function reserva() {
    let fila = document.getElementsByName("fila");
    let coluna = document.getElementsByName("coluna");

    for(i = 0; i < fila.length; i++) {
        if(fila[i].checked)
            filaSel = fila[i].value;
    }
    for(i = 0; i < coluna.length; i++) {
        if(coluna[i].checked)
            colunaSel = coluna[i].value;
    }

    if (cadeiras[filaSel-1][colunaSel-1] == false) {
        alert("Assento Indisponivel, por favor selecione outro !!")
    } else {
        cadeiras[filaSel-1][colunaSel-1] = false;
        var xx = 'img#cadeira'+filaSel+colunaSel; 
        document.querySelector(`${xx}`).src = "imagens/seat_select.png";
    }
}