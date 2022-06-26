# malloc, pointer 복습

```c
int main(void)
{
    int *x; // 정수를 가리키는 포인터
    int *y;

    x = malloc(sizeof(int)); // 4byte 크기의 메모리를 x에 할당

    *x = 42; // x의 주소로 가서 42를 저장
    *y = 13; // 메모리 할당이 되지않은 상태
    // => 쓰레기 값이 존재하여 오류가 발생
}
// 다음 코드의 문제점은?
```
