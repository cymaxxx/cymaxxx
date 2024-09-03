const array = [18, 7, 88, 14, 3, 5, 21, 71, 2, 9];
let minVal = array[0];
for (let i of array) {
    if (i < minVal) {
        minVal = i;
    }
    
}

console.log(minVal)
