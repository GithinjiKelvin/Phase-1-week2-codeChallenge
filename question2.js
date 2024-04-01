// two variables to hold our numbers
const firstNumber = prompt("Enter the First Number")
const secondNumber = prompt("Enter the second Number")

function numberGenerator(num1, num2){
    let numberList = []
    for(let x = num1; x<=num2; x++){
        numberList.push(x)
    }
    return numberList
}

window.alert(numberGenerator(firstNumber, secondNumber))
