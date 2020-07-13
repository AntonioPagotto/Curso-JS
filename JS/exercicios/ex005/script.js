

function tabuada(){
    
    var numero = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(numero.value.length == 0) {

        window.alert('[ERRO] Digite um numero!')
        
    } else {
        var n = Number(numero.value)
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.innerText = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }




}