// const numbers = [4, 5, 8, 6, 9, 5, 7, 5, 7, 7, 7, 8, 2];
// const sortNumbers = numbers.sort();
// console.log(sortNumbers);

const friends = ['kanil', 'josim', 'razzak', 'anowar', 'deepjol', 'badsha'];
// const sortedFriends = friends.sort();
// console.log(sortedFriends);

// const reversedFriends = friends.reverse();
// console.log(reversedFriends);

const sortedReversedFriends = friends.sort().reverse();
// console.log(sortedReversedFriends);

// number sorting fun==================
const bigNumbers = [14, 5, 87, 52, 69, 87, 14, 97, 38];
const sortedBigNumber = bigNumbers.sort((a, b) => {
    return a - b;
});
console.log(sortedBigNumber);