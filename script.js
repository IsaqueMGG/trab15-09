let arrei = []
function calcular(){
    document.getElementById('res').innerHTML = "";
    const deslocamento = document.getElementById('deslocamento').nodeValue;
    const tempo = document.getElementById('tempo').value;
    let deslocamentoFloat = parseFloat(deslocamento);
    let tempoFloat = parseFloat(tempo);
    var velocidade;

    if (deslocamento && tempo) {
        velocidade = deslocamentoFloat / tempoFloat;
        arrei.push(velocidade);
        documento.getElementById('resb').value = velocidade;
    }

    for (let i in arrei){
        document.getElementById('res').innerHTML += arrei[i] + "<br>"
    }
}

function limpar(){
    const deslocamento = documento.getElementById
}
