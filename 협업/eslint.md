# 협업을 위한 ESLint 설정

- ## 1. 설치

  `npm install eslint`

- ## 2. 초기화 및 환경설정 파일 생성

  `npx eslint --init`<br>
  가이드를 따라가면서 팀이 진행할 프로젝트 환경에 맞는 설정을 선택하면 된다.

- ## 3. 규칙 설정

  1. env: 어떤 환경에서 스크립트를 실행할 것인가?
  2. extends: ESLint 설정을 확장할 때 사용
  3. rules: 규칙 하나 하나를 세세하게 제어하기 위해서 사용, extends에서 설정된 규칙을 rules에서 덮어쓸 수 있다.

- ## 4. 사용 방법

  `npx eslint 파일명.확장자`<br>
  `npx eslint 폴더명`<br>
  `npx eslint 파일명.확장자 or 폴더명 --fix` => 자동으로 수정이 가능한 규칙들을 수정해줌

- ## 5. 명령어 설정

```js
// package.json
{
    "scripts": {
        "eslint": "eslint src"
    }
}
// npx eslint 명령어를 입력하면 src 폴더의 모든 파일들을 검사한다.
// npx eslint --fix 명령어를 입력하면 src 폴더의 모든 파일들을 규칙에 따라 수정한다.
```

- ## 참고

1. 공식문서: https://eslint.org/
2. https://kavoom2.github.io/node.js/Eslint/
3. https://dev-bomdong.tistory.com/27
4. https://dev-yakuza.posstree.com/ko/react/eslint/
