// // arguments object - no longer bound with arrow functions

// const add = (a, b) => {
//     // console.log(arguments);
//     return a + b;
// };
// console.log(add(55, 1, 1000));

// // this keyword - no longer bound

// // .map creates new array with resulted values

// const user = {
//     name: 'Andrew',
//     cities: ['Alexandria', 'Raleigh', 'New York'],
//     printPlacesLived() {
//         return this.cities.map((city) => this.name + ' has lived in ' + city);
//     }
// };
// console.log(user.printPlacesLived());

// Test

// .map only works on arrays ( creates new array; transformed )
const multiplier = {
    multiplyBy: 5,
    numbers: [5, 10, 20, 40, 80],
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
};
console.log(multiplier.multiply());