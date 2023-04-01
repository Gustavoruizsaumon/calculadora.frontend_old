
function calcular(tipo, valor) {
    
    
       
    if (tipo === 'operador') {
       
        if (valor === '*' || valor === '/' || valor === '.' || valor === '+' || valor === '-') {
            document.getElementById('acumulador').value += valor;
        }
        if (valor === '=') {
            document.getElementById('acumulador').value = eval(document.getElementById('acumulador').value)
        }

    } else if (tipo === 'valor') {

        document.getElementById('acumulador').value += valor;//concatenar +=
    }
    if (valor === 'c') {

        document.getElementById('acumulador').value = '';//boton limpar
    }
    console.log(tipo);
    console.log(valor);
    console.log(document.getElementById('acumulador').value);



    
}


