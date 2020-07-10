


function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.nodeValue.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique e tente novamente')
    } else {
        window.alert('tudo ok')
    }
}