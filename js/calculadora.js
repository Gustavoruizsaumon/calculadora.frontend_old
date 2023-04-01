
function calcular(tipo, valor) {

    if (tipo === 'operador') {
        if (valor === '*' || valor === '/' || valor === '.' || valor === '+' || valor === '-') {
            document.getElementById('acumulador').value += valor;
        }
        if (valor === '=') {
            const acumuladorValue = document.getElementById('acumulador').value;
            if (acumuladorValue) {
                document.getElementById('acumulador').value = eval(acumuladorValue);
                
            }
        }
    } else if (tipo === 'valor') {
        document.getElementById('acumulador').value += valor;
    }
    if (valor === 'c') {
        document.getElementById('acumulador').value = '';
    }
    console.log('Tipo', tipo);
    console.log('valor', valor);
    console.log('acumulador', document.getElementById('acumulador').value);
    
}

