function electricityBill(unit) {
    if (unit <= 100) {
        const totalBill = unit * 5;
        return totalBill;
    }
    else if (unit <= 200) {
        const first100UnitBill = 100 * 5;
        const remainingBill = unit - 100;
        const second100Bill = remainingBill * 6;
        const totalBill = first100UnitBill + second100Bill;
        return totalBill;
    }
    else if (unit <= 300) {
        const first100UnitBill = 100 * 5;
        const second100Bill = 100 * 6;
        const thirdRemainingBill = unit - 200;
        const third100Bill = thirdRemainingBill * 7;
        const totalBill = first100UnitBill + second100Bill + third100Bill;
        return totalBill;

    }
    else if (unit > 300) {
        const first100UnitBill = 100 * 5;
        const second100Bill = 100 * 6;
        const third100Bill = 100 * 7;
        const fourthRemainingBill = unit - 300;
        const fourth100Bill = fourthRemainingBill * 8;
        const totalBill = first100UnitBill + second100Bill + third100Bill + fourth100Bill;
        return totalBill;

    }
}
const totalPrice = electricityBill(380);
console.log("Total Price:", totalPrice);