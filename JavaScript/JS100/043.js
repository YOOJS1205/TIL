// 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
// 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

// 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.

const dec = 1000;
// 숫자를 2진수로 바꾸고 문자열로 출력
const tenToTwo = dec.toString(2);
// 2진수의 수를 10진수로 바꿔서 숫자형으로 출력
const TwoToTen = parseInt(tenToTwo, 2);

console.log(tenToTwo);
console.log(TwoToTen);