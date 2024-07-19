let input1 = [[36376,85652,21002,4510],[68246,64237,42962,9974],[32768,97721,47338,5841],[55103,18179,79062,46542]];
function lucky(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let minRow = Math.min(...row);
        let index = row.indexOf(minRow);
        if (matrix.every(element => element[index] <= minRow)) {
            return [minRow];
        }
    }
    return [];
}

console.log(lucky(input1))