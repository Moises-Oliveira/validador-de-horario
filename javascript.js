function momento(){
    console.log('entrou')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML= `Agora sao ${hora} horas`

    if(hora >= 0 && hora <= 12){
        console.log('Bom Dia')
        img.src = 'manha.jpg'  
        document.body.style.background = '#db9d16'
    
    }else if(hora > 12 && hora <= 18){
        console.log('Boa tarde')
        img.src = 'entardecer.jpg' 
        document.body.style.background = '#c56c07' 
    }else {
        console.log('Boa Noite')
        img.src = 'anoitecer.jpg'  
        document.body.style.background = '#13303d'
    }
}
