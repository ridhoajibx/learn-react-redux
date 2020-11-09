var number = [ 1, 2, 3]
const plus3 = number.map(num=>num+3);
console.log('cek plus3', plus3);

const plus4function = num => (num+4)
const plus4 = number.map(plus4function)
console.log('cek plus4 with function', plus4);