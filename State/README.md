# State

React JS는 데이터가 바뀔 때마다 component를 리렌더링하고 UI에서 바뀐 부분만 업데이트한다.

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
  ReactDOM.render(<App />, root);
}

function App() {
  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={countUp}>Click me</button>
    </div>
  );
}
render();
```

위와 같은 코드는 계속 호출을 해야되기 때문에 효율적인 코드는 아니다. (직접 리렌더링을 하였음)


### 리렌더링을 발생시킬 가장 좋은 방법

함수를 계속 불러줄 필요 없이 React JS 내에서 데이터를 보관하고 자동으로 리렌더링하기!

useState는 배열을 주는데 배열의 첫 번째 값은 초기값(data 값), 두 번째 요소는 그 값(data 값)을 바꾸는 함수다.

```js
const data = React.useState(0);
console.log(data); // (2)[(0, ƒ)];
```

어떤 값을 부여하던 modifier 함수는 그 값으로 업데이트하고 리렌더링을 일으킨다. modifier 함수를 가지고 state를 변경할 때 component가 재생성된다.

React.useState 함수는 counter 같은 데이터를 숫자형 데이터로 건네주고 그 데이터 값을 바꿀 함수도 준다. 해당 함수를 이용해 데이터를 바꿨을 때 데이터 값이 바뀌고 component도 동시에 리렌더링된다.
변수를 컴포넌트에 연결해서 변수에 데이터를 담고 해당 변수에 담긴 값을 바꿔준다.
```js
const root = document.getElementById("root");
function App() {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
ReactDOM.render(<App />, root);
```


### Vanila Js와 비교하자면

React JS는 HTML 요소를 생성하거나 찾지 않아도 되고 eventListener을 더하거나 UI를 업데이트해주지 않아도 된다.