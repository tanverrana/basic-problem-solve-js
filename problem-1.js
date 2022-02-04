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