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