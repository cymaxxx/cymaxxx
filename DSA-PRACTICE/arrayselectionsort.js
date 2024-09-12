const array = [64, 34, 25, 5, 22, 11, 90, 12];
let n = array.length;
for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j< n; j++) {
        array[j] < array[minIndex];
        minIndex = j;
    }
    let minValue = array.splice(minIndex, 1)[0];
    array.splice(i, 0, minValue); 
}
console.log("Sorted array:", array);