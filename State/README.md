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

### state를 바꾸는 2가지 방법

- 직접 값을 설정하기 : setState(state + 1)
- 함수를 전달하기: setState(state => state + 1) (함수의 첫번째 인자는 현재 값이다.)

현재 state랑 관련이 없는 값을 새로운 state로 하고 싶은 경우 직접 할당, 현재 state를 바탕으로 다음 state를 계산하고 싶다면 함수를 사용한다. 함수를 사용한다면 예상치 못한 업데이트가 어디선가 일어났다고 해도 혼동을 방지할 수 있다.

### JSX

```js
<div>
  <h1>Converter</h1>
  <label for="minutes">Minutes</label>
  <input id="minutes" placeholder="Minutes" type="number" />
  <label for="hours">Hours</label>
  <input id="hours" placeholder="Hours" type="number" />
</div>
```

JSX에선 위와 같이 하면 오류가 발생하는데 production.min.js를 사용했기 때문에 오류가 안났다.
JSX를 사용하기 위해 class는 className, for이 아닌 htmlFor을 써야한다.

JSX

```js
<div>
  <h1 className="hi">Converter</h1>
  <label htmlFor="minutes">Minutes</label>
  <input id="minutes" placeholder="Minutes" type="number" />
  <label htmlFor="hours">Hours</label>
  <input id="hours" placeholder="Hours" type="number" />
</div>
```

## React JS에서 form 다루기

```js
function App() {
  const [minutes, setMinutes] = React.useState();
  const onChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <h1 className="hi">Converter</h1>
      <label htmlFor="minutes">Minutes</label>
      <input
        value={minutes}
        id="minutes"
        placeholder="Minutes"
        type="number"
        onChange={onChange}
      />
      <label htmlFor="hours">Hours</label>
      <input id="hours" placeholder="Hours" type="number" />
    </div>
  );
}
```

input의 value를 state로 연결해준다. 이렇게 한다면 어디서든 input의 value를 수정해줄 수 있다.

사용자가 입력한 Input의 value를 바탕으로 component를 업데이트해준다.

### Unit converter (단위 변환)

Hours input의 value는 state에 있는 minutes 값이지만 minutes / 60를 해 시간단위로 변환시켜주었다.
Math.round를 이용해 반올림을 하였다.

Hours input은 onChange event가 없기 때문에 아무 입력을 할 수 없다.

```js
<input value={minutes / 60} id="hours" placeholder="Hours" type="number" />
```

reset 버튼을 이용해 state를 리스닝하거나 연결한 모든 것들은 전부 0으로 돌려진다.


### Money converter

```

```
