const input1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const input2 = [4, 2, 0, 3, 2, 5];

///function maxWater(height)
///{
///    let total = 0;
///    for(let i = 1; i < height.length - 1; i++)
///    {
///        let left = height[i];
///        for(let j = 0; j < i; j++)
///        {
///            left = Math.max(left, height[j]);
///        }
///        let right = height[i];
///        for(let j = i + 1; j < height.length; j++)
///        {
///            right = Math.max(right, height[j]);
///        }
///        total += Math.min(left, right) - height[i];
///    }
///    return total ;
///}

function maxWater(height){
    let maxLeft = height[0];
    let maxRight = height[height.length - 1];

    let left = 1;
    let right = height.length -2;
    let total = 0;

    while (left<=right){
        if (maxLeft <= maxRight){
            maxLeft = Math.max(maxLeft,height[left]);
            total += maxLeft - height[left];
            left +=1;
        } else{
            maxRight = Math.max(maxRight,height[right])
            total += maxRight - height[right];
            right -=1;
        }
    }
    return total ;
}

console.log(maxWater(input1))
console.log(maxWater(input2))