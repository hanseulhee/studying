# JavaScript

JavaScript는 HTML과 CSS로 만들어진 웹페이지를 동적으로 변경해주는 언어다.


<div id="9"></div>

## ES6 + Syntax

### Var, Let, Const

**Variable**

var (don't ever use this!)
let (added in ES6)


[@seulhyi_variable](https://velog.io/@seulhyi/JS-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%9D%B4%EC%A0%9C%EB%8A%94-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90)

### Variable types

primitive type은 더이상 작은 단위로 나누어질 수 없는 아이템으로 number, string, boolean, null, undefined, symbol 등이 있다.

object는 싱글 아이템들을 여러개로 묶어 한 단위로 관리할 수 있게 해준다. 자바스크립트에서는 function도 데이터 타입 중 하나로써 변수의 할당이 가능하고 함수의 인자로도 전달이 된다. 


<div id="5"></div>

### Hoisting

호이스팅이란 어디에 선언했냐에 상관없이 코드를 실행하기 전 변수 선언/함수 선언이 해당 스코프의 제일 위로 끌어올려 주는 것이다.

```js
var testA;
console.log("test값은" + testA) // undefined
```

```js
console.log("test값은" + testA) // undefined
var testA;
```

최상위에 선언한 것과 동일하다.

```js
let testB;
console.log("test값은" + testB) // undefined
```

```js
console.log("test값은" + testB) // Error
let testB;
```

var과 let, const 모두 호이스팅이 되지만 차이가 있다.
var은 선언 전과 후가 같다. var은 선언과 동시에 값을 할당한다. 그러나 let은 호이스팅은 하지만 let으로 선언된 변수를 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생한다.

호이스팅은 크게 함수 호이스팅과 변수 호이스팅으로 나뉜다.

**함수 호이스팅**

함수 호이스팅은 무엇보다 가장 먼저 이루어진다. 

**변수 호이스팅**

var은 호이스팅이 발생하면 선언과 초기화가 거의 동시에 이루어진다. 선언부 위치에 상관 없이 참조, 할당이 가능하다.


### Constants



### Scope


---

## Browser APIs


### DOM Manipulation


### Events


### Fetch API (Async)