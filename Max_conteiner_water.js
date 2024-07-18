const input1 = [1,8,5,3,2,2,1,6,7];
const input2 = [1,1];
const input3 = [4,3,2,1,4];
const input4 = [1,2,1];

function maxArea(height){
    let left = 0;
    let right = height.length-1;
    let maxCont = (right - left)*Math.min(height[right],height[left]);

    while (left != right){
        if (height[left]<height[right]){
            left+=1
        } else {
            right-=1
        }
        maxCont = Math.max(maxCont,(right - left)*Math.min(height[right],height[left]))
    }
    return maxCont
}

console.log(maxArea(input1))
console.log(maxArea(input2))
console.log(maxArea(input3))
console.log(maxArea(input4))