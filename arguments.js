function addNumbers() {
    // console.log(arguments);


    let result = 0;

    for (const num of arguments) {
        result = result + num;
    }
    return result;
}


const sum = addNumbers(23, 13, 55, 455, 61);
// console.log(sum);


// function getFullName(firstName, lastName) {
//     const fullName = firstName + " " + lastName;
//     return fullName;
// }
// const name = getFullName("Rukon", "uddin", 'Delwar', 'Hossen');
// console.log(name);

function getFullName(firstName, lastName) {
    let fullName = " ";
    for (const part of arguments) {
        fullName = fullName + part + " ";
    }

    return fullName;


}
const name = getFullName("Rukon", "uddin", 'Delwar', 'Hossen');
console.log(name);