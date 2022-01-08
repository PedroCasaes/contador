function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var resultado = document.getElementById('resultado')
    var teste = []

    if(inicio.value == 0){
        alert('O campo "Início" está vazio')
    }else{
        resultado.innerHTML = 'Contando: <br>'
    }
    if(fim.value == 0){
        alert('O campo "Fim" está vazío')
    }else{
        resultado.innerHTML = 'Contando: <br>'
    }
    if(passo.value == 0){
        alert('O campo "Passo" está vazío')
    }else{
        resultado.innerHTML = 'Contando: <br>'
    }

    if(Number(inicio.value) < Number(fim.value)){
        //Contagem Crescente
        for(total = Number(inicio.value); total <= Number(fim.value); total = total + Number(passo.value)){
            resultado.innerHTML += `${total} \u{1F911}`
        }
    }else {
        //Contagem Decresciva
        for(total = Number(inicio.value); total >= Number(fim.value); total -= Number(passo.value)){
            resultado.innerHTML += `${total} \u{1F911}`
        }
    }
    resultado.innerHTML += `\u{1F3C1}`


}