function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}

function quicksort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        const pivotIndex = partition(array, low, high);
        quicksort(array, low, pivotIndex - 1);
        quicksort(array, pivotIndex + 1, high);
    }
}

const myArray = [64, 34, 25, 12, 22, 11, 90, 5];
quicksort(myArray);
console.log("Sorted array:", myArray);