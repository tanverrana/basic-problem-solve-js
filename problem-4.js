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