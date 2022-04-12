# Books

- You don’t know JS - 타입과 문법 스코프와 클로저


### 배운 것을 기록합니다.

- 1장

<b>동적언어 vs 정적언어</b>

동적언어란 컴파일 시 자료형을 정하는 것이 아닌 런타임 시 결정이 된다. 타입을 명시해주지 않고 변수만 선언하여 값을 지정할 수 있다.



정적언어란 컴파일 시 변수의 타입이 결정되는 언어로 프로그래머가 변수에 들어갈 값의 형태에 따라 직접 변수의 타입을 명시해줘야한다.



<b>내장 타입</b>


자바스크립트에는 총 7가지 내장 타입이 있는데 (null, boolean, undefined, number, string, object, symbol)
symbol은 ES6에서 새로 추가된 데이터 타입이다.


```javascript
typeof null === "object"; // true
```
null은 null을 반환하지 않는데 이 버그는 항상 유지되어왔기 때문에 타입으로 null값을 정확히 확인하기 위해선 아래와 같이 해주어야 한다.

```javascript
var a = null;
(!a && typeof a === "object") // true
```

null은 타입이 object인 특별한 존재다.



function과 배열은 모두 객체의 '하위 타입'이다.

```javascript
typeof function a(){} === "function"; // true
typeof [1, 2, 3] === "object"; // true
```


```javascript
typeof typeof 42; // "string"
```

typeof 연산자의 반환 값은 언제나 문자열이다.





<b>undefined VS undeclared</b>


"undefined"는 접근 가능한 스코프에 변수가 선언되었으나 현대 아무런 값도 할당되지 않은 상태를 뜻하고 "undeclared"는 접근 가능한 스코프에 변수 자체가 선언조차 되지 않은 상태를 의미한다.


```javascript
var a;

a; // undefined
b; // ReferenceError: b가 정의되지 않았습니다.
```

```javascript
var a;

typeof a; // "undefined"
typeof b; // "undefined"
```

그러나 선언되지 않은 변수도 typeof를 하면 "undefined"로 나온다. b는 분명 선언조차 되지 않았는데 typeof를 해도 브라우저는 오류처리를 하지 않는다.




<b>typeof</b>의 안전가드를 선언되지 않은 변수에 사용할 수 있다.



