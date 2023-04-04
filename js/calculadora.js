
function calcular(tipo, valor) {

    if (tipo === 'operador') {
        if (valor === '*' || valor === '/' || valor === '.' || valor === '+' || valor === '-') {
            document.getElementById('acumulador').value += valor;
        }
        if (valor === '=') {
            const acumuladorValue = document.getElementById('acumulador').value;
            console.log("acumuladorValue " + acumuladorValue);
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

    if(valor === 'backSpace'){
        const num = document.getElementById('acumulador').value.slice(0, -1);
        document.getElementById('acumulador').value = num;
    }

    console.log('Tipo', tipo);
    console.log('valor', valor);
    console.log('acumulador', document.getElementById('acumulador').value);
    
}
