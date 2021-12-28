# React JS Basic

지금은 안쓰는 옛 코드 -> [JSX](https://ko.reactjs.org/docs/introducing-jsx.html)

## React Element

React를 import 해 createElement function을 가진 React object에 접근하였다.

```html
<!-- React JS와 ReactDOM 코드 Import -->
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
```

React JS는 어플리케이션이 상호작용할 수 있도록 만들어주는 라이브러리이다. (ex 엔진)

react-dom은 라이브러리 또는 package인데 모든 React element들을 HTML body에 둘 수 있도록 한다.
비어있는 root div에 react-dom이 React element들을 가져다 둔다.

```html
<div id="root"></div>
```

ReactDOM.render()에서 render의 의미는 React element들을 root div안에서 보여주라는 뜻으로 즉, 사용자에게 보여준다는 의미다.

Javascript가 element를 생성하고 React JS가 그것을 HTML로 번역한다.

두가지 const를 render 하고 싶은 경우 div를 만들어 배열로 만든다.

```js
const container = React.createElement("div", null, [h3, btn]);
ReactDOM.render(container, root);
```

## JSX

JSX는 JavaScript를 확장한 문법이다.

HTML과 비슷해 JSX로 React 요소를 만드는 것이 굉장히 편하다. JSX는 어플리케이션을 여러가지 작은 요소로 나누어 관리할 수 있다.

### arrow function

소괄호는 retrun 한다는 것을 전제로 하는 것이고 중괄호는 return을 안한다는 것을 전제로 한다.

= () => ( 은 function과 return문을 이미 포함하고 있다.
