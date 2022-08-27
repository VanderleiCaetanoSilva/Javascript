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

function reserva(fila, coluna) {

    filaSel = fila -1;
    colunaSel = coluna -1;

    if (cadeiras[filaSel][colunaSel] == false) {
        var xx = 'img#cadeira'+fila+coluna;
        var str = 'imagens/seat_unavail.png';
        var indicador = (document.querySelector(`${xx}`).src).indexOf(str);
        if (indicador != -1) {
            alert("Assento Indisponivel, por favor selecione outro !!");
        } else {
            cadeiras[filaSel][colunaSel] = true;
            document.querySelector(`${xx}`).src = "imagens/seat_avail.png";
        }    
    } else {
        cadeiras[filaSel][colunaSel] = false;
        var xx = 'img#cadeira'+fila+coluna; 
        document.querySelector(`${xx}`).src = "imagens/seat_select.png";
    }    
}

function conclui() {
    for (var f = 0; f < 5; f++) {
        for (var c = 0; c < 6; c++) {
            if (cadeiras[f][c] == false) {
                var fi = f+1;
                var ci = c+1;
                var xx = 'img#cadeira'+fi+ci; 
                document.querySelector(`${xx}`).src = "imagens/seat_unavail.png";
            } else {
                var fi = f+1;
                var ci = c+1;
                var xx = 'img#cadeira'+fi+ci; 
                document.querySelector(`${xx}`).src = "imagens/seat_avail.png";
            }   
        }   
    }   
}