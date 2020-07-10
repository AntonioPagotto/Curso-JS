

function carregar(){

    var horadia = document.querySelector('h1#horadia')
    var refeicao = document.querySelector('span#ref')
    var img = document.getElementById('imagem')

    var data = new Date()
    var horas = data.getHours()
    horadia.innerHTML = `Agora são ${horas} horas.`

    if(horas >= 6 && horas <= 11) {
        //cafe da manha
        refeicao.innerHTML = `Café da Manhã`
        img.src = '../uploads/cafemanha.jpg'
        document.body.style.background = 'rgb(57, 102, 145)'
    } else if (horas > 11 && horas < 16) {
        refeicao.innerHTML = `Almoço`
        img.src = '../uploads/almoco.jpg'
        document.body.style.background = 'rgb(138, 52, 119)'
    } else {
        refeicao.innerHTML = `Jantar`
        img.src = '../uploads/jantar.jpg'
        document.body.style.background = 'rgb(138, 108, 52)'
    }

}