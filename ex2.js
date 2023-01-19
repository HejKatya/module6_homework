// задание 2

const isPrime = function(number) {
    let result = `Число ${number} является простым числом`
    if (number > 1000 || number < 0) {
        result = 'Данные не верны'
    } else if (number === 1) {
        result = 'Число 1 не является ни простым, ни составным числом'
    } else if (number === 0) {
        result = 'Число 0 не является ни простым, ни составным числом'
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                result = `Число ${number} является составным числом`
                break
            }
        }
    }
    return result
}

console.log(isPrime(79))