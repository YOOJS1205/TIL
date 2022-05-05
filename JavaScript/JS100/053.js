const txt53 = '((()))'.split('');
const txt53_2 = '({))';

function mathBrackets(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            count++;
        }
        else if (arr[i] === ')') {
            count--;
        }
    }
    if (!!count) {
        return false;
    }

    let bracket = [];
    for (let i in arr) {
        if (arr[i] === '(') {
            bracket.push('(');
        }
        else if (arr[i] === ')') {
            if (bracket.length === 0) {
                return false;
            }
            bracket.pop();
        }
        return true;
    }
}
console.log(mathBrackets(txt53));