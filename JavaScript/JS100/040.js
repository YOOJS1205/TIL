// 입력
// 50 제한 무게
// 5 친구 수
// 20 친구 개별 몸무게
// 20
// 20
// 20
// 20

// 출력
// 2

const num = [50, 5, 20, 20, 20, 20, 20];
const limit = num[0];
const friend = num[1];
let weight = 0;
let count = 0;

for (let i = 2; i < num.length; i++) {
    weight += num[i];
    if (weight > limit) {
        break
    }
    count++;
}
console.log(count);