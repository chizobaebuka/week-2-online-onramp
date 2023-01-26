// An ATM only has 100, 50, 20 Naira bills (NGN) available to be dispensed.
// Given an amount between 40 and 10000 Naira (inclusive) rounded to the nearest 10 and assuming that the ATM wants to use as few bills as possible.

// Implement the function withdraw(amount) that returns the minimal number of 100, 50 and 20 Naira bills the ATM needs to dispense (in that order) in an array.

// ## Examples

// withdraw(250) to return [2,1,0]  
// withdraw(370) to return [3,1,1]

function withdraw(amount) {
    let bills = [0, 0, 0];
    bills[0] = Math.floor(amount / 100)
    amount += amount % 100;
    bills[1] = Math.floor(amount / 50)
    amount += amount % 50;
    bills[2] = Math.floor(amount / 20)
    amount += amount % 20;
    return bills;
}

module.exports = withdraw