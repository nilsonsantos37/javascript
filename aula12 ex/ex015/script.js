function verificar() {
   var data= new Date();
   var ano = data.getFullYear();
   var fano = document.getElementById('txtano');
   var  res = document.querySelector('div#res');
   if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebê-menino.png');
                // Criança
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-homem.png');
                // Jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-homem.png');
                // Adulto
            } else {
                img.setAttribute('src', 'idoso.png');
                // Idoso
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebê-menina.png');
                // Criança
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-mulher.png');
                // Jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-mulher.png');
                // Adulto
            } else {
                img.setAttribute('src', 'idoso-mulher.png');
                // Idoso
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`;
        res.appendChild(img);
        
}
}