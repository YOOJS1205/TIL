# background-image

- ## background 속성

  => background 속성은 html, body의 영역을 넘어선다.

- ## background-image 속성 vs img 태그
  배경에 이미지를 삽입하는 방법은 2가지가 있다.

1. background-image 속성

```html
<head>
  <style>
    div {
      background-image: url("이미지 주소");
    }
  </style>
</head>
<body>
  <div></div>
</body>
```

2. img 태그

```html
<head>
  <img src="이미지 주소" alt="이미지 부가 설명" />
</head>
```

- 언제 사용하는가?<br>
  => 주로 고정된 배경 이미지는 1번 방식을 사용하고, **이미지에 대한 부가 설명이 필요**하거나 **백엔드 개발자와 협업을 하는 경우**에는 2번 방식을 사용한다.

- ## background-repeat

1. `background-repeat: repeat;` => 반복
2. `background-repeat: repeat-x;` => x축만 반복
3. `background-repeat: repeat-y;` => y축만 반복
4. `background-repeat: no-repeat;` => 반복 x
5. `background-repeat: round;` => 이미지 짤리지 않게 이미지 크기 변화를 줘서 반복
6. `background-repeat: space;` => 이미지 크기 유지한채로 간격 없이 반복
7. `background-repeat: cover;` => 꽉차게
