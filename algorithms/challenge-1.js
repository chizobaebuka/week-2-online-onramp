// # Challenge 1

// Implement the function missingNumber(numArr) which returns the missing number in a given integer array between 1 and 9. If there is no missing number, the function should return false. If there is more than one missing number, the function should return the result in an array sorted in ascending order.

// ## Examples

// missingNumber([1,2,3,4,6,7,8,9]) to return 5  
// missingNumber([1,2,3,4,5,6,8]) to return [7, 9]  
// missingNumber([1,2,3,4,5,6,7,8,9]) to return false 


function missingNumber(numArr) {
    let missingNumber = [];

    for (let i=1; i <= 9; i++){
        if(!numArr.includes(i)){
            missingNumber.push(i)
        }
    }

    if(missingNumber.length === 0){
        return false;
    }else if (missingNumber.length === 1){
        return missingNumber[0];
    }else{
        return missingNumber.sort((a,b) => a - b)
    }
}

module.exports = missingNumber
