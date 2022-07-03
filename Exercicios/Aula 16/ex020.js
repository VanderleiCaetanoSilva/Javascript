function parimp(n) {
    res = n % 2
    if (res == 0) {
        return "Par"
    }
    else {
        return "Impar"
    }        
}

function soma(n1=0, n2=0) {
    res = n1 + n2
    return res
}

function fatorial(x) {
    let res = 1
    for (c = x;c > 1; c--) {
        res *= c 
    }
    return res
}

function fatorial_recursivo(x) {
    if (x == 1) {
        return 1
    }
    else {
        return x * fatorial_recursivo(x - 1)
    }
}

let resultado = parimp(4)
console.log(`O resultado é ${resultado}`)

let x = soma(2,7)
console.log(`O resultado é ${x}`)

let y = fatorial(5)
console.log(`O resultado é ${y}`)

let k = fatorial_recursivo(6)
console.log(`O resultado é ${k}`)