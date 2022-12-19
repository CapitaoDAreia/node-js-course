function sum(a, b){
    return a+b
}

function subtraction(a, b){
    if(a > b) return a-b
    if(b > a) return b-a
    if(a === b) return 0
}

module.exports = {
    sum,
    subtraction
}


