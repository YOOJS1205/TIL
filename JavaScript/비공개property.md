# 비공개 프로퍼티 구현 방법론

- ## 모듈 패턴

  - ### 정의

    - 어플리케이션의 일부를 독립된 코드로 분리하여 만들어 놓은 것.<br><br>

  - ### 1. 객체 리터럴의 방법으로 가능할까?

    ```javascript
    // 객체 리터럴
    const person = {
      name: "Yoo",
      sayName: function () {
        console.log(`내 이름은 ${this.name} 입니다.`);
      },
    };

    console.log(person.name); // Yoo
    person.sayName(); // 내 이름은 Yoo 입니다.
    ```

    - 결론: **불가능**하다. **객체 리터럴 내부의 모든 속성은 공개**된다.<br><br>

  - ### 2. 클로저와 유사한 모듈 패턴

    1. 모듈 패턴의 return 값은 함수가 아닌 **객체**이다.

    ```javascript
    const person = (function() {
        let name = 'Yoo';

        return {
            getName: function() {
                return this.name;
            }
            sayName: function() {
                console.log(`내 이름은 ${this.name} 입니다.`);
            }
        }
    })();
    // 즉시 실행 함수를 사용했으므로, person 변수에 return 값이 담긴다.
    // 궁금점: return 문 안 객체 메서드는 클로저인가? => 클로저이다.

    person.getName(); // Yoo
    person.sayName(); // 내 이름은 Yoo 입니다.
    console.log(person.name); // undefined => 접근 불가능

    // 결론: 위와 같은 방식으로 오직 객체 내부의 메서드를 통해서만 프로퍼티에 접근이 가능하다.
    ```

- ## 사용자 정의 타입 패턴 (생성자 함수)

  ```javascript
  function Person() {
    let name = "Yoo";
  }

  // 프로토타입 메서드 생성
  Person.prototype.getName = function () {
    return this.name;
  };
  Person.prototype.sayName = function () {
    console.log(`내 이름은 ${this.name} 입니다.`);
  };

  const yoo = new Person();
  console.log(Person.age); // undefined, 접근 불가능
  yoo.getName(); // Yoo
  yoo.sayName(); // 내 이름은 Yoo 입니다.

  // 그러나, 다음과 같은 방법으로 접근이 가능하다.
  // 생성자 함수에 의해 생성된 객체이므로, 프로퍼티처럼 접근이 가능하다.
  yoo.name = "Kim"; // 직접적으로 값 변경이 가능하므로 위험하다.
  ```

  - 결론: 불가능하다. 따라서, **생성자 함수와 클로저를 같이 사용**한다.<br><br>

- ## 모듈 패턴 + 사용자 정의 타입 패턴 + 클로저

  ```javascript
  function Person() {
    let name = "Yoo";

    // 클로저 생성
    function innerPersonType() {}

    innerPersonType.prototype.getName = function () {
      return name;
    };

    return innerPersonType;
  }

  const Yoo = new Person();
  const yoo = new Yoo();
  console.log(yoo.getName()); // Yoo
  console.log(yoo.name); // undefined, 오로지 프로토타입 메서드로만 접근이 가능하다.
  ```

  ```javascript
  // 위의 예시를 즉시 실행 함수로 바꿔보았다.
  const Yoo = (function () {
    let name = "Yoo";

    // 클로저
    function innerPersonType() {}
    innerPersonType.prototype.getName = function () {
      return name;
    };
    return innerPersonType;
  })();

  const yoo = new Yoo();
  console.log(yoo.getName()); // Yoo
  console.log(Yoo.name); // undefined
  ```

- ### 참조: https://velog.io/@recordboy/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%A8%EB%93%88-%ED%8C%A8%ED%84%B4
