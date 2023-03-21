function adicionar(){
    let num = document.getElementById('num')
    let select = document.getElementById('sel')

    if (num.value.length == 0){
        alert('Você precisar inserir algum valor no Campo!')
    }else{
        let n = Number(num.value)
        let item =  document.createElement('option')
        item.text += `O valor ${n} foi Adicionado!`
        select.appendChild(item)
    }
}