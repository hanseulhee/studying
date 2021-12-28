# State

React JS는 UI에서 바뀐 부분만 업데이트한다.

component나 JSX에 변수를 추가하고 싶을 땐 중괄호를 이용한다.

```html
<h3>Total clicks: {counter}</h3>
```

UI를 업데이트하고 싶다면 render 함수를 다시 호출한다.

```js
let counter = 0;
function countUp() {
  counter = counter + 1;
  render();
}

function render() {
  ReactDOM.render(<Container />, root);
}

const Container = () => (
  <div>
    <h3>Total clicks: {counter}</h3>
    <button onClick={countUp}>Click me</button>
  </div>
);
render();
```

위와 같은 코드는 계속 호출을 해야되기 때문에 효율적인 코드는 아니다.


## 리렌더링을 발생시킬 가장 좋은 방법

