function calcular(tipo, valor) {
    if (tipo === 'operador') {
        if (valor === 'c') {

            document.getElementById('pantalla').value = ''//boton limpar
        }
        if (valor === '*' || valor === '/' || valor === '.' || valor === '+' || valor === '-') {
            document.getElementById('pantalla').value += valor
        }
        if (valor === '=') {
            document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value)
        }

    } else if (tipo === 'valor') {

        document.getElementById('pantalla').value += valor//concatenar a equação no visor
    }
}
