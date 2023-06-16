# What Event Bubbling

뭐야 ? 뭐야 ? 이건 뭐야 ?

## CSR / SSR

### 렌더링

CSR(Client-side Rendering), SSR(Server-side Rendering)에 공통적으로 **Rendering** 이 들어간다.

렌더링이란 개발자가 작성한 문서가 브라우저에 출력되는 과정을 말한다.

브라우저마다 렌더링을 수행하는 렌더링 엔진을 가지고 있다. (ex 크롬 - 블링크, 사파리 - 웹킷)

### 렌더링 과정

1. [DOM](#dom) 트리 생성

<img src="https://blog.kakaocdn.net/dn/Tznkz/btq3UsUBn0K/JZP3rvN97XgT9Qq0fPSil0/img.png" />

<img src="https://velog.velcdn.com/images/tnehd1998/post/0cee5616-2c9a-4012-ac13-3cbe3e85d7f9/image.png" />

브라우저가 **HTML의 원시 바이트**를 읽어와 HTML에 정의된 인코딩에 따라 개별 **문자**로 변환한다.

<img src="https://velog.velcdn.com/images/tnehd1998/post/ef5f08e1-f991-442c-9bcb-45df60280a81/image.png" />

브라우저가 **문자열**을 [W3C](#w3c) 표준에 지정된 **고유 토큰**으로 반환한다.

방출된 토큰은 해당 속성 및 규칙을 정의하는 **객체**로 변환된다.

HTML 마크업에 정의된 여러 태그 간의 관계를 해석하여 트리 구조로 연결된다.

2. CSSOM 트리 생성

동일한 방법으로 CSSOM (CSS Object Model) 트리를 생성한다.

3. Rendering Tree 생성

<img src="https://velog.velcdn.com/images/zaman17/post/c676ccc7-e216-43c4-94a6-b31f6e2d128f/image.png" />

DOM 트리와 CSSOM 트리가 만들어지면 둘을 결합해 렌더링 트리 (Rendering Tree)를 생성한다.

렌더링 트리에는 페이지를 렌더링 하는데 필요한 노드만 포함된다.

4. 레이아웃

렌더링 트리의 노드들에 대한 위치와 크기를 계산한다.

페이지 상에 존재하는 모든 객체의 정확한 위치와 크기를 계산한다.

5. 페인팅 or 래스터화

렌더링 트리의 각 노드를 화면의 실제 픽셀로 변환한다.

레이아웃 단계에서 계산된 각 노드들의 위치, 색상 등 스타일을 실제 픽셀로 변환하게 된다.

### 리플로우

웹 페이지의 변경이 일어나면 변경으로 영향을 받게되는 모든 노드에 대해 렌더링 트리 생성과 레이아웃 과정을 다시 수행하는 데 이를 리플로우 (Reflow) 라고 한다.

**리플로우가 일어나는 대표적인 속성**

```
position, width, height, margin, padding, border, border-width,font-size, font-weight, line-height, text-align, overflow
```

### 리페인트

리플로우를 수행한 후 그 결과를 화면에 그려지기 위해 다시 페인팅 단계를 거쳐야 하는 데 이를 리페인트 (Repaint) 라고 한다.

항상 리플로우-리페인트가 일어나는 것은 아니고 레이아웃에 영향이 미치지 않는 단순한 색상 변경 같은 변경사항은 리플로우 없이 리페인트만 수행하게 된다.

주의할 점은 리플로우가 일어나면 리페인트는 반드시 일어나게 된다.

**리플로우가 일어나는 대표적인 속성**

```
background, color, text-decoration, border-style, border-radius
```

불러와야 할 파일이 너무 많거나 무겁다면 로딩 시간이 길어지기 때문에 우리는 빠른 시간에 내용들이 나올 수 있도록 속도를 개선해야한다.

실제 렌더링 과정을 확인하기 위해서는 구글의 Light House 기능을 사용할 수 있다.

전세계의 인터넷 속도는 평균 30Mbps가 넘지 않는다.

<!-- ### 브라우저 구성 요소

브라우저는 **사용자 인터페이스, 브라우저 엔진, 렌더링 엔진, 네트워크, 자바스크립트 인터프리터, UI백엔드, 스토리지** 로 구성되어있다. -->

### DOM

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20210908120846/DOM.png" />

DOM이란 Document Object Model로 문서 객체 모델이다.
DOM은 동일한 문서를 표현하고, 저장하고, 조작하는 방법을 제공한다.

즉 브라우저는 이 DOM을 토대로 화면에 웹 콘텐츠들을 렌더링 한다.

자바스크립트와 같은 스크립팅 언어를 이용해 DOM 을 수정할 수 있다.

### W3C

W3C란 월드 와이드 웹을 위한 표준을 개발하고 장려하는 조직으로 회원기구, 정직원, 공공기관이 협력하여 웹 표준을 개발하는 국제 컨소시엄이다.

### 주소창에 www.google.com을 입력했을 때 일어나는 과정

1. www.google.com 을 입력하면 입력한 url 주소 중 google.com을 DNS 서버에서 검색한다.

DNS란 도메인 이름 시스템으로 사람이 읽을 수 있는 도메인 이름 (ex www.google.com)을 머신이 읽을 수 있는 IP주소로 변환하는 시스템이다.

2. 가장 가까운 DNS 서버에서 해당 도메인 이름에 해당하는 IP 주소를 찾아 사용자가 입력한 url 정보와 함께 전달한다. (IP 주소 & url 정보)

3. 전달받은 IP 주소를 이용하여 웹 브라우저는 웹 서버에게 해당 웹 사이트에 맞는 html 문서를 요청한다.

해당 HTTP 요청 메세지는 TCP/IP 프로토콜을 사용하여 서버로 전송된다.

4. 웹 서버는 WAS와 데이터베이스에서 웹페이지 작업을 처리한다.

웹 서버 혼자 모든 로직 처리와 데이터 관리를 하게되면 서버에 과부하가 일어날 수 있기 때문에 서버의 일을 돕는 WAS가 필요하다.

WAS란 사용자의 컴퓨터나 장치에 웹 어플리케이션을 수행해주는 미들웨어다.

특정 데이터 요청을 브라우저로부터 받게되면 웹 서버는 페이지의 로직이나 데이터베이스 연동을 위해 WAS에게 이들의 처리를 요청한다.

WAS는 요청을 받아 동적인 파일 (JS, TS)을 처리하고 DB에서 필요한 데이터 정보를 받아 그에 맞는 파일을 생성한다.

5. WAS에서의 작업 처리 결과들을 웹 서버로 전송하고 웹 서버는 웹 브라우저에게 html 문서 결과를 전달한다.

status code를 통해 서버 요청에 따른 결과 및 상태를 전달한다.

<img src="https://velog.velcdn.com/images/tnehd1998/post/c8ba71bf-8623-45ca-a3fb-50fc4c17872a/image.png" />

6. 위에서 작성한 웹 브라우저에 렌더링되는 과정

7. www.googlem.com 화면이 웹 브라우저에 출력된다.

### TCP/IP 프로토콜

TCP/IP는 네트워크 프로토콜 스위트로, 온라인상의 안전하고 효율적인 데이터 전송의 필수 요건을 정의합니다.

TCP는 전송 제어 프로토콜 (Transmission Control Protocol)로 한 기기에서 다른 기기로 데이터를 전송하는 것을 담당하고, IP는 인터넷 프로토콜(Internet Protocol)로 데이터의 조각을 최대한 빨리 대상 IP 주소로 보내는 역할을 표시한다.

같은 결과를 목표로 하기 때문에 한 명칭으로 알려지기도 한다.

### CSR

Client-side Rendering

### SSR

Server-side Rendering

---
