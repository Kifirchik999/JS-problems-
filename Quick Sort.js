function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const middle = [];
    const right = [];

    for (let element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            middle.push(element);
        }
    }
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Пример использования
const arr = [64, 34, 25, 12, 22, 11, 90, 10];
const sortedArr = quickSort(arr);
console.log(sortedArr);