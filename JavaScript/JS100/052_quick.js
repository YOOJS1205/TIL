// 퀵 정렬

// 1. 요소 안에서 기준을 정한다. (첫번째값, 중앙값, 마지막값 중 선택)
// 2. 기준보다 값이 작으면 왼쪽으로, 기준보다 값이 크면 오른쪽으로 보낸다.
// 3. 기준을 제외하고 왼쪽, 오른쪽 리스트를 다시 정렬한다.
// 4. 리스트의 크기가 0, 1이 될 때까지 반복한다.

function quickSort(arr){
    if (arr.length <= 1){
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

// const array52 = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(quickSort(array52));