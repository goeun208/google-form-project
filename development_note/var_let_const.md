# let and const 과 var 의 차이점

    자바스크립트 ES6에서 새로 등장한 let & const 와 var 와의 차이

## let & const

- let과 const 는 block\*scope다.
  - 중복 선언이 불가능하다.
- let

  - 값을 변경할 수 있다 (mutable)

```javascript
let name = "bongjun";
console.log(name);

name = "bongjun2";
console.log(name); // 변수 할당가능

let name = "bongjun3";
console.log(name); // 값 변경시 에러 - Identifier 'name' has already been declared
```

- const

  - 값을 변경할 수 없다. (immutable)
  - 반드시 초기값을 할당하여야함

```javascript
const name = "bongjun";
console.log(name);

name = "bongjun2";
console.log(name); // 값 변경 - 에러

const name = "bongjun3";
console.log(name); // 변수 재선언시 에러 - Identifier 'name' has already been declared
```

## var

- var는 function\*scope다.
- 중복선언이 가능하다.
- 변수 선언을 여러 번해도 에러없이 각자의 값이 출력된다.
- 버그 발생과 메모리 누수 등의 위험이 있음

```javascript
var name = "bongjun";
console.log(name); // bongjun - 선언

var name = "bongjun2";
console.log(name); // bongjun2 - 재선언 가능

var name;
console.log(name); // bongjun2
```

---

\*scope란?

- "범위" 라는 뜻을 가지고있고, 자바스크립트에선 2가지타입 global(전역), local(지역)이 있다.

- 전역스코프

  - 전역에 선언되어있어, 어느 곳에서도 해당 변수에 접근할 수 있음

- 지역스코프
  - 해당 범위에서만 접근할 수 있어서 벗어나면 접근할 수 없음
