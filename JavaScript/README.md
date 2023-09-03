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
console.log("test값은" + testA); // undefined
```

```js
console.log("test값은" + testA); // undefined
var testA;
```

최상위에 선언한 것과 동일하다.

```js
let testB;
console.log("test값은" + testB); // undefined
```

```js
console.log("test값은" + testB); // Error
let testB;
```

var과 let, const 모두 호이스팅이 되지만 차이가 있다.
var은 선언 전과 후가 같다. var은 선언과 동시에 값을 할당한다. 그러나 let은 호이스팅은 하지만 let으로 선언된 변수를 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생한다.

호이스팅은 크게 함수 호이스팅과 변수 호이스팅으로 나뉜다.

**함수 호이스팅**

함수 호이스팅은 무엇보다 가장 먼저 이루어진다.

**변수 호이스팅**

var은 호이스팅이 발생하면 선언과 초기화가 거의 동시에 이루어진다. 선언부 위치에 상관 없이 참조, 할당이 가능하다.

---

거듭제곱은 곱셈보다 연산 우선순위가 높다.

## 자료형

불린형이 숫자형으로 변환되는 경우 true는 1로, false는 0으로 변환된다.

불린형으로 변환할 때는, 보통 true가 나오지만, 빈문자(''), 0, 그리고 NaN은 false로 변환된다.

```javascript
// 일치 동등 비교
console.log(2 === "2"); // false
console.log(2 == "2"); // true

// 불일치 부등 비교
console.log(2 !== "2"); // true
console.log(2 != "2"); // false
```

## null VS undefined

둘 다 "값이 없다"는 것을 의미

null : 의도적으로 "값이 없다"는 것을 표현할 때 사용
undefined : "값이 없다"는 것을 확인할 때 사용

값이 주어지지 않은 값은 기본적으로 undefined

```javascript
let sh;
console.log(sh); // undefined
```

```javascript
let sh = null;
console.log(sh); // null
```

## 객체

객체의 프로퍼티를 삭제할 때는 delete 연산자를 사용한다.

프로퍼티 네임에 띄어쓰기가 있을 경우에는 대괄호 표기법으로 접근하고, 반드시 따옴표를 붙여서 문자열이라는 것을 명시해 주어야 한다.

```javascript
let myObejct = {};

myObejct["new property"] = "new value";

console.log(myObject["new property"]);
```

## Date

```javascript
let today = new Date(2112, 7, 24);
let jaeSangStart = new Date(2109, 6, 1);

function workDayCalc(startDate) {
  let timeDiff = today.getTime() - jaeSangStart.getTime();
  let result = timeDiff / 1000 / 60 / 60 / 24;
  console.log(`오늘은 입사한 지 ${result + 1}일째 되는 날 입니다.`);
}

workDayCalc(jaeSangStart);
```

## splice

```javascript
arr.splice(삭제할index, 삭제할개수, 추가할요소, 추가할요소, ...);
```

## 배열 메소드

배열의 첫 요소를 삭제 : shift()

```javascript
arr.shift();
```

배열의 마지막 요소를 삭제 : pop()

```javascript
arr.pop();
```

배열의 첫 요소로 값 추가 : unshift(value)

```javascript
arr.unshift("value");
```

배열의 마지막 요소로 값 추가 : push(value)

```javascript
arr.push("value");
```

배열에서 특정 값 찾기 : indexOf()

```javascript
let brands = ["Google", "Kakao", "Naver", "Kakao"];
console.log(brands.indexOf("Kakao")); // 1

// 포함되어 있지 않다면 -1이 리턴된다.
// 여러개 포함되어 있다면 처음 발견된 인덱스가 리턴된다.
```

배열에서 뒤에서 부터 특정 값 찾기 : lastIndexOf()

```javascript
let brands = ["Google", "Kakao", "Naver", "Kakao"];
console.log(brands.lastIndexOf("Kakao")); // 3
```

배열에서 특정 값이 있는지 확인하기 : includes

```javascript
let brands = ["Google", "Kakao", "Naver", "Kakao"];
console.log(brands.includes("Kakao")); // true
```

배열 뒤집기 : reverse

```javascript
let brands = ["Google", "Kakao", "Naver", "Kakao"];
brands.reverse();
console.log(brands); // ["Kakao", "Naver", "Kakao", "Google"]
```

## Math

절댓값

Math.abs(x)

최댓값

```javascript
console.log(Math.max(2, -1, 4, 5, 0)); // 5
```

반올림

```javascript
console.log(Math.round(2.3)); // 2
// 소수점 부분이 0.5 이상이면 가장 가까운 정숫값으로 올라가고, 소수점 부분이 0.5 미만이면 가장 가까운 정숫값으로 내려간다.
```

버림과 올림

Math.floor(x)을 하면 x의 버림 값이, Math.ceil(x)을 하면 x의 올림 값이 리턴된다. 이 경우, 소수 부분이 얼마 인지와는 상관없다.

```javascript
console.log(Math.floor(2.49)); // 2
console.log(Math.floor(2.8)); // 2
console.log(Math.ceil(2.4)); // 3
console.log(Math.ceil(2.8)); // 3
```

난수

Math.random을 하면 0 이상 1 미만의 값이 랜덤으로 리턴된다.

```javascript
console.log(Math.random()); // 0.4235243234
```

---

피보나치 수

```javascript
let previous = 0;
let current = 1;

for (let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous; // previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp;
}
```

팩토리얼

```javascript
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}
```

거스름돈

```javascript
function calculateChange(payment, cost) {
  let change = payment - cost; // 거스름돈 총액

  const fiftyCount = Math.floor(change / 50000);
  change = change - 50000 * fiftyCount;

  const tenCount = Math.floor(change / 10000);
  change = change - 10000 * tenCount;

  const fiveCount = Math.floor(change / 5000);
  change = change - 5000 * fiveCount;

  const oneCount = Math.floor(change / 1000);
  change = change - 1000 * oneCount;

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`);
}

calculateChange(100000, 33000);
console.log("");
calculateChange(500000, 378000);
```

팰린드롬

```javascript
function isPalindrome(word) {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    let left = word[i];
    let right = word[word.length - 1 - i];
    if (left !== right) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
```

f
