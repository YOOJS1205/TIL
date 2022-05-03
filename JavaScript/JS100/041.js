// 소수 판별하기
let num1 = 56;
let num2 = 37;

const isPrimeNumber = n => {
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (n % i === 0 && n !== 1) {
            console.log('no');
            return false;
        }
    }
    console.log('yes');
}

console.log(isPrimeNumber(num1));
console.log(isPrimeNumber(num2));