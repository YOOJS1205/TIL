# Box Contents

## Block 요소 vs Inline 요소

- Block 요소<br>
  &nbsp;너비 전체를 차지하는 요소, **줄바꿈**이 발생한다.
- Inline 요소<br>
  &nbsp;콘텐츠 크기만큼의 너비를 차지하는 요소, 줄바꿈이 발생하지 않는다. width와 height를 적용시킬 수 없다. margin은 좌, 우만 적용, **padding은 상하좌우 모두 적용**<br>
  &nbsp;baseline이 존재하여 이를 기준으로 텍스트가 작성된다.
- Inline-block 요소<br>
  &nbsp;block 요소처럼 높이를 적용할 수 있으며, inline 요소처럼 가로배치가 가능하다.

  > ### Block, Inline 요소의 수평정렬

      * Block<br>
      ```margin: 0 auto;```
      * Inline<br>
      ```text-align: center;```

  > ### Block 요소의 수직정렬 Tip

        height에 auto값을 부여하고 상하로 padding을 부여한다.

## Box Contents 5대 요소

1.  height => 높이
2.  width => 너비
    > ### width: auto VS width: 100%
        width: 100%와 다르게 width: auto는 margin, padding을 모두 고려하여 부모 너비만큼 꽉차게 설정된다 => 100%에 비해 매우 합리적
3.  margin => 외부
4.  padding => 내부, **패딩을 입으면 몸집이 커진다....!**
5.  border => 테두리

## Box-sizing

1. content-box => default 값, margin, border, padding이 포함된 값이 전체 너비, 높이
2. border-box => margin만 포함된 값이 전체 너비, 높이
