const input1 = "()";
const input2 = "()[]{}";
const input3 = "(]";

function isValid (s) {
    let stack = [];
    let brackets = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    for (let i = 0; i < s.length; i++) {
        if (['}',')',']'].indexOf(s[i]) > -1){
            if (brackets[s[i]] !== stack.pop()) return false ;
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
}

console.log(isValid(input1))
console.log(isValid(input2))
console.log(isValid(input3))