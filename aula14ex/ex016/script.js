function verificar(){
    var valor1 = document.getElementById('valor1')
    var valor2 = document.getElementById('valor2')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (valor1.value.length == 0 || valor2.value.length == 0){
        alert('Faltam Dados')
        res.innerHTML = 'Impossivel contar!'
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(valor1.value)
        var f = Number(valor2.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo Inválido! considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //contagem crescente
            for(c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else{
            //contagem regressiva
            for ( c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` 
    }
}