//Problem-3: picnicBudget
function picnicBudget(numberOfPeople) {
    //Error handeling for string
    if (typeof numberOfPeople != "number") {
        return "Plase input Valid Number";
    }
    //Error handeling for positive number
    if (numberOfPeople < 0) {
        return "Please Input positive Number";
    }
    //If the number of people less than 100 .
    if (numberOfPeople <= 100) {
        const totalCost = 5000 * numberOfPeople;
        return totalCost;
    }
    // If the number of people less than 200.
    else if (numberOfPeople <= 200) {
        const first100PeopleCost = 100 * 5000;
        const remainingPeople = numberOfPeople - 100;
        const second100PeopleCost = remainingPeople * 4000;
        const totalCost = first100PeopleCost + second100PeopleCost;
        return totalCost;
    }
    //If the number of people more than 200.
    else if (numberOfPeople > 200) {
        const first100PeopleCost = 100 * 5000;
        const second100PeopleCost = 100 * 4000;
        const remainingPeople = numberOfPeople - 200;
        const remainingPeoplecost = remainingPeople * 3000;
        const totalCost = first100PeopleCost + second100PeopleCost + remainingPeoplecost;
        return totalCost;
    }
}
console.log(picnicBudget(300));