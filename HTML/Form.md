# Form

**정보를 입력하는 영역**

> ### 속성

1. action => 어디로 데이터를 보낼것인지
2. mtehod => 어떠한 방식으로 데이터를 보낼것인지

> ### method의 get, post

1. get => url에 데이터의 키와 값이 표시
2. post => url에 데이터 표시 x, 보안이 필요한 데이터를 전송할 때 사용

- ## input 태그

  => 사용자가 다양하게 폼 태그에 입력할 수 있는 공간을 만들어 주고, 사용자에게 정보를 입력받음.

  > ### input 주요 태그 속성

  - text => input 태그 안에 들어갈 값의 type을 정해준다. 반드시 명시하자.
  - id => label 태그와 함께 사용할 때 사용된다.
  - name => 데이터를 전송할 때 데이터의 키값 역할을 한다.

- ## label 태그

  => **단순히 input 태그를 설명하는 역할이 아니다.** 시각장애인도 사용할 수 있도록 반드시 사용하자...!

  - 사용방법

  ```html
  <label for="hello">인사해봐</label>
  <input type="text" id="hello" placeholder="Say Hi..." name="hi" />
  ```

  다음과 같이 label의 for 속성과 input의 id 속성이 일치해야 작동한다.

- ## select, option 태그

  => 드롭다운 리스트 박스를 생성, 박스 내부의 아이템 하나하나는 option 태그로 지정

  - 사용방법

  ```html
  <form action="">
    <label for="alphabet"></label>
    <select name="english" id="alphabet">
      <option value="a">a</option>
      <option value="b">b</option>
      <option value="c">c</option>
    </select>
  </form>
  ```

  - 주의점

  1. option 태그 내부의 데이터가 이동할 때는 콘텐츠 기준이 아닌 value 값이 전달된다.
  2. option 태그에 name 속성을 쓰는 것이 아닌 select 태그에 사용한다.

- ## fieldset, legend 태그

  => 폼 내부의 요소들을 **그룹화**할 때 사용한다. legend 태그는 **제목**을 의미한다.

- ## button 태그
  => 클릭 가능한 버튼을 생성
  > ### 속성
  1. submit => 서버로 데이터 제출, defulat 값이지만 반드시 명시하자...!
  2. reset => form 내부의 모든 값을 초기화
  3. button => 작동을 하지 않는다.
