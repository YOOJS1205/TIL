# 선택자(Selector) 와 우선순위

1. 전체 선택자 => 우선순위 0점, reset에 주로 사용된다.

```css
* {
  color: red;
}
```

2. 타입 선택자 => 우선순위 1점

```css
h1 {
  color: blue;
}
```

3. 클래스 선택자 => 우선순위 10점

```css
.one {
  color: green;
}
```

4. id 선택자 => 우선순위 100점

```css
#two {
  color: yellow;
}
```

## 우선순위 원칙

1. 후자 우선의 원칙 => 같은 선택자면 후에 작성된 css가 적용된다.

```css
p {
  color: yellow;
}
p {
  color: green; /* 해당 css가 적용 */
}
```

2. 구체성의 원칙 => 같은 태그를 선택하면 더 구체적인 css가 적용된다.

```css
p {
  color: yellow;
}
p.one {
  color: green; /* 해당 css가 적용 */
}
```

3. 중요성의 원칙<br>
   => 무조건적으로 우선순위를 가지나, **같은 절대자가 충돌하면 더 우선순위 점수가 높은** 속성이 적용된다.

```css
button {
  color: red !important;
}
button.btn {
  color: blue !important; /* 해당 css가 적용 */
}
```

- 주의점<br>
  &nbsp;태그 선택자가 1점, 클래스 선택자가 10점인데, 태그가 13개 선택되었다고 해서 클래스 선택자보다 우선 순위로 지정되지는 않는다.
