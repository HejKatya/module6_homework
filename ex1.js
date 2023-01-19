// задание 1

let arr = [1, 2, 3, 4, 76, 83, 100, 'hello', null, [1, 2, 3], 0]

let even = 0
let odd = 0
let zero = 0

function countElements() {
    arr.forEach(function (item, index, array) {
        if (typeof item === 'number') {
            if (item === 0) {
                zero++
            } else if (item % 2 !== 0) {
                odd++
            } else if (item % 2 === 0) {
                even++
            }
        }
    })

    console.log(`In this array there are ${even} even number, ${odd} odd numbers and ${zero} zero`)
}

countElements();

