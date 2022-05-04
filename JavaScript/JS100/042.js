const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const month = '5';
const date = '5';

const solution = (a, b) => {
    // 날짜 생성자 함수
    const theDay = new Date(`2020-${a}-${b}`);
    // 요일을 숫자로 반환 (일요일: 0)
    console.log(day[theDay.getDay()]);
}

solution(month, date);