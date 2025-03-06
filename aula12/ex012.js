var Agora = new Date()
var hora = Agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 2) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora <= 5) {
    console.log('Boa Madrugada!') 
}else {
    console.log('Boa noite!')
}