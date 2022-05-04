// 입력 : 18234
// 출력 : 18

// 입력 : 3849
// 출력 : 24

let input = '3849';
let inputNum = parseInt(input);
let sum = 0;

for (let i = 0; i < input.length; i++) {
    sum += inputNum % 10;
    inputNum = Math.floor(inputNum / 10);
}

// while 문으로 해결해보기

console.log(sum);