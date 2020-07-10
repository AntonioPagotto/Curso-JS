


function resultado() {

    var initial = document.getElementById('inicio')
    var step = document.getElementById('passo')
    var end = document.getElementById('fim')
    var res = document.getElementById('res')



    // for (inicio, fim, passo)
    if (initial.value.length == 0 || step.value.length == 0 || end.value.length == 0) {
        window.alert('[ERRO] Faltam dados.')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(initial.value)
        var f = Number(end.value)
        var p = Number(step.value)

        if (i < f) {
            //contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem decrescente
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}