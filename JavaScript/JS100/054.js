const num54 = '1 2 4 3 5'.split(' ').map(i => parseInt(i, 10)).sort((a, b) => a - b);
console.log(num54);

function solution(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1] - 1) {
            return 'NO';
        }
    }
    return 'YES';
}

console.log(solution(num54));