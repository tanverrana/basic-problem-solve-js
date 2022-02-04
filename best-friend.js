function bestFriend(name) {
    let bigName = name[0].length;
    for (let i = 0; i < name.length; i++) {
        let element = name[i].length;
        if (bigName < element) {
            bigName = element;
            let finalBigName = name[i].length;
            return finalBigName;
            //console.log(name[i]);
        }
    }
    //return bigName;
}
const friendName = ["Tanver", "Abdur Sobur", "Manik", "Mehedi", "Hemel", "Sobur", "Tasin", "Shahid"];
const getFriend = bestFriend(friendName);
console.log(getFriend);