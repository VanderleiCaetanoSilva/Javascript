let num = [5,4,3]

//num[5] = 6
num.push(7)

console.log(num)
console.log(num.length)
console.log(num.sort())

let passagem = 0
for (passagem = 0; passagem < num.length; passagem++) {
    console.log(`A posição ${passagem} tem o valor ${num[passagem]}`)
}
console.log(num)
for (passagem in num) {
    console.log(`A posição ${passagem} tem o valor ${num[passagem]}`)
}

console.log(num.indexOf(4)) // busca a posição do valor 4 na array
console.log(num.indexOf(9)) // quando não tem retorna -1