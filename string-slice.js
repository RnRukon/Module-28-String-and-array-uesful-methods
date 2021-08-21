const anthem = 'amar sonar bangla ami tomai valobashi';
// split()--------------
const words = anthem.split(' ');

const withoutA = anthem.split('a');

// slice()--------------------
const smallSlice = anthem.slice(5, 13);



//substr()--------------------

const anotherPart = anthem.substr(11, 6);


//substring()-------------------------

const anotherPart2 = anthem.substring(11, 15);

//concat()--------------------------
const first = 'Amader';
const second = 'City';
// const fullString = first + second;

const fullString = first.concat(second).concat(' abc');

//join()------------------------
const words2 = ['adasdd', 'badfaaa', 'cdfdfa', 'daaaff'];
const allJoin = words2.join("");

console.log(allJoin);
