function somar(){
    const input_1 = parseFloat(document.getElementById("number1").value);
    const input_2 = parseFloat(document.getElementById("number2").value);
    let total = 0 ;
    if(isNumber(input_1) & (isNumber(input_2))){
        total = input_1 + input_2;
        document.getElementById("result-box").innerHTML = total;
    }   
}
function multiplicar(){
    const input_1 = parseFloat(document.getElementById("number1").value);
    const input_2 = parseFloat(document.getElementById("number2").value);
    let total = 0 ;
    if(isNumber(input_1) & (isNumber(input_2))){
        total = input_1 * input_2;
        document.getElementById("result-box").innerHTML = total;
    }   
}

function limparCampos(){
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("result-box").innerHTML = "0"
}

function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);   
}


