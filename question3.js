
// function primeNumbers(){
    
// }

// generating an array of numbers
// const firstNumber = prompt("Enter the First Number")
// const secondNumber = prompt("Enter the second Number")

// document.getElementById("1st").innerHTML=firstNumber
// document.getElementById("end").innerHTML=secondNumber

// // let inputArray = []
// function numberGenerator(num1, num2){
//     let numberList = []
//     for(let x = num1; x<=num2; x++){
//         numberList.push(x)
//     }
//     return numberList
    
// }

// let inputArray = [...numberList]





// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; 
    if (num <= 3) return true; 
    if (num % 2 === 0 || num % 3 === 0) return false; 
  
    // Check for prime numbers 
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false; 
    }
    return true; 
  }
  
  // Function to filter prime numbers from an array
  function findPrimes(inputArray) {
    return inputArray.filter(isPrime); 
  }
  
  // Example usage
 let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



  let resultArray = findPrimes(inputArray); 
  console.log(resultArray);
//  window.alert(resultArray)
  document.getElementById("result").innerHTML=resultArray
  