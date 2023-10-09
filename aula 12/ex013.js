
var agora = new Date () //horario automatico
var hora = agora.getHours()//horario automatico
console.log(`Agora são exatamente ${hora} Horas`)
if(hora < 12){
    console.log('bom dia!')
}else if  (hora <=18) {         //else if é a opção 
    console.log('Boa tarde!')
} else{                         
    console.log('boa noite')
}