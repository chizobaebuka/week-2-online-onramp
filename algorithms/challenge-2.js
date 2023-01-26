// # Challenge 2

// Implement the function numSwap(number) which takes a number of even length, swaps pairs of its adjacent digits and returns the swapped number.
// ## Examples

// numSwap(1234) to return 2143  
// numSwap(432156) to return 341265


function numSwap(number) {
    // convert the number to string 
    let str = number.toString();
    // if the str is divisible by 2 and is not equal 0 return 'the length of the string has to have an even length'
    if(str.length % 2 !== 0){
        return 'the length of the string has to have an even length';
    }
    // initialize a variable to return the swapped number as a string 
    let swapped = '';
    // looping through the str and incrementing it by 2 for everytime the loop ran
    for (let i=0; i<str.length; i+=2){
        swapped += str[i+1] + str[i];
    }
    // converting the swapped string back to a number 
    return parseInt(swapped);
}

module.exports = numSwap
