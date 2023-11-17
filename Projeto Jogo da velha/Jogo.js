
var Tabela;
var P_O = "O";
var P_X = "X";
var P_atual = P_O;
var Derrota = false;

window.onload = function() {
    IniciarJogo();
}

function IniciarJogo() {
    Tabela = [
                [' ', ' ', ' '],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ]

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            let campo = document.createElement("div");
            campo.id = r.toString() + "-" + c.toString();
            campo.classList.add("campo");
            if (r == 0 || r == 1) {
                campo.classList.add("Linha");
            }
            if (c == 0 || c == 1) {
                campo.classList.add("Coluna");
            }
            campo.innerText = "";
            campo.addEventListener("click", setcampo);
            document.getElementById("Tabela").appendChild(campo);
        }
    }
}

function setcampo() {
    if (Derrota) {
        return;
    }

    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (Tabela[r][c] != ' ') { 
        return;
    }
    Tabela[r][c] = P_atual;
    this.innerText = P_atual;

    if (P_atual == P_O) {
        P_atual = P_X;
    }
    else {
        P_atual = P_O;
    }

    Ganhador();
}

function Ganhador() {
    for (let r = 0; r < 3; r++) {
        if (Tabela[r][0] == Tabela[r][1] && Tabela[r][1] == Tabela[r][2] && Tabela[r][0] != ' ') {
            for (let i = 0; i < 3; i++) {
                let campo = document.getElementById(r.toString() + "-" + i.toString());
                campo.classList.add("Ganhador");
            }
            Derrota = true;
            return;
        }
    }
    for (let c = 0; c < 3; c++) {
        if (Tabela[0][c] == Tabela[1][c] && Tabela[1][c] ==  Tabela[2][c] && Tabela[0][c] != ' ') {
            for (let i = 0; i < 3; i++) {
                let campo = document.getElementById(i.toString() + "-" + c.toString());                
                campo.classList.add("Ganhador");
            }
            Derrota = true;
            return;
        }
    }
    if (Tabela[0][0] == Tabela[1][1] && Tabela[1][1] == Tabela[2][2] && Tabela[0][0] != ' ') {
        for (let i = 0; i < 3; i++) {
            let campo = document.getElementById(i.toString() + "-" + i.toString());                
            campo.classList.add("Ganhador");
        }
        Derrota = true;
        return;
    }
    if (Tabela[0][2] == Tabela[1][1] && Tabela[1][1] == Tabela[2][0] && Tabela[0][2] != ' ') {
        let campo = document.getElementById("0-2");                
        campo.classList.add("Ganhador");
        campo = document.getElementById("1-1");                
        campo.classList.add("Ganhador");
        campo = document.getElementById("2-0");                
        campo.classList.add("Ganhador");
        Derrota = true;
    }
}