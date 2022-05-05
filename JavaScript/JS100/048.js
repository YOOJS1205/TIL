// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

const word = 'AAABBBcccddd';
let wordArr = [];
// 문자열은 배열처럼 각각의 원소의 값을 변경할 수는 없다.

for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
        wordArr.push(word[i].toLowerCase());
    }
    else {
        wordArr.push(word[i].toUpperCase());
    }
}

console.log(wordArr.join(''));