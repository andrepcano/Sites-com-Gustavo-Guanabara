function carregar(){
    let msg = window.document.getElementById("msg")
    let img = window.document.getElementById("img")
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12){
        //Bom dia!
        img.src = "src/assets/fotomanha.jpg"
        document.body.style.background = "yellow"
    }
    else if (hora > 12 && hora <= 18){
        //Boa tarde!
        img.src = "src/assets/fototarde.jpg"
        document.body.style.background = "brown"
    }
    else {
        //Boa noite!
        img.src = "src/assets/fotonoite.jpg"
        document.body.style.background = "black"
    }
}