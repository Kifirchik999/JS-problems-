const input = [4, 1, 2, 42, 1, 2, 4];

const singleNumber1 = function (nums) {
    let uniq = new Set();
    let uniqSum = 0;
    let numSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];

        if (!uniq.has(current)) {
            uniq.add(current);
            uniqSum += current;
        }
        numSum += current;
    }

    return uniqSum * 2 - numSum;
};

const singleNumber2 = function (nums) {
    let uniq = Array.from(new Set(nums));

    let reduceSumm = (s, i) => s + i;

    let numSum = nums.reduce(reduceSumm);

    let uniqSum = uniq.reduce(reduceSumm);

    return uniqSum * 2 - numSum;
};

console.log(singleNumber1(input));
