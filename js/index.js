function leiaMais() {
    var pontos = document.getElementById('pontos')

    var maisTexto = document.getElementById('mais')

    var btnLeiaMais = document.getElementById('btnLeiaMais')

    if (pontos.style.display === 'none') {

        pontos.style.display = 'inline'

        maisTexto.style.display = 'none'

        btnLeiaMais.innerHTML = "ver mais"

    } else {
        pontos.style.display = 'none'

        maisTexto.style.display = 'inline'

        btnLeiaMais.innerHTML = "ver menos"
    }

}



