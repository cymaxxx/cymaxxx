const array = [64, 34, 25, 12, 22, 11, 90, 5];
let n = array.length;
let temp;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp; 
        }
    }
    
}
console.log("Sorted Array: ", array);