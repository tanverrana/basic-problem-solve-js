function secondHeighest(number) {
    let firstHeighest = number[0];
    let secondHeighest = number[0];
    for (let i = 0; i < number.length; i++) {
        let element = number[i]
        if (element > firstHeighest) {
            secondHeighest = firstHeighest;
            firstHeighest = element;
        }
        else if (element > secondHeighest) {
            secondHeighest = element;
        }
    }
    return secondHeighest;
}
const myNumber = [167, 78, 9, 12, 34, 44, 70, 69];
const getSecondHeighest = secondHeighest(myNumber);
console.log(getSecondHeighest);