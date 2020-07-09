




var valores = [3,32,56,631,46,432,4236,2]

// array.length é o comprimento do vetor
// let = var

//percurso pra exibicao de vetores
for(var pos = 0 ; pos < valores.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


//maneira mais simplificada de fazer:
//otimizado para vetores e objetos

// para cada posicao em 'pos' em 'valores' eu vou mostrar uma variavel composta
for(var pos in valores){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}