function clic() {
    var texto = document.getElementById('txt1')
    var bg = document.getElementById('descripcion1')

    if (texto.style.display == 'none'){
        texto.style.display = 'block'
        bg.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    } else {
        texto.style.display = 'none'
        bg.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
    }
}

function mostrar() {
    var bg = document.getElementById('descripcion2')
    var texto = document.getElementById('txt2')

    texto.style.display = 'block'
    bg.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
}

function ocultar() {
    var texto = document.getElementById('txt2')
    var bg = document.getElementById('descripcion2')

    texto.style.display = 'none'
    bg.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
}