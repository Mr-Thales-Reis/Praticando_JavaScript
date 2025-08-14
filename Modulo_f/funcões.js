function somar(num01 = 0, num02 = 0){
    return num01 + num02;
}

console.log(somar(10, 5))


let num = function imparPar(numero){
    if(numero % 2 == 0){
        return "Par!"
    }else{
        return "Impar!"
    }
}

let res = num(2)

console.log(res)

if(res === "Par!"){
    console.log("OK!")
}else{
    console.log("Deu ruim")
}

