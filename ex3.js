// задание 3

const getSum = function(number1) {
    return function(number2) {
        return number1 + number2
    }
}

const x = 10
const y = 7

console.log(getSum(x)(y))