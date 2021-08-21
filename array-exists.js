function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return "please provide an array of strings";
    }
    let mega = friends[0];
    for (friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
// console.log(myBigBody);


const friends = ["kutub", "Lion", "shamol", "sabbir"];
const myBigBody = megaFriend(friends);


if (friends.indexOf('fox') != -1) {
    console.log('Lion exists');
} else {
    console.log("fox doesn't exists")
}

// if (friends.includes("Lion")) {
//     console.log("Lion exits using includes");
// }

// concat()---------------------------
const first = ['1', '2', '3'];
const second = ['4', '5', '6'];
const combined = first.concat(second);
console.log(combined);