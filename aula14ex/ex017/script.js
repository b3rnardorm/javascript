function verificar(){
    var num = document.getElementById('txtnum')
    var res = document.getElementById('res')

    if (num.value.length == 0){
        res.innerHTML = '[ERRO] Insira um numero no campo indicado!'
    }else{
        res.innerHTML = ''
        valor = Number(num.value)
        for (c = 1; c <= 10; c++){
            mult = valor * c
            res.innerHTML += `${valor} * ${c} = ${mult} <br>`
        }
    }
}