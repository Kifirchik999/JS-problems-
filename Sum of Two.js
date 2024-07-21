const sumOfTwo = (arr,target) =>{
    const rezult = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]+arr[j] === target){
                rezult.push(arr[i],arr[j])
            }
        }

    }

    return rezult;
};

const sumOfTwoBetter = (arr,target) =>{
    const numObject ={};
    for (let i = 0; i < arr.length; i++) {
        numObject[arr[i]] = i;
    }

    for (let i = 0; i < arr.length; i++) {
        const diff = target - arr[i];

        if (numObject[diff] && numObject[diff]!==i){
            return [arr[i],diff]
        }
    }

    return [];
}


console.log(sumOfTwo([2, 7, 11, 15], 9));
console.log(sumOfTwoBetter([2, 7, 11, 15], 14));