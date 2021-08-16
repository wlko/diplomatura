function clic() {
    var texto = document.getElementById('txt1')
    if (texto.style.display == 'none'){
        texto.style.display = 'block'
    } else {
        texto.style.display = 'none'
    }
}

function mostrar() {
    var texto = document.getElementById('txt2')
    texto.style.display = 'block'
}

function ocultar() {
    var texto = document.getElementById('txt2')
    texto.style.display = 'none'
}