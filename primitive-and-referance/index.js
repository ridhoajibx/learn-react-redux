// Primitive types
var name = 'ridho'
var nameCopy = name
console.log('name', name);
console.log('nameCopy', nameCopy);
name = 'Mary'
console.log('name', name);
console.log('nameCopy', nameCopy);

// Referances types
const user = {
    name: 'ridho'
}
// const userCopy = user
const userCopy = {...user, name: 'sam'}
console.log('user', user);
console.log('userCopy', userCopy);
user.name = 'Mary'
console.log('user', user);
console.log('userCopy', userCopy);