//Problem-1: anaToVori
function anaToVori(ana) {
    //Error handeling for string
    if (typeof ana != "number") {
        return "Plase input Valid Number";
    }
    //Error handeling for positive number
    if (ana < 0) {
        return "Please Input positive Number";
    }
    const vori = ana / 16;
    return vori;
}
console.log(anaToVori(32));



//Problem-2: pandaCost
function pandaCost(shingaraQuantity, chomuchaQuantity, jilapiQuantity) {
    //Error handeling for string
    if (typeof shingaraQuantity != "number" || typeof chomuchaQuantity != "number" || typeof jilapiQuantity != "number") {
        return "Plase input Valid Number";
    }
    //Error handeling for positive number
    if (shingaraQuantity < 0 || chomuchaQuantity < 0 || jilapiQuantity < 0) {
        return "Please Input positive Number";
    }
    //1 pcs shingara = 7tk
    const shingaraPrice = 7 * shingaraQuantity;
    //1 pcs chomucha = 10tk
    const chomuchaPrice = 10 * chomuchaQuantity;
    //1 pcs jilapi = 15tk
    const jilapiPrice = 15 * jilapiQuantity;
    const totalCost = shingaraPrice + chomuchaPrice + jilapiPrice;
    //Return a number
    return totalCost;
}
console.log(pandaCost(2, 2, 3));



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
console.log(picnicBudget(400));





//Problem-4: oddFriend
function oddFriend(friendName) {
    //using for loop 
    for (let i = 0; i < friendName.length; i++) {
        if (typeof friendName[i] != "string") {
            return "Please Input a Name.For example:tanver,sobur etc.";
        }
        if (friendName[i].length % 2 != 0) {
            // Return Name
            return friendName[i];
        }
    }
}
const myFriendsName = ["tanver", "Rana", "Sobur", "Mehedi", "Manik", "Tasin"];
console.log(oddFriend(myFriendsName));