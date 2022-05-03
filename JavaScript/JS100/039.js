// 입출력

// 입력 : querty
// 출력 : euerty

// 입력 : hqllo my namq is hyqwon
// 출력 : hello my name is hyewon

// 내 풀이 => 느리다.
let sentence = 'hqllo my namq is hyqwon';
// split => 문자열을 배열로
let arr = sentence.split('');

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'q') {
        arr[i] = 'e';
    }
}
// join => 배열을 문자열로
console.log(arr.join(''));

// 강사님 풀이
let sentence2 = 'hqllo my namq is hyqwon';

console.log(sentence2.split('q').join('e'));