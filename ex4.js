// задание 4

const numbers = function(num1, num2) {
    let num = num1
    console.log(num1)
    let interval = setInterval(function(){
        if(num < num2) {
            num++
            console.log(num)
        } else if (num === num2) {
            clearInterval(interval)
        } 
    }, 1000)
}

numbers(1, 15)