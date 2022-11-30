function somar(){
    let input_1 = parseFloat(document.getElementById("number1").value);
    let input_2 = parseFloat(document.getElementById("number2").value);
    let total = 0 ;
    if(isNumber(input_1) & (isNumber(input_2))){
        total = input_1 + input_2;
        document.getElementById("result-box").innerHTML = total;
        input_1 = document.getElementById("number1").classList.remove('input-error');
        input_2 = document.getElementById("number2").classList.remove('input-error');

    } else if(!isNumber(input_1)){
        let input_1 = document.getElementById("number1").classList.add('input-error');
        document.getElementById("result-box").innerHTML = "0";
        if(!isNumber(input_2)) {
            let input_2 = document.getElementById("number2").classList.add('input-error');
            document.getElementById("result-box").innerHTML = "0";
        }         
    }
    else if(!isNumber(input_2)){
        let input_2 = document.getElementById("number2").classList.add('input-error');
        document.getElementById("result-box").innerHTML = "0";      
    }
}
function multiplicar(){
    let input_1 = parseFloat(document.getElementById("number1").value);
    let input_2 = parseFloat(document.getElementById("number2").value);
    let total = 0 ;
    if(isNumber(input_1) & (isNumber(input_2))){
        total = input_1 * input_2;
        document.getElementById("result-box").innerHTML = total;
        input_1 = document.getElementById("number1").classList.remove('input-error');
        input_2 = document.getElementById("number2").classList.remove('input-error');

    } else if(!isNumber(input_1)){
        let input_1 = document.getElementById("number1").classList.add('input-error');
        document.getElementById("result-box").innerHTML = "0";
        if(!isNumber(input_2)) {
            let input_2 = document.getElementById("number2").classList.add('input-error');
            document.getElementById("result-box").innerHTML = "0";
        }         
    }
    else if(!isNumber(input_2)){
        let input_2 = document.getElementById("number2").classList.add('input-error');
        document.getElementById("result-box").innerHTML = "0";
        if(isNumber(input_1)){
            input_1 = document.getElementById("number1").classList.remove('input-error');
        }      
    } 
}

function limparCampos(){
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("result-box").innerHTML = "0";
    input_1 = document.getElementById("number1").classList.remove('input-error');
    input_2 = document.getElementById("number2").classList.remove('input-error');

}

function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);   
}




