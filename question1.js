
// declaring a variable to hold our text to be swapped
const sentence = prompt("Enter You Text here")


function swappingLetters(letters){
    let newSwap = '';

    // swapping
    for(let x = 0; x < letters.length; x++){
        if(letters[x] === letters[x].toUpperCase()){
            newSwap = newSwap + letters[x].toLowerCase();
        }else{
            newSwap = newSwap + letters[x].toUpperCase();
        }
    }
   
    return newSwap
}

window.alert(swappingLetters(sentence))