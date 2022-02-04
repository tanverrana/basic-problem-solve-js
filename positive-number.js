function showPositiveNumber(number) {
    let newNumber = new Array();
    for (let i = 0; i < number.length; i++) {
        if (number[i] >= 0) {
            newNumber[i] = number[i];
        }
        else {
            break;
        }
    }
    return newNumber;
}
const myNumber = [34, 56, -78, 65, 12, 34];
const getPositiveNumber = showPositiveNumber(myNumber);
console.log("Here is our all positive Number:", getPositiveNumber);