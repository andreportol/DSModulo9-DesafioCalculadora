    var input_1 = document.getElementById("number1");
    input_1.addEventListener('keyup', isNumber);
   
    
    var input_2 = document.getElementById('number2');
    input_2.addEventListener('keyup', isNumber);
    
    var ultimoValorDigitado = 0;

function somar() {
    input_1 = parseFloat(document.getElementById("number1").value);
    input_2 = parseFloat(document.getElementById("number2").value);
    total = 0;
    total = input_1 + input_2;
    document.getElementById("result-box").innerHTML = total;
}

function multiplicar() {
    input_1 = parseFloat(document.getElementById("number1").value);
    input_2 = parseFloat(document.getElementById("number2").value);
    total = 0;
    total = input_1 * input_2;
    document.getElementById("result-box").innerHTML = total;
}

function limparCampos() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("result-box").innerHTML = "0";
}

function isNumber(event) {
    let name = event.target.id; // retorna o "id" da tag que acionou o evento
    let valorDigitado = event.target.value;
    // teste realizado para não deixar o valor do input_1 ser copiado para o input_2
    if(event.target.value != ''){ 
        if(!isNaN(parseFloat(valorDigitado)) && isFinite(valorDigitado)){
            document.getElementById(name).value = valorDigitado;
            ultimoValorDigitado = valorDigitado;  
        }else{
            document.getElementById(name).value = ultimoValorDigitado;
        }
    }
    
}