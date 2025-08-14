let num = [5,8,2,9,3]

console.log(num)
console.log(num.sort())
console.log(`O vetor possui ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

console.log("")

for(let pos in num){
    console.log(num[pos])
}

console.log("")

let pos = num.indexOf(2)
if(pos ==-1){
    console.log(`o valor não existe no vetor`)
}else{
    console.log(`o valor está na posição ${pos}`)
}
