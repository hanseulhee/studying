# weekly paper

- [1주차](#css의-cascading에-대해-설명해-주세요)
- [2주차](#git에서-branch-merge-방법들과-각-방법의-특징을-설명해-주세요)
- [3주차](#자바스크립트에서--와--가-어떻게-다른지-설명해-주세요)
- [4주차](#브라우저가-어떻게-동작하는지-설명해-주세요)
- [5주차](#자바스크립트-this에-대해-설명해-주세요)
- [6주차](#예시의-코드를-실행할-때-콘솔에-출력될-값과-그-이유를-설명해-주세요)
- [7주차](#리액트에서-virtual-dom이-무엇인지-이를-사용하는-이유는-무엇인지-설명해-주세요)

**1 week**

## CSS의 Cascading에 대해 설명해 주세요.

Cascading은 css 적용 순서를 의미합니다. 즉, `스타일에 대한 우선순위를 결정하는 것`을 Cascading이라고 합니다.

Cascading은 중요도, 명시도, 코드 순서로 우선순위를 결정합니다.

먼저 인라인 스타일이 Cascading에서 가장 우선순위가 높으며 다음으로 내부 스타일 시트, 외부 스타일 시트, 웹 브라우저 기본 스타일시트(user agent stylesheet) 순서로 우선순위가 정해집니다.

명시도란 명확하게 특정할 수록 우선순위가 높아집니다. !important를 쓰면 명시도를 가장 강하게 표현할 수 있습니다.

코드 순서로 보았을 때 같은 선택자를 쓰는 경우 후에 쓰는 것이 더 우선순위가 높습니다.

## position의 속성들과 각각의 특징을 설명해 주세요.

position의 속성에는 `static, relative, absolute, fixed, sticky`가 있습니다.

`static`은 position 속성의 기본 값으로 원래 있어야 할 위치에 배치됩니다.

`relative`는 상대적인 포지션으로 원래 있어야 할 위치를 기준으로 배치하며 원래 있던 공간은 기존대로 비워놓고 배치합니다.

`absolute`는 가장 가까운 부모요소를 기준으로 배치됩니다. relative와 다르게 원래 있던 공간을 차지하지 않고 배치에서 아예 빠지게 됩니다.

`fixed`는 브라우저 화면을 기준으로 배치됩니다.

`sticky`는 스크롤하지 않을 때는 static과 같지만 스크롤할 때에는 fixed와 유사하게 동작합니다. sticky는 부모요소 안에 소속되어 있다고 할 수 있습니다.

**2 week**

## Git에서 branch merge 방법들과 각 방법의 특징을 설명해 주세요.

Git에서 branch merge 방법으로 merge, rebase merge, squash merge가 있습니다.

먼저 `merge`는 Fast-Forward와 3-Way-Merge가 많이 사용됩니다. Fast-Forward는 조상 브랜치 (master or main)에 변경사항이 없다면 조상 브랜치를 바로 머지하고자 하는 브랜치로 이동해서 Merge하는 것입니다.

3-Way-Merge는 각 브랜치의 최신 commit과 공통 조상 커밋을 비교하고 새로운 Commit을 만들어 Merge하는 전략입니다.

`rebase merge`의 경우 merge와 다르게 merge commit이 생기지 않습니다. 하나의 브랜치에서 작업한 것처럼 보이므로 히스토리를 간결하게 하고 싶을 때 사용합니다.

`squash merge`는 여러 개의 commit을 하나의 commit으로 만들어줍니다.

## Git Flow 브랜치 전략에 대해 설명해 주세요.

Git Flow는 `main, develop, supporting 브랜치로 구분해 브랜치를 관리`하는 전략을 의미합니다.

먼저 `main 브랜치`는 출시 가능한 프로덕션 코드를 모아두는 브랜치이며 서비스와 직접적으로 연결되어 있어 최종적인 코드가 올라가는 브랜치입니다.

`develop 브랜치`는 개발을 위한 코드를 모아두는 브랜치로 develop에서 개발이 완료되면 main 브랜치로 머지합니다.

`supporting 브랜치`는 일정 기간 동안만 유지되는 feature, release, hotfix 브랜치로 구성됩니다. feature은 기능을 개발하는 브랜치, release는 출시 버전을 준비하는 브랜치, hotfix는 출시 버전에서 발생한 버그를 수정하는 브랜치 입니다.

**3 week**

## 자바스크립트에서 == 와 === 가 어떻게 다른지 설명해 주세요.

`==`는느슨한 같음(loose equality)으로 두 값이 같은지 비교합니다.

```javascript
const a = 1;
const b = "1";
console.log(a == b); // true
```

`===`는 엄격한 같음(strict equality)으로 두 값이 같은지 비교합니다.이는 값과 자료형까지 고려합니다.

```javascript
const a = 1;
const b = "1";
console.log(a === b); // false
```

이에 어떤 비교를 위해서든 `===` 연산자를 사용하는 것을 권장합니다.

## 자바스크립트에서 얕은 복사(Shallow Copy)와 깊은 복사(Deep Copy)에 대해 설명해 주세요.

`얕은 복사`는 객체의 메모리 주소값을 복사합니다.

`깊은 복사`는 실제 값을 복사합니다.

**원시 값**을 변수에 할당하면 변수에는 **실제 값**이 저장됩니다. (깊은 복사)

**객체**를 변수에 할당하면 변수에는 **참조 값**이 저장됩니다. (얕은 복사)

원시 타입 : number, bigInt, string, boolean, null, undefined, symbol
객체 타입 : 원시타입 외에 모든 데이터

**4 week**

## 브라우저가 어떻게 동작하는지 설명해 주세요.

브라우저란 웹페이지, 이미지 등 콘텐츠를 수신, 전송, 표현하는 소프트웨어입니다. 인터넷에 접속하기 위해 사용하는 크롬, 사파리 등이 브라우저입니다.

사용자가 주소창에 url을 입력하면 DNS를 조회해 HTML 페이지가 있는 IP주소를 알아냅니다.

IP 주소를 알고난 뒤, 브라우저는 서버와 TCP 핸드쉐이크를 통해 연결을 설정합니다.

웹서버로 한 번 연결이 성립되고 나면, 이제 브라우저는 HTTP GET request를 보냅니다. 브라우저가 데이터 덩어리를 받으면, 수신된 정보를 분석하고 화면에 보여주기까지 [렌더링 과정](../WhatEventBubbling/README.md/#렌더링)을 거치게 됩니다.

관련 - [주소창에 www.google.com을 입력했을 때 일어나는 과정](../WhatEventBubbling/README.md/#주소창에-wwwgooglecom을-입력했을-때-일어나는-과정)

**5 week**

## 자바스크립트 this에 대해 설명해 주세요.

this란 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수입니다.

웹 브라우저, 전역 환경에서 this 는 전역 객체인 window 가 바인딩됩니다.

```js
console.log(this === window); // true
```

## HTTP 메소드에 대해 설명해 주세요.

HTTP 메소드란 클라이언트가 웹 서버에게 사용자 리퀘스트의 목적이나 종류를 알리는 수단입니다.

대표적으로 GET, POST, PUT, DELETE 가 있습니다.

POST를 제외하고 GET, PUT, DELETE 는 멱등성을 가집니다. (동일한 리퀘스트를 반복해 전송해도 동일한 응답이 돌아온다,)

**6 week**

## 예시의 코드를 실행할 때, 콘솔에 출력될 값과 그 이유를 설명해 주세요.

```js
// 1번
let num = 1;

// 2번
setTimeout(() => {
  num = 2;
}, 0);

// 3번
num = 3;

// 4번
console.log(num);
```

1번 실행으로 num 에 1이 할당됩니다.

2번 실행으로 setTimeout 을 Web API(NodeJS의 경우 Timers 모듈)가 처리하도록 넘깁니다. 이때 중요한 건, 즉시 setTimeout 에 있는 callback을 실행할지 판단하지 않습니다. 따라서 num 은 여전히 1인 상태입니다. Web API에서는 setTimeout 작업이 완료되면 setTimeout callback 함수를 Callback Queue에 등록합니다.

3번 실행으로 num 에 3이 재할당됩니다.

4번 실행으로 화면에 3이 출력됩니다.

이렇게 모든 실행을 마치면 그 후에 Event Loop를 돌아 Callback Queue에 있는 callback 함수를 Call Stack으로 가져와 실행하고 num 은 2가 재할당됩니다.

## AJAX에 대해 설명해 주세요.

AJAX는 Asynchronous JavaScript And XML의 줄임말입니다. 이는 자바스크립트를 사용해서 비동기적으로 리퀘스트를 보내고 리스폰스를 받는데 기반이 되는 기술들의 집합을 의미합니다.

**7 week**

## 리액트에서 Virtual DOM이 무엇인지, 이를 사용하는 이유는 무엇인지 설명해 주세요.

Virtual DOM (VDOM)은 UI의 이상적인 또는 가상적인 표현을 메모리에 저장하고 ReactDOM과 같은 라이브러리에 의해 실제 DOM과 동기화하는 프로그래밍 개념입니다. 이 과정을 재조정(Reconciliation)이라고 합니다.

이렇게 연산이 끝난 뒤 최종적인 변화를 실제 DOM에 반영해서 여러 번 reflow, repaint가 발생할 수 있는 작업을 한번으로 줄여줍니다. 또한 Virtual DOM은 변화에 대한 관리를 자동화하고 추상화해서 작업의 편의성을 제공합니다.

## 리액트에서 배열을 렌더링할 때 key를 써야 하는 이유에 대해 설명해 주세요.

key는 리액트가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다. key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.

---

# JavaScript

[태그 선택](#id로-태그-선택하기)

[이벤트](#이벤트)

[DOM](#dom)

[노드](#dom-트리)

[HTML 속성](#html-속성)

[스타일 다루기](#스타일-다루기)

[이벤트](#이벤트-핸들러)

[마우스](#mouse)

[키보드](#키보드)

[input](#input)

[모던 자바스크립트](#모던-자바스크립트)

---

**태그 선택**

## id로 태그 선택하기

id는 고유한 값이므로 id에 해당하는 태그 하나

```js
const myTag = document.getElementById("btns");

console.log(myTag);
```

존재하지 않는 id값으로 태그를 선택하면 그 값은 null이 된다.

## class로 태그 선택하기

```js
const myTags = document.getElementsByClassName("btns");

console.log(myTags);
```

유사배열

존재하지 않는 class 값으로 태그를 선택하면 그 값은 빈 HTMLCollection이 된다.

## 태그이름으로 태그 선택하기

```js
const btns = document.getElementsByTagName("button");

console.log(btns); // HTML 안에 있는 모든 button 태그를 선택하게 됌
```

## css 선택자로 태그 선택하기

```js
const myTag = document.querySelector("#myNumber"); // 가장 첫 번째 태그가 선택

const myTags = document.querySelectorAll(".btn"); // 모든 요소
// 요소가 하나밖에 없더라도 요소가 하나인 NodeList를 반환한다.
```

**이벤트와 버튼 클릭**

## 이벤트

**이벤트 핸들링**

이벤트가 발생했을 때 어떤 특별한 동작을 하도록 이벤트를 다루는 것

**이벤트 핸들러**

구체적인 동작들을 코드로 표현한 것, 이벤트 리스너(Event Listener)라고도 부른다.

```js
const myBtn = document.querySelector("#grade");

myBtn.onclick = function () {
  alert("정답이다");
};
```

**브라우저**

window도 객체다. (전역객체)

## DOM

Document Object Model

문서 객체 모델이다.

즉, HTML 문서 전체를 `객체`로 표현한 것

### DOM 트리

각 객체를 `노드` 라고 칭함 (형제노드, 부모노드, 자식노드)

**자식 요소 노드**

```js
const myBtn = document.querySelector("#content");
console.log(myBtn.children); // 자식 요소들
console.log(myBtn.firstElementChild); // 첫 번째 자식 요소
console.log(myBtn.lastElementChild); // 마지막 자식 요소
```

**부모 요소 노드**

```js
const myBtn = document.querySelector("#content");
console.log(myBtn.parentElement); // 부모 요소 하나
```

**형제 요소 노드**

```js
const myBtn = document.querySelector("#content");
console.log(myBtn.previousElementSibling); // 이전 혹은 좌측에 있는 요소 하나
console.log(myBtn.nextElementSibling); // 다음 혹은 우측에 있는 요소 하나
```

## 요소 노드 주요 프로퍼티

**innerHTML**

html 코드를 문자열로 리턴해준다.

html을 수정할 때 자주 사용된다.

```js
element.innerHTML;
```

**outerHTML**

요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴해준다.

```js
element.outerHTML;
```

-> 둘 다 줄바꿈, 띄어쓰기 다 포함되어 나온다.

**textContent**

태그 부분만 제외해 텍스트만 가져온다.

```js
element.textContent;
```

태그 처럼 보이는 부분도 태그가 아닌 일반 텍스트로 처리 된다.

## 노드 삭제

**remove**

```js
todo.remove();

todo.children[2].remove(); // 세번째 요소 삭제
```

## 노드 이동

append, prepend, after, before

```js
todo.append(tomorrow.children[1]); // tomorrow의 두번째 요소가 todo로 이동함
```

```js
todo.append(tomorrow.children[1]); // tomorrow의 두번째 요소가 todo로 이동함
```

```js
tomorrow.children[1].after(todo.children[1]); // tomorrow의 두번째 요소가 todo로 이동함
```

## HTML 속성

속성에 접근하기

```js
tomorrow.getAttribute("href");
```

속성 추가 (수정)하기

```js
tomorrow.setAttribute("href");
```

속성 제거하기

```js
tomorrow.removeAttribute("href");
```

-> 모두 대소문자 상관 없음

## 스타일 다루기

```js
tomorrow.children[1].style.backgroundColor = "#DDDDDD";
```

카멜표기법 써야함

스타일 우선순위가 바뀌고 불필요한 코드들이 많아질 수 있음

따라서

**className**

```js
tomorrow.children[1].classNamer = "스타일속성값";
```

but 기존 스타일 속성은 없어지고 스타일속성값으로 아예 바뀜

**classList**

add, remove, toggle

```js
tomorrow.children[1].classList.add("done");
```

## 이벤트 핸들러

```js
btn.addEventListener("click", 이벤트핸들러);
```

```js
btn.removeEventListener("click", 이벤트핸들러);
```

## 이벤트 객체

target - 이벤트가 발생한 요소

currentTarget - 이벤트 핸들러가 등록된 요소

type - 이벤트 이름 (click, mouseup 등)

[더 많은 이벤트](https://developer.mozilla.org/en-US/docs/Web/API/Event)

[마우스 이벤트](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)

[키보드 이벤트](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)

## 이벤트 버블링

> 물 속에서 올라오는 버블링 같다. 이벤트 버블링

하나의 요소에 이벤트가 발생하게 되면 부착된 이벤트 핸들러가 작동하게 되고 같은 타입의 이벤트에 한해서 부모요소도 동작하게 된다.
최상단인 window를 만날 때까지 이 과정이 반복된다.

즉 이벤트가 상위요소로 전파되는 것을 의미한다.

이를 멈추기 위해서는

```js
e.stopPropagation();
```

but 가능한 멈추는 걸 권장하진 않음.

## 이벤트 캡처링

이벤트가 하위요소로 전파되는 것을 의미한다.

캡쳐링 단계에서 이벤트 핸들러를 동작시키는 방법
capture:true or true를 작성한다.

```js
elem.addEventListener(
  "click",
  (e) => alert(`캡쳐링 단계: ${elem.tagName}`),
  capture:true
);
```

## 이벤트 위임

자식요소의 이벤트를 부모요소에 위임한 것

## mouse

**mousemove**

마우스 포인터가 이동할 때

clientX, pageY, offsetX 등등을 자주 사용함

**mouseover**

마우스 포인터가 요소 밖에서 안으로 이동할 때

**mouseout**

마우스 포인터가 요소 안에서 밖으로 이동할 때

## 키보드

**KeyboardEvent.key**

이벤트가 발생한 버튼의 값

**KeyboardEvent.code**

이벤트가 발생한 버튼의 키보드에서 물리적인 위치

## input

**focusin**

요소에 포커스가 되었을 때

**focusout**

요소에 포커스가 빠져나갈 때

**focus**

요소에 포커스가 되었을 때 (버블링 x)

**blur**

요소에 포커스가 빠져나갈 때 (버블링 x)

**input**

사용자가 입력을 할 때

**change**

요소의 값이 변했을 때

---

## 모던 자바스크립트

```js
const x = "3";
const y = 5;

console.log(x * y); // 15
```

자바스크립트는 연산할 때 상황에 따라 데이터 타입이 유연하게 변하는 특징이 있다.

곱셈의 경우 연산 대상을 **모두 숫자 형**으로 형 변환을 한 다음 연산을 수행한다.

## falsy 값

null, '', 0, undefined, false, NaN

## AND, OR

자바스크립트에서 AND 연산자는 왼쪽 값이 true 면 오른쪽 값을 리턴한다.
왼쪽 값이 false 면 왼쪽 값을 리턴한다.

OR 연산자는 왼쪽 값이 true 면 왼쪽 값을 리턴한다.
왼쪽 값이 false 면 오른쪽 값을 리턴한다.

```js
console.log(true && false); // false
console.log("sh" && "hi"); // hi
console.log(null && undefined); // null

console.log(0 || true); // true
console.log({} || 123); // {}
```

(조건식으로 활용 가능)

```js
console.log(("codeit" && 123) || null);
// 아래처럼 계산
console.log(("codeit" && 123) || null);
```

AND 와 OR 연산자 사이에서는 AND 연산자의 우선순위가 더 높다.

## this

웹 브라우저에서 this가 사용될 때는 전역 객체, Window 객체를 가지게 된다. 그러나 객체의 메소드를 정의하기 위한 함수 안에선 메소드를 호출한 객체를 가리키게 된다.

arrow function에서 this의 값은 일반함수처럼 호출한 대상에 따라 상대적으로 변하지 않고 arrow function이 선언되기 직전에 유효한 this 값과 똑같은 값을 가지고서 동작한다.

따라서 만약 메소드를 만들 때 this에 메소드를 호출한 객체를 가리키고 싶다면 arrow function 보다는 일반 함수를 사용한다.

## Spread

ES2015에서 Spread 구문이 등장했음

```js
const numbers = [1, 2, 3];

console.log(...numbers); // 1 2 3
```

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]
```

### 구조 분해

```js
const rank = ["슬희", "머", "머라"];

const [macbook, ipad, airpods] = rank; // 할당되는 값이 배열이어야 함

consold.log(macbook); // 슬희
```

```js
let macbook = "슬희";
let ipad = "머";

[macbook, ipad] = [ipad, macbook]; // 교환
```

```js
const macbook = {
  title: "맥북",
  price: 3900000,
  memory: "16GB",
};

const { title, price } = macbook;

console.log(title); // 맥북
console.log(price); // 3900000
```

## 배열 관련 메소드

forEach, map, filter, find, some, every, reduce, sort, reverse, Set, Map,

---

## 웹 브라우저와 서버

## fetch

서버로 request를 보내고 response를 받는다.

```js
fetch("url")
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });
```

## then

then -> 콜백을 등록해주는 메소드, promise 객체의 메소드

promise가 fulfilled 상태가 되었을 때 then 메소드로 등록했던

then을 통해 response가 왔을 때 실행할 콜백을 등록할 수 있다.

새로운 Promise 객체를 리턴한다.

## 비동기

### Promise

작업에 관한 상태 정보를 가지고 있는 객체

pending (진행중)
fulfilled (성공) (+ 작업 성공 결과) (response를 정상적으로 받았을 때)
rejected (실패) (+ 작업 실패 정보)

### Promise Chaining

Chaining: 이어 붙이기, 연결하기

---

## 인증, 인가

인증: request를 보낸 user가 누구인지 파악하는 것
인가: request 내용을 요청할 권한이 있는가를 판단하는 것

ex) 게시물

서버가 삭제 request를 받음 > 서버는 어떤 user가 보냈는 지 확인 > user가 관리자 또는 게시글 작성자인 지 확인 > 인증서가 없거나 관리자, 작성자가 아니라면 실패 response를 돌려줌

만약 맞다면 > 요청대로 게시글 삭제해줌

이때 어떤 user인 지 확인하는 게 -> 인증
해당 user가 게시글을 삭제할 권한이 있는 지 확인하는 게-> 인가

## 토큰 기반 인증

**인증 토큰 (access token)**

: 유저에 대한 정보를 암호화한 문자열

JWT (JSON Web Token) 을 많이 사용

서버가 토큰을 발행하면 클라이언트에게 전달
response body에 토큰을 저장해 클라이언트에 전달하는 게 일반적
토큰을 돌려받을 때도 authorization 헤더로 돌려받는 게 일반적

로그아웃 하고 싶으면 클라이언트에서 직접 삭제해주면 된다.

**refresh 토큰**

refresh 토큰은 access 토큰이 만료됐을 때, 이메일 비밀번호를 사용하지 않고 access 토큰을 새롭게 발급받는 데 사용되는 토큰이다.

사용자가 로그인을 하기 위해 request로 서버에 이메일, 비번을 보냄 > 서버가 확인 > 서버는 클라이언트에 access와 refresh 토큰을 보내줄 수 있음

access 토큰이 만료되면 클라이언트는 access 토큰을 새롭게 발급받는 URL에 GET을 보냄 (body에 refresh 토큰을 함께 해서) > 서버는 refresh 토큰이 유효한 지 확인 > 새로운 access 토큰 발급 > response로 클라이언트에게 돌려줌

## JWT

JSON 형식의 데이터를 문자열로 인코딩한 토큰

## 세션 VS 토큰 기반 인증

- 효율성

세션 기반 인증를 사용하면 서버는 항상 로그인 정보를 저장하고 매 request의 유저가 누구인지를 그 정보와 비교해야 됌 그런 면에서 토큰 기반 인증이 효율성 good

- RESTful API

RESTful API에 부합하기 위해서는 서버가 상태 정보를 저장하지 않는 stateless 한 특성이 있어야 함. 서버는 클라이언트에서 보내는 정보만으로 충분히 상태를 파악할 수 있어야 하는데 그렇게 본다면 토큰 기반인증이 세션보다 더 어울린다.

- 무효화

세션 기반 인증은 특정 세션을 쉽게 무효화 시킬 수 있으나 토큰 기반은 따로 서버가 상태 정보를 저장하지 않기 때문에 무효화 하는 게 복잡하다.
