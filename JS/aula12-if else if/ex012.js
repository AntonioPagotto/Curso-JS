var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 6 && hora <= 12){
    console.log('bom dia brasil')
} else if (hora > 12 && hora < 18) {
    console.log('boa tarde itajuba')
} else {
    console.log('boa noite curitiba')
}