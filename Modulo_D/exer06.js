/*Switch(expressão){
    case valor1:
         código a ser executado se expressão === valor1
        break;
    case valor2:
         código a ser executado se expressão === valor2
        break;
*/

var agora = new Date();
var DiaSemana = agora.getDay(); 

switch (DiaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
        break;
}