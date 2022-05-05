//버블 정렬 구현하기
function bubble(arr) {
    let result = arr.slice(); 

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - i; j++) {
            if (result[j] > result[j + 1]) {
                let value50 = result[j];
                result[j] = result[j + 1];
                result[j + 1] = value50;
            }
        }
    }
        return result;
    }

    const items = "9 5 1 2 6 7".split(' ').map((n) => {
    return parseInt(n, 10);
});

console.log(bubble(items));