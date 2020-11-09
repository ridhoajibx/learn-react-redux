const fruitsArr = ['banana', 'apple', 'orange'];
const fruitsObj = {
    banana: 12,
    apple: 13,
    orange: 14
}

const persons = {
    'Jason': ['hat', 't-shirt', 'shoes'],
    'Sam': ['hat', 'shoes'],
    'Alex': ['pants', 't-shirt']
}

for (const key in persons) {
    if (persons.hasOwnProperty(key)) {
        const person = persons[key];
        console.log(key, person);
    }
}


// for of array
for (const value of fruitsArr) {
    console.log('value of array', value);
}
// for in object
for (const key in fruitsObj) {
    console.log('key in object', key);
}
// for in object
for (const key in fruitsObj) {
    if (fruitsObj.hasOwnProperty(key)) {
        const item = fruitsObj[key];
        console.log('item', item);
    }
}

// for in array
for (const key in fruitsArr) {
    if (fruitsArr.hasOwnProperty(key)) {
        const item = fruitsArr[key];
        console.log('item', item);
    }
}
