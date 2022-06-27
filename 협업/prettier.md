# 협업을 위한 prettier 설정

- ## 1. 설치

  `npm install prettier`

- ## 2. 파일 생성 및 규칙 설정
  .prettierrc.json 파일 생성 후 규칙 지정

```js
{
    "tabWidth": 2,
    "singleQuote": true,
    "semi": true,
    "printWidth": 80,
    "useTabs": false,
    "bracketSpacing": true
}
```

- ## 3. 실행 명령어

  1. 검사하기 => `npx prettier --check 파일명.확장자`
  2. 수정하기 => `npx prettier --write 파일명.확장자`

- ## 참고
  1. https://dev-yakuza.posstree.com/ko/react/prettier/
