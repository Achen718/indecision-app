var nameVar = 'Andrew'; //defining and assining
var nameVar = 'Mike';//redefine
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';//reassign
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Hal';
    return petName;
}
// Block Scoping

const fullName = 'Jen Mead';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);