// two variables to hold our numbers
const firstNumber = prompt("Enter the First Number")
const secondNumber = prompt("Enter the second Number")

// presenting variable data to html file
document.getElementById("1st").innerHTML=firstNumber
document.getElementById("end").innerHTML=secondNumber

function numberGenerator(num1, num2){
    let numberList = []
    for(let x = num1; x<=num2; x++){
        numberList.push(x)
    }
    return numberList
}

window.alert(numberGenerator(firstNumber, secondNumber))

let genNumbers = numberGenerator(firstNumber, secondNumber)
document.getElementById("result").innerHTML=genNumbers
