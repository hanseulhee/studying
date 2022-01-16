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

[BrowserRouter VS Hash Router](https://github.com/hanseulhee/react-for-beginners/tree/master/docs/movie)


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

전
```js
function App() {
  return (
    <Routes>
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} />
    </Routes>
  );
}
```

후
```js
function App() {
  return (
    <Routes>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  );
}
```

### Outlet

Route 의 children으로 들어가는 JSX 엘리먼트를 보여주는 역할을 한다.

```js
import { Link, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
```

### 공통 레이아웃 컴포넌트

컴포넌트를 따로 만들어두고 각 페이지 컴포넌트에서 재사용하는 방법말고 중첩된 라우트와 Outlet을 활용하여 구현할 수도 있다.


Layout.js

```js
const Layout = () => {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
```
각 페이지 컴포넌트가 보여져야 하는 부분에 Outlet 컴포넌트를 사용해주었다.



App.js

```js
<Route element={<Layout />}>
  <Route path="/" element={<Home />} />
  <Route path="/detail" element={<Detail />} />
</Route>
```


### index props

Route 컴포넌트에는 index라는 props가 있다. 이 props는 path="/"와 동일한 의미를 가진다.


전
```js
<Route path="/" element={<Home />} />
```


후
```js
<Route index element={<Home />} />
```

index props는 path="/"와 동일한 역할을 하지만 이를 좀 더 명시적으로 표현하는 방법이다.



### React Router 부가기능


#### useNavigate

navigate 함수를 사용할 때 파라미터가 숫자 타입이라면 앞으로 가거나, 뒤로 간다.


#### replace

replace를 사용하면 페이지를 이동할 때 현재 페이지가 페이지 기록에 남지 않는다.

```js
const goArticles = () => {
  navigate('/articles', { replace: true });
};
```


#### NavLink

NavLink 컴포넌트는 링크에서 사용하는 경로가 현재 Route의 경로와 일치하는 경우 특정 스타일 또는 CSS 클래스를 적용한다.


```js
<NavLink style={({isActive}) => isActive ? activeStyle : undefined} />
```

![ezgif com-gif-maker (19)](https://user-images.githubusercontent.com/63100352/149664900-c2d3c154-ef53-4351-8e43-472a9dcbf3b7.gif)
