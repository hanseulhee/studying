> 해당 문서는 **코드잇 스프린트**에 관련한 내용을 담고 있습니다.

[CSS의 Cascading에 대해 설명해 주세요.](#css의-cascading에-대해-설명해-주세요)

[position의 속성들과 각각의 특징을 설명해 주세요.](#position의-속성들과-각각의-특징을-설명해-주세요)

[Git에서 branch merge 방법들과 각 방법의 특징을 설명해 주세요.](#git에서-branch-merge-방법들과-각-방법의-특징을-설명해-주세요)

[Git Flow 브랜치 전략에 대해 설명해 주세요.](#git-flow-브랜치-전략에-대해-설명해-주세요)

[자바스크립트에서 == 와 === 가 어떻게 다른지 설명해 주세요.](#자바스크립트에서--와--가-어떻게-다른지-설명해-주세요)

[자바스크립트에서 얕은 복사(Shallow Copy)와 깊은 복사(Deep Copy)에 대해 설명해 주세요.](#자바스크립트에서-얕은-복사shallow-copy와-깊은-복사deep-copy에-대해-설명해-주세요)

[브라우저가 어떻게 동작하는지 설명해 주세요.](#브라우저가-어떻게-동작하는지-설명해-주세요)

[자바스크립트 this에 대해 설명해 주세요.](#자바스크립트-this에-대해-설명해-주세요)

[예시의 코드를 실행할 때, 콘솔에 출력될 값과 그 이유를 설명해 주세요.](#예시의-코드를-실행할-때-콘솔에-출력될-값과-그-이유를-설명해-주세요)

[AJAX에 대해 설명해 주세요.](#ajax에-대해-설명해-주세요)

[리액트에서 Virtual DOM이 무엇인지, 이를 사용하는 이유는 무엇인지 설명해 주세요.](#리액트에서-virtual-dom이-무엇인지-이를-사용하는-이유는-무엇인지-설명해-주세요)

[리액트에서 배열을 렌더링할 때 key를 써야 하는 이유에 대해 설명해 주세요.](#리액트에서-배열을-렌더링할-때-key를-써야-하는-이유에-대해-설명해-주세요)

[리액트 생명주기(life cycle)에 대해 설명해 주세요.](#리액트-생명주기life-cycle에-대해-설명해-주세요)

[본인이 생각하는 CSS-in-JS의 장점과 단점을 설명해 주세요.](#본인이-생각하는-css-in-js의-장점과-단점을-설명해-주세요)

[Presentational & Container 디자인 패턴에 대해 설명해 주세요.](#presentational--container-디자인-패턴에-대해-설명해-주세요)

[JavaScript만 사용하는 것과 비교해 TypeScript를 사용하는 이유에 대해 설명해 주세요.](#javascript만-사용하는-것과-비교해-typescript를-사용하는-이유에-대해-설명해-주세요)

[TypeScript의 동작 원리에 대해 설명해 주세요.](#typescript의-동작-원리에-대해-설명해-주세요)

[리액트만 사용할 때와 비교해 Next.js를 사용하는 이유에 대해 설명해 주세요.](#리액트만-사용할-때와-비교해-nextjs를-사용하는-이유에-대해-설명해-주세요)

[React Query가 만들어진 이유와 React Query를 사용할 때 얻게 되는 이점에 대해 설명해 주세요.](#react-query가-만들어진-이유와-react-query를-사용할-때-얻게-되는-이점에-대해-설명해-주세요)

[서버 상태와 클라이언트 상태의 차이에 대해 설명해 주세요.](#서버-상태와-클라이언트-상태의-차이에-대해-설명해-주세요)

[husky](#husky)

[인증, 인가](#인증-인가)

---

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

**8 week**

## 리액트 생명주기(life cycle)에 대해 설명해 주세요.

컴포넌트를 생성할 때 최초 한번만 실행하고 싶은 코드, 서버에서 데이터를 받아오면 업데이트하고 싶은 코드 등 특정 시점에 코드를 실행할 필요가 있습니다. 리액트는 컴포넌트에서 생명주기 메소드를 활용해 특정 시점에 코드를 실행할 수 있도록 지원하고 있습니다.

## 웹 페이지 렌더링 방식 CSR, SSR, SSG 각각의 특징과 각 방식을 어떤 상황에 사용하면 좋을지 설명해 주세요.

**CSR (Client-side Rendering)**
: CSR은 웹 브라우저에서 자바스크립트로 HTML을 만들어 렌더링하는 방식을 말합니다.

**장점**

페이지의 전환 속도가 SSR에 비해 빠르고, 깜빡임 없이 부드럽게 페이지가 바뀝니다.
자바스크립트에서 HTML을 만드는 연산작업이 서버에 집중되지 않기 때문에 서버에 부하가 적게 발생합니다.

**단점**

SPA(Single Page Application)의 경우 처음 페이지 접근시 서버로부터 전체 페이지에 대한 자바스크립트 번들파일, CSS 파일을 받아야 하므로 페이지를 만들고 유저가 사용하기 까지 시간이 SSR에 비해 오래 걸립니다.
검색엔진에서 자동화된 로봇인 ‘크롤러’로 웹 사이트를 읽는데, CSR은 자바스크립트를 실행해서 동적으로 콘텐츠를 생성해야 데이터를 수집할 수 있기 때문에 크롤러가 원하는 수집을 할 수 없는 경우가 있어 검색엔진 최적화에 불리한 점이 있습니다.

**활용**

유저의 상호작용이 많고, 유저의 개인정보를 기준으로 서비스하는 페이지에 적합합니다.
예시로 유저 프로필 페이지나, 결제 내역, 어드민 전용 페이지가 있습니다.

**SSR (Server-side Rendering)**
: SSR은 서버에서 리퀘스트에 맞는 HTML을 만들어서 리스폰스로 보내주는 방식을 말합니다.

**장점**
크롤러에게 완성된 페이지를 전달하기 때문에 검색엔진 최적화에 유리합니다.
처음 페이지 접근시 서버로부터 해당 페이지에 필요한 데이터들만 전달받고 만들어진 HTML을 전달 받기 때문에 유저가 사용하기 까지 걸리는 시간이 CSR에 비해 빠릅니다.

**단점**

서버로 짧은 시간에 많은 요청이 있는 경우 HTML을 만드는 연산작업이 서버에 많은 부하를 줄 수 있습니다.
웹 어플리케이션 내에서 페이지 전환시 전체 페이지가 사라지고 새로운 페이지 HTML을 받으면서 깜빡임이 발생해 사용자 경험을 헤칠 수 있습니다.

**활용**

페이지 내용에 데이터베이스에 있는 데이터가 필요하고, 검색엔진 최적화가 필요한 페이지에 적합합니다.
예시로 가격이나 할인율이 변하기 쉽고, 검색엔진 최적화가 필요한 상품 상세보기 페이지가 있습니다.

**SSG (Static Site Generation)**
: SSG는 미리 HTML 파일을 만들어서 서버를 배포하고, 서버에 리퀘스트가 들어오면 이미 만들어진 HTML 파일을 읽어서 리스폰스로 보내주는 방식을 말합니다.

**장점**
미리 만들어 둔 페이지를 브라우저에 제공하므로 렌더링 속도가 매우 빠릅니다.
SSR과 마찬가지로 완성된 페이지를 크롤러가 수집하므로 검색엔진 최적화에도 유리합니다.

**단점**

모든 url에 대해 개별 HTML 파일을 생성해야 해서 url을 미리 예측할 수 없거나 양이 너무 많으면 적용이 어렵습니다.

**활용**

페이지의 내용에 있는 데이터가 자주 바뀔 필요 없고, 검색엔진 최적화가 필요한 페이지에 적합합니다.
예시로 블로그나 뉴스같은 정보성 페이지가 있습니다.

**9 week**

## 본인이 생각하는 CSS-in-JS의 장점과 단점을 설명해 주세요.

**장점**

- 지역 스코프 스타일 : CSS로 스타일링 할 경우 전역 스코프 스타일에 영향을 미치기 때문에 클래스 이름이 중복되는 일이 없도록 신경써야하고 어떤 CSS 파일에서 스타일링 적용된 것인지 찾는 것도 어려울 수 있습니다.
  CSS-in-JS는 기본적으로 스타일을 지역 스코프로 지정하여 이 문제를 완전히 해결합니다.

- 자바스크립트 변수를 style에 사용 : 스타일 규칙을 작성할 때 스크립트 변수를 참조할 수 있습니다. 동일한 상수를 CSS 변수와 자바스크립트 상수로 나눠 정의할 필요가 없기 때문에, 때에 따라 스타일에서 중복을 줄일 수 있습니다.

**단점**

- CSS-in-JS는 런타임 오버헤드를 더합니다 : 컴포넌트를 렌더링 할 때 CSS-in-JS 라이브러리는 `document`에 삽입할 수 있는 일반 CSS로 스타일 데이터를 변환해야 합니다. 이 과정에서 추가 CPU를 차지하고, 컴포넌트의 복잡도에 따라 성능에 영향을 줍니다.

- CSS-in-JS는 번들 크기를 늘립니다 : 사용자는 CSS-in-JS 라이브러리를 다운로드 해야 합니다. 용량이 엄청 크진 않지만 라이브러리에 따라서 8~13kB 정도의 용량이 추가됩니다.

- CSS-in-JS를 사용하면 특히 SSR 또는 컴포넌트 라이브러리를 사용할 때 오류가능성이 커집니다.

## Presentational & Container 디자인 패턴에 대해 설명해 주세요.

Presentational & Container 디자인 패턴은 리액트 컴포넌트 중 UI를 표현하는 코드와 기능을 동작하게하는 코드를 분리하기 위한 고민으로 부터 만들어진 패턴입니다.

Presentational & Container 패턴은 코드의 ‘관심사’를 크게 2가지로 나눠서 기능을 담당하는 컴포넌트와 UI를 담당하는 컴포넌트로 나누어서 작성하는 패턴을 말합니다.
컴포넌트의 기능을 담당하는 상태, 이벤트 관련 코드와, UI를 담당하는 마크업,스타일 관련 코드를 분리한 다음 요구사항에 맞게 합성하여 사용하므로서 재사용성이 높아지고 “관심사 분리”의 이점을 누리게 된다.

**12 week**

## JavaScript만 사용하는 것과 비교해 TypeScript를 사용하는 이유에 대해 설명해 주세요.

JavaScript는 동적 타입 언어로 실행 도중에 예상치 못한 타입이 들어와 타입 에러를 발생하는 경우가 있습니다. 또한 추가적인 설명이 없다면 함수의 파라미터에 어떤 타입의 값이 들어가야 하고 리턴되는 값은 어떤 타입이어야 하는지 구체적인 코드를 봐야 이해할 수 있습니다.

반대로 TypeScript는 점진적 타입 언어 입니다. TypeScript는 컴파일 단계에서 오류를 포착할 수 있고, 코드를 통해 어떤 타입의 값이 필요한지 쉽게 파악할 수 있어 코드의 흐름을 이해하기 쉽고 협업에 도움이 됩니다.

## TypeScript의 동작 원리에 대해 설명해 주세요.

1. 타입스크립트 코드 → 타입스크립트 AST
2. 타입스크립트 AST 검사 (타입 검사)
3. 타입스크립트 AST → 자바스크립트 코드

타입스크립트 컴파일은 타입스크립트 컴파일러가 직접 수행하며, 그 결과 자바스크립트 코드가 생성됩니다.

**13 week**

## 리액트만 사용할 때와 비교해 Next.js를 사용하는 이유에 대해 설명해 주세요.

기본적으로 순수 리액트는 SPA(Single Page Application)이고, CSR(Client Side Rendering)을 합니다. 웹 사이트를 요청할 때 현재 사용하지 않지만 앱에 필요한 모든 컴포넌트를 다운로드하고, 빈 html을 가져와 script를 로딩합니다. 이로 인해 앱의 첫 로딩 시간이 오래 걸려 유저 경험을 헤치고, SEO(Search Engine Optimization)에 취약 하다는 단점이 있습니다.

**Next.js가 제공하는 이점**

**프리렌더링**

기본적으로 프리렌더링을 지원합니다. 데이터의 성격에 따라 getStaticProps를 활용해 빌드 단계에서 데이터를 받아 정적 생성 또는 SSR(Server Side Rendering)할 수 있습니다. 이를 통해 이미 렌더링된 html 문서를 가져올 수 있어서 첫 로딩이 빨라져 유저 경험에 좋고, SEO에도 강점이 있습니다.

**이미지 최적화**

Image 컴포넌트를 통해 필요한 크기에 맞는 이미지를 제공하고, lazy-loading을 통해 필요한 순간 이미지를 가져와 최적화 합니다.

**Client side navigation**

Link 컴포넌트를 통해 페이지 이동할 때 페이 전체를 불러오는 것이 아니라 필요한 데이터만 가져오기 때문에 이동 속도도 빨라지고, 넘어가는 동작도 부드럽습니다.

**코드 스플리팅**
Webpack과 같은 번들러 설정과 import() 문법, lazy, Suspense 사용없이도 빌드 과정에서 페이지 단위로 자동으로 코드 스플리팅을 지원합니다.

**개발자 경험**
파일 시스템 라우팅, 리다이렉트, 스타일링을 위한 환경 설정(Sass, CSS Modules, Tailwind 등)등을 제공해 좋은 개발자 경험을 제공합니다.

**19 week**

## React Query가 만들어진 이유와 React Query를 사용할 때 얻게 되는 이점에 대해 설명해 주세요.

React 애플리케이션을 개발하면서 데이터를 가져오고 업데이트하는 등 복잡한 상태를 관리해야 할 때가 많습니다. 이때 데이터 요청 및 상태 업데이트의 복잡성, 중복 코드의 증가, 오류 처리 등 문제를 낳게됩니다.

React Query는 이러한 문제를 해결하고자 등장했습니다.

React Query를 사용할 때 얻게 되는 이점으로는 **간편한 데이터 관리가 가능합니다.**

React Query는 API 요청과 데이터 캐싱, 상태 관리 등을 자동화하여 개발자들이 데이터를 쉽게 가져오고 업데이트할 수 있도록 도와줍니다. 캐싱이 자동으로 이루어지고 옵션으로 설정가능하기 때문에 잦은 요청을 줄이면서도 필요한 만큼 자주 캐시를 최신화되도록 해서 사용자에게 최적화된 정보를 제공할 수 있습니다.

**상태 관리 및 오류 처리의 용이성에 유리합니다.**

React Query는 데이터 요청 및 업데이트 중에 발생하는 오류를 처리하고, 로딩 상태 및 성공 또는 실패 상태를 쉽게 확인할 수 있습니다. 이는 개발자들이 에러 핸들링 및 데이터 상태를 효율적으로 관리할 수 있도록 돕습니다.

**사용자 경험 향상을 위한 기능을 제공합니다.**

refetchOnWindowFocus, retry 등으로 UX 개선에 도움이 되는 기능을 구현하기 쉽게 제공합니다.

## 서버 상태와 클라이언트 상태의 차이에 대해 설명해 주세요.

**서버 상태**

원격 저장: 클라이언트가 저장 방법이나 내용을 결정하지 않습니다.

비동기식: 클라이언트가 서버로부터 데이터를 수신하는 데 시간이 다소 걸립니다.

많은 사용자가 소유: 여러 사용자가 데이터를 변경할 수 있습니다.

**클라이언트 상태**

임시: 브라우저를 닫으면 사라지며 일시적입니다.

동기식: 항상 액세스할 수 있습니다.

클라이언트 소유: 원래 브라우저로 제한됩니다.

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

## 쿠키

- 언제

웹사이트에 로그인 > 로그인을 성공적으로 하면 서버는 클라이언트에 일종의 인증서같은 걸 보내줌 > 클라이언트는 이걸 가지고 오면 어떤 사람인 지 구분하는데 클라이언트는 리퀘스트를 보낼 때마다 **이 인증서를 리퀘스트에 함께 포함해서 보내야 함**

이럴 때 쿠키를 사용한다.

- 특징

서버로부터 리스폰스로 쿠키를 받으면 클라이언트에서 따로 작업을 해주지 않아도 알아서 웹 브라우저가 저장하고 리퀘스트를 보낼 때도 알아서 보내준다.

수명을 지정한다. 수명이 끝난 쿠키는 알아서 지워진다.

## HttpOnly

로그인 정보 같은 민감한 정보는 되도록이면 자바스크립트로 조작하지 말아야 한다. HttpOnly를 사용하면 쿠키를 자바스크립트로 사용하지 못하게 막을 수 있다.

## SameSite

쿠키사용 시 제3자 사이트에서 쿠키를 보내지 못하게 SameSite를 지정할 수 있다.

## Expires 와 Max-Age

쿠키의 수명을 지정하는 속성이다. Expires로 만료될 시기를 지정하거나 Max-Age 로 쿠키의 수명을 지정할 수 있다.

## 개인정보

쿠키를 사용하는 경우 개인정보 이용목적을 안내하고 사용자의 동의를 받는 등의 절차가 필요하다. (GDPR의 규정에 따름)

## husky

husky를 사용하면 커밋을 하기 전이나 푸시를 하기 전에 포매터와 린터를 실행해서 자동으로 코드를 검사하도록 할 수 있다.

깃 훅을 사용할 수도 있지만 깃 훅 기능을 손쉽게 쓰도록 도와주는 NPM 패키지다.
