# React Router

### Installation

```js
npm install react-router-dom@6
```

```js
npm install react-router-dom --save
```


### React-Router

React는 SPA (Single Page Application) 방식으로 여러개의 페이지를 사용하며 새로운 페이지를 로드하는 기존의 MPA 방식과 달리 새로운 페이지를 로드하지 않고 하나의 페이지 안에서 필요한 데이터만 가져오는 형태를 가진다.


[React Router 공식문서](https://reactrouter.com/docs/en/v6/getting-started/overview)


### 프로젝트에 라우터 적용

src/index.js 파일에서 react-router-dom에 내장되어 있는 BrowserRouter라는 컴포넌트를 사용한다.

[BrowserRouter VS Hash Router]()


### Route: 특정 주소에 컴포넌트 연결하기

version 6

```js
<Route path="/이동할 주소" element={보여주고 싶은 컴포넌트}>
```

Route 컴포넌트는 Routes 컴포넌트 내부에서 사용되어야 한다.


### Link Component

a 태그를 사용하면 페이지를 이동할 때 브라우저에서 페이지를 새로 불러오게 된다. Link 컴포넌트도 a태그를 사용하긴 하지만 페이지를 새로 불러오지 않고 History API를 통해 브라우저 주소의 경로만 바꾼다.


```js
import { Link } from 'react-router-dom';

<Link to="/경로">링크 이름</Link>
```


### 중첩된 라우트



### React Router 부가기능