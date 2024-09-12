let array = [64, 34, 25, 12, 22, 11, 90, 5];
let n = array.length;
for (let i = 1; i < n; i++) {
    let insertIndex = i;
    let current = array.splice(i, 1)[0];
    for (let j = i - 1; j >= 0; j--) {
        if (array[j] > current) {
            insertIndex = j;
           
        }
        array.splice(insertIndex, 0, current);   
    }
   console.log("Sorted array is :", array);
}