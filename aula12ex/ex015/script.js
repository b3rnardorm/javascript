function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'Imagens/foto-bebe-m.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'Imagens/foto-jovem-m.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'Imagens/foto-adulto-m.png')
            }else{
                //Idoso
                img.setAttribute('src', 'Imagens/foto-idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'Imagens/foto-bebe-f.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'Imagens/foto-jovem-f.png')
            }else if (idade < 50){
                //Adulta
                img.setAttribute('src', 'Imagens/foto-adulto-f.png')
            }else{
                //Idosa
                img.setAttribute('src', 'Imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}