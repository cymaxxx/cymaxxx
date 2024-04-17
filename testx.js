const numbers = [1, 2, 3, 4, 5];

const newArr = numbers.map(double);

function double(value, index, array) {
    return value * 2;
}

console.log(double);
console.log(newArr);
console.log(numbers);