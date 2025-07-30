var agora = new Date();
var hora = agora.getHours();

if (hora < 12){
    console.log(`Agora são: ${hora} horas da manhã`);
}else if (hora <= 12 && hora < 18){
    console.log(`Agora são: ${hora} horas da tarde`);
}else {
    console.log(`Agora são: ${hora} horas da noite`);
}