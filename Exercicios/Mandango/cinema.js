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
                if (f == 0) {
                    switch (c) {
                        case 0:
                            cadeira11.src = "imagens/seat_unavail.png";
                            break;
                        case 1:
                            cadeira12.src = "imagens/seat_unavail.png";
                            break;
                        case 2:
                            cadeira13.src = "imagens/seat_unavail.png";
                            break;
                        case 3:
                            cadeira14.src = "imagens/seat_unavail.png";
                            break;
                        case 4:
                            cadeira15.src = "imagens/seat_unavail.png";
                            break;
                        case 5:
                            cadeira16.src = "imagens/seat_unavail.png";
                            break;
                    }
                }
                if (f == 1) {
                    switch (c) {
                        case 0:
                            cadeira21.src = "imagens/seat_unavail.png";
                            break;
                        case 1:
                            cadeira22.src = "imagens/seat_unavail.png";
                            break;
                        case 2:
                            cadeira23.src = "imagens/seat_unavail.png";
                            break;
                        case 3:
                            cadeira24.src = "imagens/seat_unavail.png";
                            break;
                        case 4:
                            cadeira25.src = "imagens/seat_unavail.png";
                            break;
                        case 5:
                            cadeira26.src = "imagens/seat_unavail.png";
                            break;
                    }
                }
                if (f == 2) {
                    switch (c) {
                        case 0:
                            cadeira31.src = "imagens/seat_unavail.png";
                            break;
                        case 1:
                            cadeira32.src = "imagens/seat_unavail.png";
                            break;
                        case 2:
                            cadeira33.src = "imagens/seat_unavail.png";
                            break;
                        case 3:
                            cadeira34.src = "imagens/seat_unavail.png";
                            break;
                        case 4:
                            cadeira35.src = "imagens/seat_unavail.png";
                            break;
                        case 5:
                            cadeira36.src = "imagens/seat_unavail.png";
                            break;
                    }
                }
                if (f == 3) {
                    switch (c) {
                        case 0:
                            cadeira41.src = "imagens/seat_unavail.png";
                            break;
                        case 1:
                            cadeira42.src = "imagens/seat_unavail.png";
                            break;
                        case 2:
                            cadeira43.src = "imagens/seat_unavail.png";
                            break;
                        case 3:
                            cadeira44.src = "imagens/seat_unavail.png";
                            break;
                        case 4:
                            cadeira45.src = "imagens/seat_unavail.png";
                            break;
                        case 5:
                            cadeira46.src = "imagens/seat_unavail.png";
                            break;
                    }
                }
                if (f == 4) {
                    switch (c) {
                        case 0:
                            cadeira51.src = "imagens/seat_unavail.png";
                            break;
                        case 1:
                            cadeira52.src = "imagens/seat_unavail.png";
                            break;
                        case 2:
                            cadeira53.src = "imagens/seat_unavail.png";
                            break;
                        case 3:
                            cadeira54.src = "imagens/seat_unavail.png";
                            break;
                        case 4:
                            cadeira55.src = "imagens/seat_unavail.png";
                            break;
                        case 5:
                            cadeira56.src = "imagens/seat_unavail.png";
                            break;
                    }
                }
            }    
        }
    }

}

function reserva(fila,coluna) {

}