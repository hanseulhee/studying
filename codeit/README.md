# weekly paper

- [1주차](#css의-cascading에-대해-설명해-주세요)
- [2주차](#git에서-branch-merge-방법들과-각-방법의-특징을-설명해-주세요)
- [3주차](#자바스크립트에서--와--가-어떻게-다른지-설명해-주세요)
- [4주차](#브라우저가-어떻게-동작하는지-설명해-주세요)

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

---

# JavaScript

[태그 선택](#id로-태그-선택하기)

[이벤트](#이벤트)

[DOM](#dom)

[노드](#dom-트리)

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
