// 병합 정렬
// 무조건 0번째랑 비교한다.

// 분할 함수
function mergeSort(arr){
    if (arr.length <= 1){
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0,mid); // 0 ~ mid-1
    const right = arr.slice(mid); // mid ~

    return merge(mergeSort(left), mergeSort(right));
}

// 합병 함수
function merge(left, right){
    let result = [];

    while (left.length && right.length){
        if (left[0] < right[0]){
        result.push(left.shift());
        } else {
        result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }

    return result;
}

// const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(mergeSort(array));