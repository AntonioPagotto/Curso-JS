


function verificar(){
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if(fano.nodeValue.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique e tente novamente')
    } else {
        window.alert('tudo ok')
    }
}